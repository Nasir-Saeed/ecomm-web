<?php

$sunnyaid_theme_data = wp_get_theme();

/*
 * Define theme version
 */
define('SUNNYAID_VERSION', (WP_DEBUG) ? time() : $sunnyaid_theme_data->get('Version'));

/*
 * Inc folder directory
 */
define('SUNNYAID_INC_DIR', get_template_directory() . '/inc/');

/*
 * After setup theme
 */
require_once SUNNYAID_INC_DIR . 'theme-setup.php';

/*
 * Load default theme options
 */
require_once SUNNYAID_INC_DIR . 'cs-framework-functions.php';

/*
 * Load meta box and theme options if Codestar framework installed.
 */
if (class_exists('CSF')) {
    // require_once SUNNYAID_INC_DIR . 'metabox-and-options/metabox-and-options.php';
}

/**
 * Template Functions
 */
require SUNNYAID_INC_DIR . 'template-functions.php';

/*
 * Enqueue styles and scripts.
 */
require_once SUNNYAID_INC_DIR . 'css-and-js.php';

/*
 * Register widget area
 */
require_once SUNNYAID_INC_DIR . 'widget-area-init.php';

/**
 * tgmp functions file
 */
require_once SUNNYAID_INC_DIR . 'class-tgm-plugin-activation.php';
require_once SUNNYAID_INC_DIR . 'add-plugin.php';

/*
 * Load inline style.
 */
require_once SUNNYAID_INC_DIR . 'inline-style.php';

/**
 * Implement the Custom Header feature.
 */
require SUNNYAID_INC_DIR . 'custom-header.php';

/**
 * Custom template tags for this theme.
 */
require SUNNYAID_INC_DIR . 'class-wp-sunnyaid-navwalker.php';

/**
 * sunnyaid Core Functions
 */
require SUNNYAID_INC_DIR . 'sunnyaid-helper-class.php';

/**
 * Customizer additions.
 */
require SUNNYAID_INC_DIR . '/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if (defined('JETPACK__VERSION')) {
    require SUNNYAID_INC_DIR . '/jetpack.php';
}

/*
 * Comment Template
 */
require_once SUNNYAID_INC_DIR . 'comment-template.php';

/*
 * Import Demo Content
 */
require_once SUNNYAID_INC_DIR . 'demo-content/import-demo-content.php';



// new code

// // Set default download count if it doesn't exist
function initialize_download_count($post_id)
{
    if (get_post_meta($post_id, 'download_count', true) === '') {
        update_post_meta($post_id, 'download_count', 0);
    }
}
add_action('wp_insert_post', 'initialize_download_count');



// Increment download count function
function increment_download_count($post_id)
{
    $current_count = get_post_meta($post_id, 'download_count', true);
    $new_count = $current_count + 1;
    update_post_meta($post_id, 'download_count', $new_count);
}


// Shortcode to display the download button and count
function download_button_shortcode($atts)
{
    global $post;

    // Get the current download count from post meta
    $count = get_post_meta($post->ID, 'download_count', true);
    if (!$count) {
        $count = 0;
    }

    // Get the URL of the PDF file (You can customize this as needed)
    $pdf_url = get_post_meta($post->ID, 'pdf_file_url', true); // Assume the PDF URL is stored in custom field 'pdf_file_url'

    // Output the button and the count
    $html = '<div class="download-container">
                <div class="download-column">
                    <button id="download-button" data-post-id="' . $post->ID . '" data-pdf-url="' . esc_url($pdf_url) . '" class="download-btn">
                        Download Now
                    </button>
                    <p class="free-now">FREE NOW</p>
                </div>
                <div class="download-column">
                    <p class="download-text">Downloads: <span id="download-count">' . $count . '</span></p>
                </div>
            </div>';

    return $html;
}
add_shortcode('download_button', 'download_button_shortcode');



function enqueue_download_script()
{
    wp_enqueue_script('download-script', get_theme_file_uri('assets/js/download.js'), array('jquery'), null, true);

    // Localize the script to pass Ajax URL
    wp_localize_script('download-script', 'download_data', array(
        'ajax_url' => admin_url('admin-ajax.php')
    ));
}
add_action('wp_enqueue_scripts', 'enqueue_download_script');


function increment_download_count_ajax()
{
    // Ensure that the post ID is valid
    if (isset($_POST['post_id'])) {
        $post_id = intval($_POST['post_id']);

        // Debugging: Check if the post_id is correct
        error_log("Post ID received: " . $post_id);

        // Get the current download count
        $current_count = get_post_meta($post_id, 'download_count', true);
        if (!$current_count) {
            $current_count = 0; // Set to 0 if it doesn't exist yet
        }

        // Increment the download count
        $new_count = $current_count + 1;

        // Debugging: Log the updated download count
        error_log("New download count: " . $new_count);

        // Update the download count in the database
        update_post_meta($post_id, 'download_count', $new_count);

        // Send a JSON response back to the front-end
        wp_send_json_success(array('new_count' => $new_count));
    }

    // If the post ID is not set, return an error
    wp_send_json_error();
}
add_action('wp_ajax_increment_download_count', 'increment_download_count_ajax');
add_action('wp_ajax_nopriv_increment_download_count', 'increment_download_count_ajax');

