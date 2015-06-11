(function () {
	Iris = {};

	$( document ).ready( function (evt) {
		// Ajax request more news stories, don't scroll to top of page on reload

		var indexHeight;

		$( 'a.page-link' ).on( 'click' , function (evt) {
			evt.preventDefault();
			setIndexHeight();

			Iris.direction = $(this).attr('rel');
			Iris.direction === 'previous' ? Iris.direction = 'up' : Iris.direction = 'down';
			$( '#news-index-content' ).hide( 'slide', {direction: Iris.direction, }, 250 );

			Turbolinks.visit(evt.target.href, { scroll: false});

			// Set this here because turbolinks page:load event
			// gets called an inconsistent number of times
			Iris.direction === 'down' ? Iris.direction = 'up' : Iris.direction = 'down';
		});


		$(document).on('page:load', function (evt) {
			evt.preventDefault();
			setIndexHeight();

			$( '#news-index-content' ).hide();
			$( '#news-index-content' ).show('drop', {direction: Iris.direction}, 250, function () {});
			clearIndexHeight();
		})

		var setIndexHeight = function () {
			indexHeight = $('#news-index-wrapper').height();
			$('#news-index-wrapper').animate( {height: indexHeight}, 200);
			// $('#news-index-wrapper').animate( {'border-width': '3px', 'border-style': 'solid', 'border-width': '1px solid'}, 200);
		}

		var clearIndexHeight = function () {
			$('#news-index-wrapper').css('height', null)
		}
	});
})();
