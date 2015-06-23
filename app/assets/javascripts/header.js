$( document ).on( 'page:update', function (evt) {
	var s = skrollr.init();

	var viewportHeight = $(window).height();
	var navHeight = $('#nav-menu').height();

	$('.head-image').height(viewportHeight - navHeight);
});
