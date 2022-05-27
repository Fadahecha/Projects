<?php
// add_action('wp_enqueue_scripts', 'my_theme_enqueue_styles');
// function my_theme_enqueue_styles()
// {
//     $parenthandle = 'parent-style'; // This is 'twentyfifteen-style' for the Twenty Fifteen theme.
//     $theme = wp_get_theme();
//     wp_enqueue_style(
//         $parenthandle,
//         get_template_directory_uri() . '/style.css',
//         array(),  // if the parent theme code has a dependency, copy it to here
//         $theme->parent()->get('Version')
//     );
//     wp_enqueue_style(
//         'child-style',
//         get_stylesheet_uri(),
//         array($parenthandle),
//         $theme->get('Version') // this only works if you have Version in the style header
//     );


//}

function add_theme_scripts()
{
    wp_enqueue_style('fabien', get_stylesheet_uri());

    //CSS
    wp_enqueue_style('font-awesome', get_stylesheet_directory_uri() . '/css/font-awesome.min.css', array(), '1.2', 'all');
    wp_enqueue_style('landing', get_stylesheet_directory_uri() . '/css/landing.css', array(), '1.2', 'all');
    wp_enqueue_style('fafa', get_stylesheet_directory_uri() . '/css/fafa.css', array(), '1.2', 'all');
    wp_enqueue_style('bootstrap', get_stylesheet_directory_uri() . '/css/bootstrap.min.css', array(), '1.2', 'all');

    //JS
    wp_enqueue_script('script', get_stylesheet_directory_uri() . '/js/script.js', array('jquery'), 1.2, true);
    wp_enqueue_script('bootstrap', get_stylesheet_directory_uri() . '/js/bootstrap.bundle.min.js', array('jquery'), 1.2, true);


    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'add_theme_scripts');