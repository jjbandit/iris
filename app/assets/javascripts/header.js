$( document ).ready( function (evt) {
	$('.navbar-nav li.product-link a').on('click', function (evt) {
		evt.preventDefault();
		$('#catalog').toggle();
	});

	$('.owl2').owlCarousel({
		items: 4,
		nav: true,
		navContainer: '.catalogNav',
		dots: false,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 8000,
		loop: true,
	});
});
