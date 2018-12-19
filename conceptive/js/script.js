$(document).ready(function() {
	$('.nav-toggle-block').click(function() {
		$(this).toggleClass('open');
		$('.nav-toggle-line').toggleClass('active-line');
		$('.list-menu').toggleClass('list-menu-active');
	});

	$(".arrow-down").on("click", function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),
            top = $(id).offset().top;
            top = top/1.3
        $('body,html').animate({scrollTop: top}, 1000);
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
	$(function(){
		var input = $('.input-global')
		input.each(function() {
			var this_input = $(this);
			this_input.click(function() {
				this_input.addClass('input-focus')
			});
		});
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