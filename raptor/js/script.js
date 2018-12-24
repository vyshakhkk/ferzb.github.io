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

});