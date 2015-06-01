$( document ).ready( function () {
	// Ajax request more news stories, don't scroll to top of page on reload
	$( 'a.page-link' ).on( 'click' , function (evt) {
		var cPath = window.location.pathname;
			evt.preventDefault();
			Turbolinks.visit(evt.target.href, { scroll: false});
	});

	// Ajax request a news article
	$( 'a.read-more' ).on( 'click' , function (evt) {
		var cPath = window.location.pathname;
		// If we're on root top-out the page when we nav to a news article
		if (cPath === '/') {
			Turbolinks.visit(evt.target.href);
		// Otherwise don't scroll to top
		} else {
			evt.preventDefault();
			Turbolinks.visit(evt.target.href, { scroll: false});
		}
	});
});

