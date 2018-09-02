$(document).ready(function(){
	$('#pixel').css('background', '#000');
	$('#pixel>i').css('transform', 'translateY(0%)');
});
$('.nav-toggle-block').click(function() {
	$(this).toggleClass('open');
	$('.nav-toggle-line').toggleClass('active-line');
	$('.nav-list>li').toggleClass('active-list');
	$('.wrap-nav').toggleClass('wrap-nav-open');
	$('.nav-page').toggleClass('background-black');
	$('.logo-page>a').toggleClass('background-black');
});

$(window).scroll(function(){
	var st = $(this).scrollTop()

	$('.title-logo>h1').css('transform', 'translate(0%, -' + st + '%');
})

