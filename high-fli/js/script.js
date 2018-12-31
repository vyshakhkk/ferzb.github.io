$(document).ready(function() {
	var remodal = $('.remodal'),
		remodalOverlay = $('.remodal-overlay'),
		remodalWrap = $('.remodal-wrapper'),
		link = $('.remodal-link'),
		menuList = $('.menu-list').find('> li'),
		links = menuList.find('> a'),
		btn = $('.global-btn');
		
	link.click(function() {
		remodal.removeClass('remodal-is-opened');
		remodal.addClass('remodal-is-closed');
		remodalOverlay.removeClass('remodal-is-opened').removeAttr('style');
		remodalOverlay.addClass('remodal-is-closed').css('display', 'none');;
		remodalWrap.removeClass('remodal-is-opened').removeAttr('style');
		remodalWrap.addClass('remodal-is-closed').css('display', 'none');;
	});

	links.on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    btn.on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});