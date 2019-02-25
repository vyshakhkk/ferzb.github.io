$(document).ready(function() {
	$(function(){
		$(window).scroll(function() {
			
		});
	})
	window.onscroll = function (e) {
		var valueTop = window.scrollY;
		console.log(valueTop);
		$('.parallax-item-1').css('transform', 'translateY(-'+valueTop*2/100+'px');
		$('.parallax-item-2').css('transform', 'translateY(-'+valueTop*5/100+'px');
		$('.parallax-item-3').css('transform', 'translateY(-'+valueTop*11/100+'px');
		$('.parallax-item-4').css('transform', 'translateY(-'+valueTop*16/100+'px');
		$('.parallax-item-5').css('transform', 'translateY(-'+valueTop*26/100+'px');
		$('.parallax-item-6').css('transform', 'translateY(-'+valueTop*36/100+'px');
		$('.parallax-item-7').css('transform', 'translateY(-'+valueTop*49/100+'px');
		$('.parallax-item-8').css('transform', 'translateY(-'+valueTop*69/100+'px');
		$('.parallax-item-9').css('transform', 'translateY(-'+valueTop+'px');

	};
	function castSmoothScroll() {
		var layer, speed;
		$.srSmoothscroll({
			step: 80,
			speed: 300,
			ease: 'linear'
		});
	}
});