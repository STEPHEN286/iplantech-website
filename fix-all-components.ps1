# PowerShell script to find and fix all remaining broken components

$uiComponentsPath = "components/ui"

# Function to check and fix a component
function Fix-Component {
    param($filePath)
    
    $content = Get-Content $filePath -Raw
    $needsFix = $false
    
    # Check for empty function bodies
    if ($content -match "\) => \([\s]*\)") {
        $needsFix = $true
        Write-Host "Found empty function body in: $filePath"
    }
    
    # Check for broken React.forwardRef syntax
    if ($content -match "React\.forwardRef[^>]*>") {
        $needsFix = $true
        Write-Host "Found broken React.forwardRef in: $filePath"
    }
    
    # Check for missing JSX content
    if ($content -match "return \([\s]*\)") {
        $needsFix = $true
        Write-Host "Found empty return in: $filePath"
    }
    
    if ($needsFix) {
        Write-Host "Fixing: $filePath"
        # For now, just log the issue - we'll fix them manually
        return $true
    }
    
    return $false
}

# Check all JSX files
$brokenFiles = @()
Get-ChildItem -Path $uiComponentsPath -Filter "*.jsx" | ForEach-Object {
    if (Fix-Component $_.FullName) {
        $brokenFiles += $_.Name
    }
}

if ($brokenFiles.Count -gt 0) {
    Write-Host "`nBroken files found:"
    $brokenFiles | ForEach-Object { Write-Host "- $_" }
} else {
    Write-Host "`nAll components look good!"
} 