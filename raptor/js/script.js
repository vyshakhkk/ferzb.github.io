$(document).ready(function() {
	$('.nav-toggle-block').click(function() {
		$('.nav-toggle-line').toggleClass('active-line');
		$('.page-header').toggleClass('page-fixed-header-open');
		$('nav').slideToggle();
	});
	$(window).resize(function() {
		if ($(window).width() > 960) {
			$('nav').removeAttr('style')
			$('.page-header').removeClass('page-fixed-header-open');
		}
	});
	$(".nav-link").on("click", function (event) {
        event.preventDefault();
        $('.nav-toggle-line').removeClass('active-line');
        $('nav').removeAttr('style');
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
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


});