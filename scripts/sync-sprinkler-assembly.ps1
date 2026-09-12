$ErrorActionPreference = 'Stop'
$assemblyRepo = Split-Path $PSScriptRoot -Parent
$pilot = Join-Path $assemblyRepo 'work/hidden-systems-pilot-01'
$cueRows = @(Import-Csv -LiteralPath (Join-Path $pilot 'cues-v2.csv'))
if ($cueRows.Count -ne 93) { throw 'Expected 93 cues' }
$boundary = 0
foreach ($cueRow in $cueRows) {
  if ([int]$cueRow.f_in -ne $boundary -or [int]$cueRow.f_out -le $boundary) { throw "Invalid boundary at cue $($cueRow.cue)" }
  $boundary = [int]$cueRow.f_out
}
if ($boundary -ne 6738) { throw "Expected 6738 frames; got $boundary" }
$cueJson = ConvertTo-Json -InputObject $cueRows -Depth 5
$cueModule = 'export const cues = ' + $cueJson + ';' + [Environment]::NewLine
[IO.File]::WriteAllText((Join-Path $assemblyRepo 'src/sprinkler-pilot/cues.ts'), $cueModule, [Text.UTF8Encoding]::new($false))
node (Join-Path $PSScriptRoot 'production-manifest.mjs')
if ($LASTEXITCODE -ne 0) { throw 'Production manifest compilation failed' }
Write-Output "Validated $($cueRows.Count) contiguous cues / $boundary frames."
