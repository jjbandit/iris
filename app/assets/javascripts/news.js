(function () {
	Iris = {};

	$( document ).ready( function (evt) {

		$('div.news-body').hide();

		var indexHeight;

		$('div.news-teaser-content').on('mouseenter', function (evt) {
			setIndexHeight(evt.currentTarget);
			var self = this;
			$('.news-title', this ).stop(true, true).hide('slide', {direction: 'up'}, 150).queue( function () {
				$('.news-body', self ).stop(true, true).show('slide', {direction: 'up'}, 150);
				$.dequeue(this);
			});
			clearIndexHeight(evt.currentTarget);
		});

		$('div.news-teaser-content').on('mouseleave', function (evt) {
			setIndexHeight(evt.currentTarget);
			var self = this;
			$('.news-body', this ).stop(true, true).hide('slide', {direction: 'up'}, 150).queue( function () {
				$('.news-title', self ).stop(true, true).show('slide', {direction: 'up'}, 150);
				$.dequeue(this);
			});
			clearIndexHeight(evt.currentTarget);
		});

		// Ajax request more news stories, don't scroll to top of page on reload

		$( 'a.page-link' ).on( 'click' , function (evt) {
			evt.preventDefault();
			setIndexHeight('#news-index-wrapper');

			// Make the animation scroll toward the link the user clicks
			Iris.direction = $(this).attr('rel');
			Iris.direction === 'previous' ? Iris.direction = 'up' : Iris.direction = 'down';
			$( '#news-index-content' ).hide( 'slide', {direction: Iris.direction, }, 250 );

			Turbolinks.visit( evt.target.href, { scroll: false } );

			// Set this here because turbolinks page:load event
			// gets called an inconsistent number of times
			Iris.direction === 'down' ? Iris.direction = 'up' : Iris.direction = 'down';
		});


		$(document).on('page:load', function (evt) {
			evt.preventDefault();
			setIndexHeight('#news-index-wrapper');

			$( '#news-index-content' ).hide();
			$( '#news-index-content' ).show('drop', {direction: Iris.direction}, 250, function () {});
			clearIndexHeight('#news-index-wrapper');
		})

		var setIndexHeight = function (selector, context) {
			indexHeight = $(selector, context).height();
			$(selector, context).css( 'height', indexHeight );
			// $(selector).animate( {height: indexheight}, 200);
			// $('#news-index-wrapper').animate( {'border-width': '3px', 'border-style': 'solid', 'border-width': '1px solid'}, 200);
		}

		var clearIndexHeight = function (selector, context) {
			$(selector, context).css('height', '')
		}

	});
})();
