$( document ).on( 'page:update', function (evt) {
	var s = skrollr.init();

	// skrollr.menu.init(s);

	var viewportHeight = $(window).height();
	var navHeight = $('#nav-menu').height();
	var headHeight = viewportHeight - navHeight;
	$('.head-image').height(headHeight);

	$(window).on('scroll', function (evt) {
		var scroll = $(window).scrollTop();
		if (scroll >= headHeight) {
			$('#nav-menu').css('position', 'fixed');
			$('#nav-menu').css('margin', '0');
		}

		else if (scroll <= headHeight) {
			$('#nav-menu').css('position', 'static');
			$('#nav-menu').css('margin-top', -navHeight);
		}
	});
});
