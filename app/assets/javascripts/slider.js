$(document).ready(function()
{

	$('.slider-carousel').owlCarousel({
		items: 1,
		nav: true,
		navText: [
			"<i class='fa fa-chevron-left fa-3x'></i>",
			"<i class='fa fa-chevron-right fa-3x'></i>"
		],
		dots: true,
		dotsContainer: '.sliderDots',
		navContainer: '.sliderNav',
		margin: 10,
		autoplay: true,
		autoplayTimeout: 8000,
		loop: true,
		});

	// Position nav links
	setTimeout( function () {
		setHeight('.sliderNav .owl-prev');
		setHeight('.sliderNav .owl-next');
	}, 50);

	$(window).resize( function (evt) {
		setTimeout( function () {
			setHeight('.sliderNav .owl-prev');
			setHeight('.sliderNav .owl-next');
		}, 250);
	});

});

var setHeight = function (selector) {
	var slideHeight = $('.slider-carousel').height();
	$(selector).css('top', slideHeight/2 + 32.5);
}
