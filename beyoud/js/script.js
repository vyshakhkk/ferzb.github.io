$('.nav-toggle-block').click(function() {
	$(this).toggleClass('open');
	$('.nav-toggle-line').toggleClass('active-line');
	$('nav').toggleClass('nav-open');
	$('header').toggleClass('header-menu-open');
});

$(function() {
	$(window).scroll(function(){
		if  ($(window).scrollTop() > 100)
			$('header').addClass('header-fixed');

		else
			$('header').removeClass('header-fixed');

	});
});
var time = 2, show = 1 ;
	$(window).scroll(function() {
		$('#counter').each(function(){
			var
				cPos = $(this).offset().top,
				topWindow = $(window).scrollTop();
			if(cPos < topWindow + 500){
				if(show < 2){
					$('.circul').addClass('viz');
					$('p').each(function(){
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

$('.owl-carousel').owlCarousel({
    items:1,
    lazyLoad:true,
    loop:true,
    nav:true,
    margin:10
});

$('.user-slider').owlCarousel({
	items:2,
    loop:false,
    margin:10,
    nav:false,
})