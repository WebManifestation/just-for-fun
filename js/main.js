$(document).ready(function() {

	$('#main-container').click(function() {

		var $activeBlock = $('.active');

		$nextBlock = $activeBlock.next();

		if ( $nextBlock.length != 0 ) {

			$activeBlock.addClass('animated rotateOutUpLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
				$activeBlock.removeClass('active');
				$nextBlock.addClass('active');
			})

		} else {

			$('.block').removeClass('animated rotateOutUpLeft').addClass('animated rotateInUpLeft').removeClass('active').first().addClass('active');

		};

	});

});