$(document).ready(function() {
	var toggleBlock = $('.nav-toggle-block'),
		toggleLine = $('.nav-toggle-line'),
		pageNav = $('.page-nav'),
		overlay = $('.overlay')

	toggleBlock.on('click', function(event) {
		$(this).toggleClass('open');
		toggleLine.toggleClass('active-line');
		pageNav.toggleClass('active');
		overlay.toggleClass('active');
	});

	overlay.on('click', function(event) {
		$(this).removeClass('active');
		toggleLine.removeClass('active-line');
		pageNav.removeClass('active');
	});

	$(window).resize(function() {
		if ($(window).width() > 960) {
			pageNav.removeClass('active');
			toggleLine.removeClass('active-line');
			toggleBlock.removeClass('open')
			overlay.removeClass('active');
		}
	});
	$(function() {
		$(window).scroll(function(){
			if  ($(window).scrollTop() > 10)
				$('header').addClass('page-fixed-header');
			else
				$('header').removeClass('page-fixed-header');
		});
		if  ($(window).scrollTop() > 100){$('header').addClass('page-fixed-header')}			
	});

    $('body').append('<i class="btn-up">');

	$('.btn-up').click(function(){
		$('body').animate({'scrollTop': 0}, 1000);
		$('html').animate({'scrollTop': 0}, 1000)
	})

	$(window).scroll(function(){
		if ($(window).scrollTop() > 200){
			$('.btn-up').addClass('active');
		}
		else{
			$('.btn-up').removeClass('active');
		}
	});

	$(function(){
		var window_size = $(window).width();
		var panel = $('.panel');
		var window_offset_top = $(window).scrollTop();
		console.log(window_offset_top)
		panel.each(function() {
			var this_panel = $(this)
			var this_panel_offest_top = this_panel.offset().top;
			var window_offset_top = $(window).scrollTop();
			if (window_offset_top >= this_panel_offest_top-550) {
				this_panel.addClass('fade-in')
			}
			$(window).scroll(function(){
				var window_scroll_top = $(window).scrollTop();
				
				if (window_scroll_top > this_panel_offest_top-550){
					this_panel.addClass('fade-in')
				}
			})
		});
	})
});