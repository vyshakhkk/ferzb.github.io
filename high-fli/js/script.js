$(document).ready(function() {
	var menuList = $('.menu-list').find('> li'),
		links = menuList.find('> a'),
		btn = $('.global-btn');

	var toggleIcon = $('#show');
	var closeToggle = $('.close');
	var nav = $('#nav');

	toggleIcon.on('click', function(event) {
		nav.addClass('active')
	});
	closeToggle.on('click', function(event) {
		nav.removeClass('active')
	});
	links.on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    	nav.removeClass('active');
    });
    btn.on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});