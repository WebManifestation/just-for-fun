jQuery(function($) {

//Function to set element height to window height.
$.fn.setHightFull = function() {

	return this.each(function() {

		var windowCurrentHeight = $(window).height();
		
		$(this).css(
			{
				height: windowCurrentHeight + 'px'
			}
		);

	});
};

//Fuction to set decending z-index.
$.fn.setIndex = function() {

	var nextIndex = 10 + ( 10 * this.length );

	return this.each(function() {

		nextIndex -= 10;

		$(this).css(
			{
				'z-index': nextIndex
			}
		);
	});

};


$(document).ready(function() {

	$('.block').setHightFull().setIndex();

	$('#main-container').setHightFull();

	$(window).resize(function() {

		$('.block').setHightFull();

		$('main-container').setHightFull();

	});

});


});