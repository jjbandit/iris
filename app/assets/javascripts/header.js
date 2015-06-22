$( document ).on( 'page:update', function (evt) {

	$('#catalog').hide();

	$('.navbar-nav li.product-link a').on('click', function (evt) {
		evt.preventDefault();
		$('#catalog').toggle('fade');
	});

	$('.owl2').owlCarousel({
		items: 1,
		// nav: true,
		// navContainer: '.catalog-nav',
		dots: false,
		margin: 10,
		loop: true
	});
});
