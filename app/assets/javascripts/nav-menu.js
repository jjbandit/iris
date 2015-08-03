$( document ).on( 'page:update', function (evt) {

	var viewportHeight = $(window).height();
	var navHeight = $('#nav-menu').height();
	var headHeight = viewportHeight - navHeight;

	var offsetNavMenu = $('#nav-menu.offset');


	$( window ).load( function () {
		// Check if we're dealing with an offset nav menu
		offsetNavMenu = $('#nav-menu.offset');
		if (offsetNavMenu.length !== 0) {
			setNavPosition(offsetNavMenu);
		}
	});

	// Stick the nav to the top of the viewport when we scroll to it
	$(window).on('scroll', function (evt) {
		setNavPosition(offsetNavMenu);
	});

	function setNavPosition (navMenu) {
		var scroll = $(window).scrollTop();

		if (scroll >= headHeight) {
			navMenu.css('position', 'fixed');
			navMenu.css('margin', '0');
		}

		else if (scroll <= headHeight) {
			navMenu.css('position', 'static');
			navMenu.css('margin-top', -navHeight);
		}
	}

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
