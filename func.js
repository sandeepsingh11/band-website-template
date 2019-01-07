$(document).ready(function() {
	
	// sticky nav
	var navbar = $('#navbar');
	$('#hero').css('margin-top', $(navbar).css('height'));
	$(window).scroll(function() {



		// var scrollPosition = $(document).scrollTop();

		// if (scrollPosition >= parseInt(navHeight)) {
		// 	$('#nav').css('position', 'fixed');
		// }
		// else {
		// 	$('#nav').css('position', 'absolute');
		// }
	});

	// set tour hero size
	var tourContentHeight = $('#tourContent').css('height');
	var tourContentPadding = $('#tourContent').css('padding-top');
	$('#tourHero').css('height', (parseInt(tourContentHeight) + parseInt(tourContentPadding)) );

	// hero carousel
	$('#heroCarousel').slick({
		dots: false,
		infinite: true,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 500,
		cssEase: 'linear',
		appendArrows: $('#heroArrows')
	});

	// releases carousel
	$('.multiple1').slick({
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 3,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 500,
		cssEase: 'linear',
		appendArrows: $('.arrows1')
	});

	// review carousel
	$('#reviews').slick({
		dots: true,
		arrows: false,
		infinite: true,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 500,
		cssEase: 'linear',
		appendDots: $('.reviewDots')
	});

	// blog carousel
	$('.multiple2').slick({
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 3,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 500,
		cssEase: 'linear',
		appendArrows: $('.arrows2')
	});
});
