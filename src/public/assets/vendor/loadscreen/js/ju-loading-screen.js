// Filename: public/assets/vendor/loadscreen/js/ju-loading-screen.js

// Code written in public files is shared by your site's
// Backend, page code, and site code environments.

// Use public files to hold utility functions that can
// be called from multiple locations in your site's code.
export function add(param1, param2) {
	return param1 + param2;
}
jQuery(window).on("load",function() {
    jQuery("#ju-loading-screen").addClass('ju-hide--loading-screen--');
});