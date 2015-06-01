$( document ).ready( function () {
	$( 'a.read-more' ).on( 'click' , function (evt) {
		evt.preventDefault();
		Turbolinks.visit(evt.target.href, { scroll: false});
	});
});

