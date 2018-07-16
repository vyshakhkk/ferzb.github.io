$('#nav-toggle').click(function(){
	$('.toggle-navbar').toggleClass('open-nav')
	$('.nav-toggle').toggleClass('open-toggle')
})
$(".nav-item").on("click","a", function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });