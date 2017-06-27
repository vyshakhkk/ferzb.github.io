/*header nav*/ 
$('.nav-toggle').click(function(){
	$('.navbar').slideToggle().css({
		top: '10px',
		position: 'relative',
		zIndex: '1000000',
		width: '100%'
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


/*about slider*/

function Slider(width_li,margin_right_li,col_view_img) {
	var step=width_li+margin_right_li,
		slider_box_with=col_view_img*step-margin_right_li,
		$col_img=$('#slider-box>ul>li').length,
		col_main_left=0,
		max_col_main_left=$col_img*step;
	$('#slider-box').width(slider_box_with);
	$('#slider-box>ul>li').width(width_li).css('margin-right',margin_right_li);
	$('.slide-left').click(function() {
		if(-col_main_left==max_col_main_left-col_view_img*step){
			col_main_left=0;
		} else{
			col_main_left=col_main_left-step;
		}
		$('#slider-box>ul').css('margin-left',col_main_left+'px');
	});
	$('.slide-right').click(function() {
		if (col_main_left==0){
			col_main_left=-max_col_main_left+col_view_img*step;
		}else{
			col_main_left=col_main_left+step;
		}
		$('#slider-box>ul').css('margin-left',col_main_left+'px');
	});
}
$(Slider(200,10,3))

/*start function*/

handleCarousel();
controlCarousel();
