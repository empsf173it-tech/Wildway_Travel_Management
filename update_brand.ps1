$files = Get-ChildItem -Filter *.html

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # Replace texts
    $content = $content -replace 'Wanderlust Travels', 'WildWay Travel'
    $content = $content -replace 'Wanderlust', 'WildWay'
    
    # Replace navbar icon
    $content = $content -replace '<i class="bi bi-airplane-engines-fill text-primary"></i>', '<img src="assets/images/logo.svg" alt="WildWay Logo" width="30" height="30">'
    
    # Replace footer icon
    $content = $content -replace '<i class="bi bi-airplane-engines-fill"></i>', '<img src="assets/images/logo.svg" alt="WildWay Logo" width="24" height="24">'
    
    # Add Favicon before Google Fonts (which is present in all files)
    if ($content -notmatch 'rel="icon"') {
        $content = $content -replace '<!-- Google Fonts -->', "<link rel=`"icon`" href=`"assets/images/logo.svg`" type=`"image/svg+xml`">`n    <!-- Google Fonts -->"
    }
    
    Set-Content -Path $file.FullName -Value $content -NoNewline
}
