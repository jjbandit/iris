$( document ).on( 'page:update', function (evt) {

	$('#catalog').hide();

	$('.navbar-nav li.product-link a').on('click', function (evt) {
		evt.preventDefault();
		$('#catalog').toggle('fade');
	});

	$('.owl2').owlCarousel({
		items: 2,
		nav: true,
		navContainer: '.catalogNav',
		dots: false,
		margin: 10,
		// autoplay: true,
		// autoplayTimeout: 8000,
		loop: true
	});
});
