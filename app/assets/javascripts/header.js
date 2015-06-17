$( document ).ready( function (evt) {
	$('.navbar-nav li a').on('click', function (evt) {
		evt.preventDefault();
		$('#catalog').toggle();
	});

	$('.owl2').owlCarousel({
		items: 3,
		nav: true,
		navContainer: '.theNav',
		margin: 10,
		autoplay: true,
		autoplayTimeout: 8000,
		loop: true,
	});
});
