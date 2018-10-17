$('.nav-toggle-block').click(function() {
	$(this).toggleClass('open');
	$('.nav-toggle-line').toggleClass('active-line');
	$('nav').toggleClass('nav-open');
	$('header').toggleClass('header-menu-open');
});