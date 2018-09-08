$(document).ready(function(){
	var altura = $('.navbar').offset().top;

	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.navbar').addClass('menu_fixed');
		} else {
			$('.navbar').removeClass('menu_fixed');
		}
	});
});