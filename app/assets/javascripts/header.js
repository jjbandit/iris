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

	// from https://css-tricks.com/snippets/jquery/smooth-scrolling/
	// for smooth scrolling of anchor links within the same page
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 500);
				return false;
			}
		}
	});
});
