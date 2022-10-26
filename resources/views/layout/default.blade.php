<?php
$theme  =   ns()->option->get( 'ns_default_theme', 'light' );
?>
<!DOCTYPE html>
<html lang="en" class="{{ $theme }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{!! $title ?? __( 'Unamed Page' ) !!}</title>
    @vite([
        'resources/scss/grid.scss',
        'resources/scss/fonts.scss',
        'resources/scss/animations.scss',
        'resources/scss/typography.scss',
        'resources/scss/app.scss',
        'resources/scss/' . $theme . '.scss'
    ])
    <link rel="stylesheet" href="{{ asset( 'css/line-awesome.css' ) }}">
    @yield( 'layout.base.header' )
</head>
<body>
    @yield( 'layout.default.body' )
</body>
</html>