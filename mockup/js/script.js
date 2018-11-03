$('.nav-toggle-block').click(function() {
	$(this).toggleClass('open');
	$('.nav-toggle-line').toggleClass('active-line');
	$('.nav-list>li').toggleClass('active-list');
	$('.wrap-nav').toggleClass('wrap-nav-open');
	$('.nav-page').toggleClass('background-black');
});