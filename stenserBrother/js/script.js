var dh = $(window).height();
$('.page-head').css('height', dh);

$('.toggle').click(function(){
	$('.head').slideToggle().css({
		position: 'absolute',
		zIndex: '2',
		width: '100%',
    	top: '65px'
	});
	// $('.head').fadeOut();
	$('.click').toggleClass('close');
})
$(".menu-side").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});
$('.arrow-down').click(function () {
	var elementClick = $('#about')
	var destination = $(elementClick).offset().top;
	jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1500);
		return false;
});


