$(document).ready(function() {

	$('.block').click(function() {

		var $nextBlock = $(this).next();

		if( $(this).hasClass('hi') ) {

			$(this).addClass('book');

		} else if( $(this).hasClass('welcome') ) {

			$(this).addClass('hing');

		} else if ( $nextBlock.length > 0 ) {

			$('html, body').animate({
		        scrollTop: $nextBlock.offset().top
		    }, 500);

		} else {

			$('html, body').animate({
		        scrollTop: $('#main-container').offset().top
		    }, 500);

		    $('.hi').removeClass('book');
		    $('.welcome').removeClass('hing');



		};

	});

});