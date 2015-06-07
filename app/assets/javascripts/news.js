$( document ).ready( function () {
	// Ajax request more news stories, don't scroll to top of page on reload
	$( 'a.page-link' ).on( 'click' , function (evt) {
		evt.preventDefault();
		Turbolinks.visit(evt.target.href, { scroll: false});
	});

});

