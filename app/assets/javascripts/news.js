$( document ).ready( function () {
	// Ajax request more news stories, don't scroll to top of page on reload

	var indexHeight;

	$( 'a.page-link' ).on( 'click' , function (evt) {
		evt.preventDefault();
		$( '.news-teaser' ).fadeOut();
		Turbolinks.visit(evt.target.href, { scroll: false});
	});

	$(document).on('page:fetch', function () {
		indexHeight = $('#news-index-wrapper').height();
	});

	$(document).on('page:change', function () {
		indexHeight = $('#news-index-wrapper').height();
		$('#news-index-wrapper').css('height', indexHeight);
		$( '#news-index-content' ).hide();
		$( '#news-index-content' ).show( 'explode'  );
	})
});

