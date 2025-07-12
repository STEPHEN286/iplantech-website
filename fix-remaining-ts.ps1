# PowerShell script to fix remaining TypeScript syntax in JSX files

$uiComponentsPath = "components/ui"

# Function to fix a single file
function Fix-TsxSyntax {
    param($filePath)
    
    $content = Get-Content $filePath -Raw
    $fixedContent = $content
    
    # Remove type imports
    $fixedContent = $fixedContent -replace "import.*type.*from.*`n", ""
    $fixedContent = $fixedContent -replace "import.*\{.*type.*\}.*from.*`n", ""
    
    # Remove interface definitions
    $fixedContent = $fixedContent -replace "export\s+interface\s+\w+[^{]*\{[^}]*\}", ""
    $fixedContent = $fixedContent -replace "interface\s+\w+[^{]*\{[^}]*\}", ""
    
    # Remove type definitions
    $fixedContent = $fixedContent -replace "export\s+type\s+\w+\s*=\s*[^;]+;", ""
    $fixedContent = $fixedContent -replace "type\s+\w+\s*=\s*[^;]+;", ""
    
    # Remove generic type parameters from React.forwardRef
    $fixedContent = $fixedContent -replace "React\.forwardRef<[^>]*>", "React.forwardRef"
    $fixedContent = $fixedContent -replace "React\.forwardRef,\s*[^>]*>", "React.forwardRef("
    
    # Remove type annotations from function parameters
    $fixedContent = $fixedContent -replace ":\s*[A-Za-z<>\[\]{}|&,.\s]+(?=\s*[,)])", ""
    $fixedContent = $fixedContent -replace ":\s*[A-Za-z<>\[\]{}|&,.\s]+(?=\s*=)", ""
    
    # Remove VariantProps references
    $fixedContent = $fixedContent -replace "VariantProps<[^>]*>", ""
    $fixedContent = $fixedContent -replace "VariantProps", ""
    
    # Remove React.ComponentPropsWithoutRef references
    $fixedContent = $fixedContent -replace "React\.ComponentPropsWithoutRef<[^>]*>", ""
    $fixedContent = $fixedContent -replace "React\.ComponentPropsWithoutRef", ""
    
    # Remove React.ComponentProps references
    $fixedContent = $fixedContent -replace "React\.ComponentProps<[^>]*>", ""
    $fixedContent = $fixedContent -replace "React\.ComponentProps", ""
    
    # Remove React.ReactElement references
    $fixedContent = $fixedContent -replace "React\.ReactElement", ""
    
    # Remove UseEmblaCarouselType references
    $fixedContent = $fixedContent -replace "UseEmblaCarouselType\[[^\]]*\]", ""
    $fixedContent = $fixedContent -replace "UseEmblaCarouselType", ""
    
    # Remove Parameters references
    $fixedContent = $fixedContent -replace "Parameters<[^>]*>\[[^\]]*\]", ""
    $fixedContent = $fixedContent -replace "Parameters<[^>]*>", ""
    
    # Remove FieldPath references
    $fixedContent = $fixedContent -replace "FieldPath<[^>]*>", ""
    $fixedContent = $fixedContent -replace "FieldPath", ""
    
    # Clean up empty lines
    $fixedContent = $fixedContent -replace "`n`n`n+", "`n`n"
    
    # Write the fixed content
    Set-Content -Path $filePath -Value $fixedContent -NoNewline
    Write-Host "Fixed: $filePath"
}

# Fix UI components
Get-ChildItem -Path $uiComponentsPath -Filter "*.jsx" | ForEach-Object {
    Fix-TsxSyntax $_.FullName
}

Write-Host "Fixed all remaining TypeScript syntax!" 