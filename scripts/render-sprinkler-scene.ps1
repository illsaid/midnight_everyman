param([Parameter(Mandatory=$true)][string]$Scene, [string]$Version='review', [int]$Padding=24)
$ErrorActionPreference='Stop'
$repo=Split-Path $PSScriptRoot -Parent
Push-Location $repo
try {
 & "$PSScriptRoot/sync-sprinkler-assembly.ps1"
 $data=Get-Content 'work/hidden-systems-pilot-01/production-resolved.json' -Raw | ConvertFrom-Json
 $ranges=@($data.reviewRanges | Where-Object scene -eq $Scene)
 if (!$ranges.Count) { throw "Unknown scene: $Scene" }
 if ($Version -notmatch '^[a-zA-Z0-9_-]+$' -or $Scene -notmatch '^[a-zA-Z0-9_-]+$') {throw 'Use simple scene/version names'}
 $i=0
 foreach ($range in $ranges) {
  $i++
  $first=[Math]::Max(0,$range.from-$Padding)
  $last=[Math]::Min($data.durationInFrames-1,$range.to+$Padding-1)
  npx remotion render src/index.ts SprinklerPilotAssembly "work/hidden-systems-pilot-01/assembly-review/$Scene-$Version-$i.mp4" "--frames=$first-$last" --concurrency=4
  if ($LASTEXITCODE -ne 0) {throw 'Render failed'}
 }
} finally {Pop-Location}
