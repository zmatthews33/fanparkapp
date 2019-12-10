$(document).ready(function() {
	'use strict';

	var window_width = $(window).width(),
		window_height = window.innerHeight,
		header_height = $('.default-header').height(),
		header_height_static = $('.site-header.static').outerHeight(),
		fitscreen = window_height - header_height;

	$('.rotating').Morphext({
		animation: 'flipInX',
		separator: ',',
		speed: 3000
	});

	$('.fullscreen').css('height', window_height);
	$('.fitscreen').css('height', fitscreen);

	//-------- Active Sticky Js ----------//
	$('.sticky-header').sticky({ topSpacing: 0 });

	// -------   Active Mobile Menu-----//

	$('.mobile-btn').on('click', function(e) {
		e.preventDefault();
		$('.main-menu').slideToggle();
		$('span', this).toggleClass('lnr-menu lnr-cross');
		$('.main-menu').addClass('mobile-menu');
	});
	$('.main-menu li a').on('click', function(e) {
		e.preventDefault();
		$('.mobile-menu').slideUp();
		$('.mobile-btn span').toggleClass('lnr-menu lnr-cross');
	});

	//Add smooth scrolling to Menu links
	$('.main-menu li a, .smooth').on('click', function(event) {
		if (this.hash !== '') {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate(
				{
					scrollTop: $(hash).offset().top - -10
				},
				600,
				function() {
					window.location.hash = hash;
				}
			);
		}
	});
});
