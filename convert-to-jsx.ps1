# PowerShell script to convert .tsx files to .jsx
# This script removes TypeScript type annotations and converts files to JSX

$uiComponentsPath = "components/ui"
$componentsPath = "components"
$hooksPath = "hooks"

# Function to convert a single file
function Convert-TsxToJsx {
    param($filePath)
    
    $content = Get-Content $filePath -Raw
    $jsxContent = $content
    
    # Remove TypeScript imports
    $jsxContent = $jsxContent -replace "import.*type.*from.*`n", ""
    $jsxContent = $jsxContent -replace "import.*\{.*type.*\}.*from.*`n", ""
    
    # Remove type annotations
    $jsxContent = $jsxContent -replace ":\s*[A-Za-z<>\[\]{}|&,.\s]+(?=\s*[,)])", ""
    $jsxContent = $jsxContent -replace ":\s*[A-Za-z<>\[\]{}|&,.\s]+(?=\s*=)", ""
    $jsxContent = $jsxContent -replace ":\s*[A-Za-z<>\[\]{}|&,.\s]+(?=\s*>)", ""
    
    # Remove interface and type definitions
    $jsxContent = $jsxContent -replace "interface\s+\w+\s*\{[^}]*\}", ""
    $jsxContent = $jsxContent -replace "type\s+\w+\s*=\s*[^;]+;", ""
    
    # Remove generic type parameters
    $jsxContent = $jsxContent -replace "<[^>]*>", ""
    
    # Clean up empty lines
    $jsxContent = $jsxContent -replace "`n`n`n+", "`n`n"
    
    # Create new file path
    $newPath = $filePath -replace "\.tsx$", ".jsx"
    if ($filePath -match "\.ts$") {
        $newPath = $filePath -replace "\.ts$", ".js"
    }
    
    # Write the converted content
    Set-Content -Path $newPath -Value $jsxContent -NoNewline
    Write-Host "Converted: $filePath -> $newPath"
    
    # Remove original file
    Remove-Item $filePath
    Write-Host "Removed: $filePath"
}

# Convert UI components
Get-ChildItem -Path $uiComponentsPath -Filter "*.tsx" | ForEach-Object {
    Convert-TsxToJsx $_.FullName
}

# Convert .ts files in UI components
Get-ChildItem -Path $uiComponentsPath -Filter "*.ts" | ForEach-Object {
    Convert-TsxToJsx $_.FullName
}

# Convert components in main components directory
Get-ChildItem -Path $componentsPath -Filter "*.tsx" | ForEach-Object {
    Convert-TsxToJsx $_.FullName
}

# Convert hooks
Get-ChildItem -Path $hooksPath -Filter "*.tsx" | ForEach-Object {
    Convert-TsxToJsx $_.FullName
}

Get-ChildItem -Path $hooksPath -Filter "*.ts" | ForEach-Object {
    Convert-TsxToJsx $_.FullName
}

Write-Host "Conversion complete!" 