$(document).ready(function() {
	// hero carousel
	$('#heroCarousel').slick({
		dots: false,
		infinite: true,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 500,
		cssEase: 'linear'
	});

	$('.multiple').slick({
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 3,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 500,
		cssEase: 'linear',
		appendArrows: $('.arrows')
	});

	$('#reviews').slick({
		dots: true,
		arrows: false,
		infinite: true,
		variableWidth: true,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 500,
		cssEase: 'linear'
	});
});
