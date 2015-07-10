'use strict';

$(document).on( 'page:change', function (evt) {

	var viewportHeight = $(window).height();
	var navHeight = $('#nav-menu').height();
	var secBreakHeight = $('#news-heading').height();

	var secHeight = viewportHeight - secBreakHeight;

	setSectionHeights();
	centerSectionContents();

	window.addEventListener('resize', function (evt){
		setSectionHeights();
		centerSectionContents();
	});

	function setSectionHeights () {
		$('.row-wrapper').css('min-height', secHeight );
	}

	function centerSectionContents () {
		// For each section with content whos height is less than that of the section,
		// compute the difference between the section height and the contents height,
		// then set the content down by that offset
		$('.row-wrapper').each(function () {
			const content = $('.row', this);
			const contentHeight = content.height();

			if (contentHeight < secHeight) {
				const offset = (secHeight - contentHeight) / 2;
				content.css('top', offset);
			}
		});
	}
});
