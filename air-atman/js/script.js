$(document).ready(function() {
	var toggleBlock = $('.nav-toggle-block'),
		toggleLine = $('.nav-toggle-line'),
		overlay = $('.overlay'),
		nav = $('#nav');

	toggleBlock.on('click', function(event) {
		$(this).toggleClass('open');
		toggleLine.toggleClass('active-line');
		nav.toggleClass('active');
		overlay.toggleClass('active');
		if (nav.hasClass('active')) {
			$('body', 'html').css('overflow', 'hidden');
		} else{
			$('body', 'html').removeAttr('style');
		}
	});

	$(window).resize(function() {
		if ($(window).width() > 960) {
			nav.removeClass('active');
			toggleLine.removeClass('active-line');
			toggleBlock.removeClass('open');
		}
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