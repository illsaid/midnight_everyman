param([ValidateSet('v1', 'v2', 'v3', 'v4', 'v5', 'v6')][string]$Version = 'v6')
$ErrorActionPreference = 'Stop'
$assemblyRepo = Split-Path $PSScriptRoot -Parent
$pilot = Join-Path $assemblyRepo 'work/hidden-systems-pilot-01'
$review = Join-Path $pilot 'assembly-review'
$movie = Join-Path $review "sprinkler-assembly-$Version.mp4"
$review = Join-Path $review $Version
New-Item -ItemType Directory -Path $review -Force | Out-Null
$ffmpeg = Join-Path $assemblyRepo 'node_modules/@remotion/compositor-win32-x64-msvc/ffmpeg.exe'
$ffprobe = Join-Path $assemblyRepo 'node_modules/@remotion/compositor-win32-x64-msvc/ffprobe.exe'
& $ffprobe -v error -show_entries 'stream=codec_name,codec_type,width,height,r_frame_rate,nb_frames,duration:format=duration,size' -of json $movie
if ($LASTEXITCODE -ne 0) { throw 'Media probe failed' }
$cueFile = if ($Version -eq 'v1') { 'cues.csv' } else { 'cues-v2.csv' }
$rows = @(Import-Csv -LiteralPath (Join-Path $pilot $cueFile))
$checkFrames = @()
foreach ($group in ($rows | Group-Object movement)) {
  $startFrame = [int]$group.Group[0].f_in
  $endFrame = [int]$group.Group[-1].f_out - 1
  $checkFrames += $startFrame, [int][Math]::Floor(($startFrame + $endFrame) / 2), $endFrame
}
foreach ($cueRow in $rows) {
  if ($cueRow.cue -in @('01','02','03','04','26','27','28','29','30','31','32','33','41','47','48','51','52','54','56','69','74','75','91','92')) {
    $startFrame = [int]$cueRow.f_in
    $endFrame = [int]$cueRow.f_out - 1
    $checkFrames += $startFrame, [int][Math]::Floor(($startFrame + $endFrame) / 2), $endFrame
  }
}
$checkFrames = @($checkFrames | Sort-Object -Unique)
Add-Type -AssemblyName System.Drawing
$sheet = $null
$graphics = $null
$index = 0
foreach ($checkFrame in $checkFrames) {
  $framePath = Join-Path $review "check-$checkFrame.png"
  $seek = ([double]$checkFrame / 24).ToString('F6', [Globalization.CultureInfo]::InvariantCulture)
  & $ffmpeg -hide_banner -loglevel error -y -ss $seek -i $movie -frames:v 1 -vf 'scale=480:270' -update 1 $framePath
  if ($LASTEXITCODE -ne 0) { throw "Frame extraction failed: $checkFrame" }
  if ($index % 12 -eq 0) {
    $sheet = [Drawing.Bitmap]::new(1920, 810)
    $graphics = [Drawing.Graphics]::FromImage($sheet)
    $graphics.Clear([Drawing.Color]::Black)
  }
  $thumbnail = [Drawing.Image]::FromFile($framePath)
  $graphics.DrawImage($thumbnail, [int](($index % 4) * 480), [int]([Math]::Floor(($index % 12) / 4) * 270), 480, 270)
  $thumbnail.Dispose()
  if ($index % 12 -eq 11 -or $index -eq $checkFrames.Count - 1) {
    $sheet.Save((Join-Path $review ('qa-{0:D2}.jpg' -f [int]([Math]::Floor($index / 12) + 1))), [Drawing.Imaging.ImageFormat]::Jpeg)
    $graphics.Dispose()
    $sheet.Dispose()
  }
  $index++
}
Write-Output "QA frames in chronological order: $($checkFrames -join ', ')"
$installerStart = [double]($rows | Where-Object cue -eq '69').f_in / 24 - 2
$installerEnd = [double]($rows | Where-Object cue -eq '75').f_out / 24 + 2
$macroStart = [double]($rows | Where-Object cue -eq '91').f_in / 24 - 2
$excerpts = @(@('cinema',0,8), @('installer',$installerStart,($installerEnd - $installerStart)), @('macro',$macroStart,(280.75 - $macroStart)))
foreach ($excerpt in $excerpts) {
  & $ffmpeg -hide_banner -loglevel error -y -ss $excerpt[1] -i $movie -t $excerpt[2] -c:v libx264 -crf 23 -c:a aac (Join-Path $review ("review-" + $excerpt[0] + '.mp4'))
  if ($LASTEXITCODE -ne 0) { throw 'Review excerpt extraction failed' }
}
