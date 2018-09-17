$(document).ready(function() {
	setTimeout(function() {
		var preloader = $('#page-preloader');
		$('body').css('overflow', 'inherit');
		if ( !preloader.hasClass('done')) {
			preloader.addClass('done')
		}
	}, 3500)
	$(function() {
		$(window).scroll(function(){
			var aboutTop = $('.about').offset().top;
			if  ($(window).scrollTop() > aboutTop)
				$('.video').animate({'opacity':'1'},700);
		});
	});
	$(function() {
		$(window).scroll(function(){
			var videoTop = $('.video').offset().top;
			if  ($(window).scrollTop() > videoTop)
				$('.comments').animate({'opacity':'1'},700);
		});
	});
	$(function() {
		$(window).scroll(function(){
			var videoTop = $('.video').offset().top;
			if  ($(window).scrollTop() > videoTop)
				$('.soc-items').animate({'opacity':'1'},700);
		});
	});
});

