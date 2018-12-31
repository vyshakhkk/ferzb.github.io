$(document).ready(function() {
	var remodal = $('.remodal'),
		remodalOverlay = $('.remodal-overlay'),
		remodalWrap = $('.remodal-wrapper'),
		openRamodal = $('.toggle'),
		link = $('.remodal-link'),
		menuList = $('.menu-list').find('> li'),
		links = menuList.find('> a'),
		btn = $('.global-btn');

	openRamodal.click(function() {
		
		remodal.removeClass('remodal-is-closed');
		remodal.addClass('remodal-is-opened');
		
		remodalOverlay.removeClass('remodal-is-closed').removeAttr('style');
		remodalOverlay.addClass('remodal-is-opened').css('display', 'block');
		
		remodalWrap.removeClass('remodal-is-closed').removeAttr('style');
		remodalWrap.addClass('remodal-is-opened').css('display', 'block');
	});

	function closeRemodal() {
		remodal.addClass('remodal-is-closed');
		remodal.removeClass('remodal-is-opened');
		
		remodalOverlay.addClass('remodal-is-closed').css('display', 'none');
		remodalOverlay.removeClass('remodal-is-opened').removeAttr('style');
		
		remodalWrap.addClass('remodal-is-closed').css('display', 'none');
		remodalWrap.removeClass('remodal-is-opened').removeAttr('style');
	}
	remodalWrap.click(closeRemodal);

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