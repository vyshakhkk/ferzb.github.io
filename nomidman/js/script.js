$('#nav-toggle').click(function(){
	$('.toggle-navbar').toggleClass('open-nav')
	$('.nav-toggle').toggleClass('open-toggle')
})
$(".js_nav-item").on("click","a", function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
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