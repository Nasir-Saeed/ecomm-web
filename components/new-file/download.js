jQuery(document).ready(function ($) {
    // Handle button click
    $('#download-button').click(function () {
        var postID = $(this).data('post-id'); // Get the post ID from the button
        var pdfUrl = $(this).data('pdf-url'); // Get the PDF URL from a custom data attribute (you can define this in the shortcode)

        console.log("Download button clicked. Post ID: " + postID); // Log the post ID for debugging

        // AJAX request to increment download count
        $.ajax({
            url: download_data.ajax_url, // The WordPress AJAX handler
            type: 'POST',
            data: {
                action: 'increment_download_count', // Action hook to be used in WordPress
                post_id: postID
            },
            success: function (response) {
                console.log("AJAX success response:", response); // Log the response for debugging

                if (response.success) {
                    // Update the download count on the page
                    $('#download-count').text(response.data.new_count); // Correctly access the new count in response.data
                    console.log("Download count updated to: " + response.data.new_count); // Log the new count for debugging
                } else {
                    console.log('Failed to update the count.');
                }

                // Trigger PDF download
                var link = document.createElement('a');
                link.href = pdfUrl; // Set the PDF URL
                link.download = pdfUrl.split('/').pop(); // Optionally set the filename to the PDF's filename
                link.click(); // Trigger the download by simulating a click
            },
            error: function (xhr, status, error) {
                console.log("AJAX error:", error); // Log any AJAX errors
            }
        });
    });
});
