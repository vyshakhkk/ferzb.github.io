/*header nav*/ 
$('#nav-toggle').click(function(){
	$('.navbar').slideToggle().css({
		top: '10px',
		position: 'relative',
		zIndex: '1000',
		width: '100%',
		overflov: 'auto'
		
	});
})

var header = new Headhesive('.fixed-nav-bar');
$('.headhesive #nav-toggle').click(function(){
	$('.navbar').slideToggle().css({
		top: '10px',
		position: 'relative',
		zIndex: '1000',
		width: '100%',
		overflov: 'auto'
		
	});
})

$(".js_nav-item").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
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
/*filter*/

$('.branding').click(function() {
	$('.branding-img').fadeIn()
	$('.design-img').fadeOut()
	$('.development-img').fadeOut()
	$('.strategy-img').fadeOut()
});
$('.design').click(function() {
	$('.design-img').fadeIn()
	$('.branding-img').fadeOut()
	$('.development-img').fadeOut()
	$('.strategy-img').fadeOut()
});
$('.development').click(function() {
	$('.development-img').fadeIn()
	$('.design-img').fadeOut()
	$('.branding-img').fadeOut()
	$('.strategy-img').fadeOut()
});
$('.strategy').click(function() {
	$('.strategy-img').fadeIn()
	$('.design-img').fadeOut()
	$('.branding-img').fadeOut()
	$('.development-img').fadeOut()
});
$('.all').click(function() {
	$('.work-page').fadeIn()
});

/*counter*/
var time = 2, show = 1 ;
	$(window).scroll(function() {
		$('#counter').each(function(){
			var
				cPos = $(this).offset().top,
				topWindow = $(window).scrollTop();
			if(cPos < topWindow + 500){
				if(show < 2){
					$('.counter-numbers').addClass('viz');
					$('div').each(function(){
					var 
						i = 1,
						num = $(this).data('num'),
						step = 1000 * time / num,
						that = $(this),
						int = setInterval(function(){
							if (i <= num) {
								that.html(i);
							}
							else {
								show = show + 2
								clearInterval(int);
							}
							i++;
						},step);
					});
				}	
			}
		});
});
/*start function*/

handleCarousel();
controlCarousel();
