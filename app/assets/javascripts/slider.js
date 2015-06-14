$(document).ready(function()
{
	$('.owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		navText: [
			"<i class='icon-chevron-left icon-white'><</i>",
			"<i class='icon-chevron-right icon-white'>></i>"
		],
		dots: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 5000,
		loop: true,
		});

});
