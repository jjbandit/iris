$(document).ready(function()
{

	$('.owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		navText: [
			"<i class='fa fa-chevron-left fa-3x'></i>",
			"<i class='fa fa-chevron-right fa-3x'></i>"
		],
		dots: true,
		dotsContainer: '.myDots',
		margin: 10,
		autoplay: true,
		autoplayTimeout: 8000,
		loop: true,
		});

	// Position nav links
	setTimeout( function () {
		setHeight('.owl-prev');
		setHeight('.owl-next');
	}, 50);

	$(window).resize( function (evt) {
		setTimeout( function () {
			setHeight('.owl-prev');
			setHeight('.owl-next');
		}, 250);
	});

});

var setHeight = function (selector) {
	var slideHeight = $('.owl-stage-outer').height();
	$(selector).css('top', slideHeight/2 - 32.5);
}
