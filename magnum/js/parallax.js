$(window).scroll(function() {
	var st = $(this).scrollTop();

	$('.some-text').css({
		'transform' : 'translate(0%, ' + -st/10 + '%)'
	})

});