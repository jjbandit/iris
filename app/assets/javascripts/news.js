$(document).on('page:change', function (evt) {

	var height;

	// Ajax request more news stories, don't scroll to top of page on reload
	$( 'a.page-link' ).on( 'click' , function (evt) {
		evt.preventDefault();
		Turbolinks.visit( evt.target.href, { scroll: false } );
	});

	var setHeight = function (selector, context) {
		height = $(selector, context).height();
		$(selector, context).css( 'height', height );
	}

	var clearIndexHeight = function (selector, context) {
		$(selector, context).css('height', '')
	}

});
