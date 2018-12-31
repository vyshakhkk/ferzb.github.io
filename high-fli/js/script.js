$(document).ready(function() {
	var menuList = $('.menu-list').find('> li'),
		links = menuList.find('> a'),
		btn = $('.global-btn');

	$('.nav-toggle-block').click(function() {
		$('.nav-toggle-line').toggleClass('active-line');
		$('header').toggleClass('page-fixed-header-open');
		$('.logo').toggleClass('logo-open');
		$('nav').slideToggle();
	});

	$(window).resize(function() {
		if ($(window).width() > 780) {
			$('nav').removeAttr('style')
			$('.page-header').removeClass('page-fixed-header-open');
		}
	});

	links.on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
        $('header').toggleClass('page-fixed-header-open');
        $('.nav-toggle-line').toggleClass('active-line');
        $('nav').slideToggle();
    });
    btn.on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});