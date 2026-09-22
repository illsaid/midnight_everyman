[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $PSScriptRoot
$target = Join-Path $repo 'public/episode-02/first-act'

$inputs = @(
  @{Source='work/hidden-systems-ep-02/source-media/generated/opening-redo-audio.wav'; Target='opening-redo-audio.wav'; Hash='5d22e17848dfbb45fbf0e9e24bc66db283d01d7f9beddb81437513cb3eaddf65'},
  @{Source='work/hidden-systems-ep-02/source-media/generated/trump-escalator-freeze-v1.jpg'; Target='opening-freeze.jpg'; Hash=$null},
  @{Source='work/hidden-systems-ep-02/source-media/generated/everyman-escalator-bridge-v1.mp4'; Target='everyman-bridge.mp4'; Hash='2b3fd1c2e99f4cfc8f1ebf93d4ba5f0b5ed3457b4e4320bf0f6374cfdaddc3ea'},
  @{Source='work/hidden-systems-ep-02/audio/escvofinal.mp3'; Target='voiceover.mp3'; Hash='7ed85d0ff4a00600f39b9cf3ed62fc3948c1c40f17022a6fff921f6c5f5a4bde'}
)

New-Item -ItemType Directory -Force -Path $target | Out-Null
foreach ($input in $inputs) {
  $source = Join-Path $repo $input.Source
  if (-not (Test-Path -LiteralPath $source -PathType Leaf)) { throw "Missing locked source: $source" }
  if ($input.Hash) {
    $actual = (Get-FileHash -LiteralPath $source -Algorithm SHA256).Hash.ToLowerInvariant()
    if ($actual -ne $input.Hash) { throw "Hash mismatch for $($input.Source): expected $($input.Hash), got $actual" }
  }
  Copy-Item -LiteralPath $source -Destination (Join-Path $target $input.Target) -Force
}

$frameSource = Join-Path $repo 'work/hidden-systems-ep-02/source-media/generated/opening-redo-frames'
$frameTarget = Join-Path $target 'opening-redo-frames'
$frames = @(Get-ChildItem -LiteralPath $frameSource -Filter 'frame-*.jpg' -File | Sort-Object Name)
if ($frames.Count -lt 589) { throw "Opening frame sequence is incomplete: expected at least 589 frames, found $($frames.Count)" }
if ((Get-FileHash -LiteralPath $frames[0].FullName -Algorithm SHA256).Hash.ToLowerInvariant() -ne '203c4d2fd4fcc0c4a7585791358f0c4f5319cde9c85f3ad128ae44ffdc00894d') { throw 'Opening frame 0000 hash mismatch' }
if ((Get-FileHash -LiteralPath $frames[588].FullName -Algorithm SHA256).Hash.ToLowerInvariant() -ne '7b8a014cab12b857a6ab81b0bd5836c01054323712c3599c275c6e87e658d788') { throw 'Opening frame 0588 hash mismatch' }
New-Item -ItemType Directory -Force -Path $frameTarget | Out-Null
Copy-Item -LiteralPath $frames[0..588].FullName -Destination $frameTarget -Force

Write-Output "Staged Episode 02 first-act media in $target"
