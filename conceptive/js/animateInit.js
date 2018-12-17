
$(document).ready(function() {
	$(function () { // wait for document ready
		// init
		var controller = new ScrollMagic.Controller();


		//Parallax animate
		$('.bcg-parallax').each(function() {
			var SlideParallaxScene = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: 0,
			duration: '100%'
			})
			.setTween(TweenMax.from('.bcg', 1, {y: '-50%', ease:Power0.easeNone}))
			.addTo(controller);
		});
		$('.bcg-parallax-1').each(function() {
			var SlideParallaxScene = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: 1,
			duration: '100%'
			})
			.setTween(TweenMax.from('.bcg-1', 1, {y: '-80%', ease:Power0.easeNone}))
			.addTo(controller);
		});
	});
});
