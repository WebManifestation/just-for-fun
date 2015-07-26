jQuery(function($) {

//Function to set element height to window height.
$.fn.setHightFull = function() {

	return this.each(function() {

		var windowCurrentHeight = $(window).height();
		
		$(this).css('height', windowCurrentHeight + 'px');

	});
};


$(document).ready(function() {

	$('.block').setHightFull();

	$(window).resize(function() {

		$('.block').setHightFull();

	});

});


});