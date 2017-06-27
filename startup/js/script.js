/*header nav*/ 
$('.nav-toggle').click(function(){
	$('.navbar').slideToggle().css({
		top: '10px',
		position: 'relative',
		zIndex: '1000',
		width: '100%',
		overflov: 'auto'
		
	});
})

/*btn-up*/

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


/*carousel*/

var handleCarousel = function() {
    var $item = $('.carousel .item'); 
    var $wHeight = $(window).height();
    $item.eq(0).addClass('active');
    $item.height($wHeight); 
    $item.addClass('full-screen');

    $('.carousel img').each(function() {
        var $src = $(this).attr('src');
        var $color = $(this).attr('data-color');
        $(this).parent().css({
            'background-image' : 'url(' + $src + ')',
            'background-color' : $color
        });
        $(this).remove();
    });

    $(window).on('resize', function (){
        $wHeight = $(window).height();
        $item.height($wHeight);
    });
}
var controlCarousel = function(){
	$('.pick-slide').on('click', function() {
		$('.pick-slide').removeClass('active');
		$(this).addClass('active');
		$('.item').toggleClass('active');
		$('.item').toggleClass('none-active');
	});
}


/*start function*/

handleCarousel();
controlCarousel();
