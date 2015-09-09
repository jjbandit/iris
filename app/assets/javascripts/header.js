$(document).on('page:update', function ( evt ) {

	var s = skrollr.init({
		skrollrBody: 'home-index'
	});

	var viewportHeight = $(window).height();
	var navHeight = $('#nav-menu').height();
	var headHeight = viewportHeight - navHeight;
	$('.head-image').height(headHeight);

	$(window).on('resize', function () {
		$('.head-image').height(headHeight);
	});
});
