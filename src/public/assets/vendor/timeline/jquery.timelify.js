// Filename: public/assets/vendor/timeline/jquery.timelify.js

// Code written in public files is shared by your site's
// Backend, page code, and site code environments.

// Use public files to hold utility functions that can
// be called from multiple locations in your site's code.
export function add(param1, param2) {
	return param1 + param2;
}

// The following code demonstrates how to call the add
// function from your site's page code or site code.
/*
import {add} from 'public/assets/vendor/timeline/jquery.timelify.js'
$w.onReady(function () {
    let sum = add(6,7);
    console.log(sum);
});
*/$.fn.isVisible = function(offset) {
	// Am I visible?
	// Height and Width are not explicitly necessary in visibility detection, the bottom, right, top and left are the
	// essential checks. If an image is 0x0, it is technically not visible, so it should not be marked as such.
	// That is why either width or height have to be > 0.
	var rect = this[0].getBoundingClientRect();
	return (
		(rect.height > 0 || rect.width > 0) &&
		rect.bottom >= 0 &&
		rect.right >= 0 &&
		rect.top <= (window.innerHeight - offset || document.documentElement.clientHeight - offset) &&
		rect.left <= (window.innerWidth - offset || document.documentElement.clientWidth - offset)
	);
};

$(".multi-event-timeline  .timeline-items .timeline-item:nth-of-type(odd)").addClass("timeRight");
$.fn.timelify = function(options){

	var settings = $.extend({
		animLeft: "fadeIn",
		animRight: "fadeIn",
		animCenter: "bounceInUp",
		animSpeed: 300,
		offset: 150
	}, options);

	var elem = this;

	var timeline_items = $(this).find('.timeline-items li');

	window.addEventListener('scroll', function(){
		var scrollPos = $(window).scrollTop();
		if($('.timeline-items li.is-hidden').length > 0){
			if(scrollPos > $(elem).offset().top - 600){
				$(timeline_items).each(function () {

					if ($(this).isVisible(settings.offset)) {
						$(this).removeClass('is-hidden').addClass('animated').css({"animation-duration": settings.animSpeed + "ms"});
						if (!$(this).hasClass('timeRight')) {
							if ($(this).hasClass('centered')) {
								$(this).addClass(settings.animCenter)
							} else {
								$(this).addClass(settings.animLeft)
							}
						} else {

							$(this).addClass(settings.animRight)

						}
					}
				});
			}
		}


	});

	return this;
};