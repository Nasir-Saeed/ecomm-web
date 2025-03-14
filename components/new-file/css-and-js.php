<?php


/**
 * Enqueue styles and scripts.
 */
function sunnyaid_enqueue_css_and_js()
{
    /*
     * Load Google fonts.
     * User can customized this default fonts from theme options
     */
    function sunnyaid_fonts_url()
    {
        $fonts_url = '';
        $fonts = [];
        $subsets = 'latin,latin-ext';

        if ('off' !== _x('on', 'Inter: on or off', 'sunnyaid')) {
            $fonts[] = 'Inter:300,400,500,600,700';
        }

        if ($fonts) {
            $fonts_url = add_query_arg(array(
                'family' => urlencode(implode('|', $fonts)),
                'subset' => urlencode($subsets),
            ), 'https://fonts.googleapis.com/css');
        }

        return esc_url_raw($fonts_url);
    }

    wp_enqueue_style('sunnyaid-googlefonts', sunnyaid_fonts_url(), [], null);

    // Enqueue Style
    wp_enqueue_style('bootstrap', get_theme_file_uri('assets/css/bootstrap.min.css'), array(), '5.0.', 'all');

    wp_enqueue_style('font-awesome-5', get_theme_file_uri('assets/css/fontawesome.css'), array(), '5.13.0', 'all');

    wp_enqueue_style('e-animations', get_theme_file_uri('assets/css/animate.css'), array(), '3.5.1', 'all');

    wp_enqueue_style('recoleta-font', get_theme_file_uri('assets/css/recoleta-font.css'), array(), '1.0.0', 'all');

    wp_enqueue_style('swiper-sunnyaid', get_theme_file_uri('assets/css/swiper-bundle.min.css'), array(), '6.6.1', 'all');

    wp_enqueue_style('nice-select', get_theme_file_uri('assets/css/nice-select.css'), array(), '1.0.0', 'all');

    wp_enqueue_style('magnific-popup', get_theme_file_uri('assets/css/magnific-popup.css'), array(), '1.0.0', 'all');

    wp_enqueue_style('odometer', get_theme_file_uri('assets/css/odometer.min.css'), array(), '1.0.0', 'all');

    wp_enqueue_style('sunnyaid-core', get_theme_file_uri('assets/css/sunnyaid-core.css'), array(), SUNNYAID_VERSION, 'all');

    wp_enqueue_style('sunnyaid-main', get_theme_file_uri('assets/css/style.css'), array(), SUNNYAID_VERSION, 'all');

    wp_enqueue_style('sunnyaid-style', get_stylesheet_uri(), array(), SUNNYAID_VERSION, 'all');

    // Enqueue script
    wp_enqueue_script('popper', get_theme_file_uri('assets/js/popper.min.js'), array('jquery'), '2.11.7', true);

    wp_enqueue_script('bootstrap', get_theme_file_uri('assets/js/bootstrap.min.js'), array('jquery'), '5.0.0', true);

    wp_enqueue_script('swiper-slider', get_theme_file_uri('assets/js/swiper-bundle.min.js'), array('jquery'), '6.7.0', true);

    wp_enqueue_script('nice-select', get_theme_file_uri('assets/js/jquery.nice-select.min.js'), array('jquery'), '1.0.0', true);

    wp_enqueue_script('wow', get_theme_file_uri('assets/js/wow.min.js'), array('jquery'), '1.1.3', true);

    wp_enqueue_script('magnific-popup', get_theme_file_uri('assets/js/magnific-popup.min.js'), array('jquery'), '1.1.0', true);

    wp_enqueue_script('appear', get_theme_file_uri('assets/js/appear.js'), array('jquery'), '1.0.0', true);

    wp_enqueue_script('odometer', get_theme_file_uri('assets/js/odometer.min.js'), array('jquery'), '0.4.8', true);

    wp_enqueue_script('sunnyaid-main', get_theme_file_uri('assets/js/main.js'), array('jquery'), SUNNYAID_VERSION, true);

    wp_enqueue_script('download-script', get_theme_file_uri('assets/js/download.js'), array('jquery'), null, true);


    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}

add_action('wp_enqueue_scripts', 'sunnyaid_enqueue_css_and_js');

/**
 * Enqueue Backend Styles And Scripts.
 **/

function sunnyaid_backend_css_js($screen)
{

    if ($screen == "widgets.php") {
        wp_enqueue_media();
        wp_enqueue_script('sunnyaid-media-upload', get_theme_file_uri('assets/js/media-upload.js'), array('jquery'), '1.0.0', true);
    }
}

add_action('admin_enqueue_scripts', 'sunnyaid_backend_css_js');