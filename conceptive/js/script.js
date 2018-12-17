$(document).ready(function() {
	$('.nav-toggle-block').click(function() {
		$(this).toggleClass('open');
		$('.nav-toggle-line').toggleClass('active-line');
		$('.list-menu').toggleClass('list-menu-active');
	});

	$(".arrow-down").on("click", function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});