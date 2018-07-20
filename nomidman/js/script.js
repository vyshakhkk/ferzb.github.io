$(document).ready(function() {
	setTimeout(function() {
		var preloader = $('#page-preloader');
		if ( !preloader.hasClass('done')) {
			preloader.addClass('done')
		}
	}, 2000)
});
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
$('.faq-list-item').click(function(){
	var id  = $(this).attr('name')
	$('.faq-list-item').removeClass('active-item')
	$(this).addClass('active-item')
	$('.general-quetion').removeAttr('style')
	$('div[id=' +id+ ']').fadeIn()	
})

$('.open-faq-list').click(function() {
	$('.faq-list-item').css({
		display: 'block'
	});;
	$('.faq-list-item').click(function(){
		$('.faq-list-item').removeAttr('style')
		$(this).addClass('active-item')
	})
});
$('.question-item').click(function() {
	$(this).children('.inner').slideToggle()
});