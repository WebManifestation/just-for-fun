$(document).ready(function() {

	$('#main-container').click(function() {

		var flowPosition = $(this).data('position');

		var $nextBlock = $(this).next();

		if( flowPosition == 'start' ) {

			$('.hi').addClass('book');

			$(this).data('position', 'one');

		} else if( flowPosition == 'one' ) {

			$('.welcome').addClass('hing');

			$(this).data('position', 'two');

		} else if ( flowPosition == 'two' ) {

			$(this).data('position', 'start');

		    $('.hi').removeClass('book');
		    $('.welcome').removeClass('hing');


		};

	});

});