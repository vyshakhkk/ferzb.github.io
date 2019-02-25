$(document).ready(function() {
	$(function(){
		$(window).scroll(function() {
			
		});
	})
	window.onscroll = function (e) {
		var valueTop = window.scrollY/20;
		console.log(valueTop);
		$('.parallax-item-1').css('transform', 'translateY(-'+valueTop+'px');
		$('.parallax-item-2').css('transform', 'translateY(-'+valueTop*2+'px');
		$('.parallax-item-3').css('transform', 'translateY(-'+valueTop*3+'px');
		$('.parallax-item-4').css('transform', 'translateY(-'+valueTop*4+'px');
		$('.parallax-item-5').css('transform', 'translateY(-'+valueTop*5+'px');
		$('.parallax-item-6').css('transform', 'translateY(-'+valueTop*6+'px');
		$('.parallax-item-7').css('transform', 'translateY(-'+valueTop*7+'px');
		$('.parallax-item-8').css('transform', 'translateY(-'+valueTop*8+'px');
		$('.parallax-item-9').css('transform', 'translateY(-'+valueTop*9+'px');
		$('.section').css('transform', 'translateY(-'+valueTop*12+'px');

	};
});