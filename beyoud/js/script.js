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
$('.portfolio-sliders').owlCarousel({
    items:1,
    lazyLoad:true,
    loop:true,
    nav:true,
    margin:10
});

$('.testimonials').owlCarousel({
	loop:true,
	margin:30,
	responsive:{
		0:{
			items:1,
			dots:true,
			nav:false
		},
		960:{
			nav:true,
			dots:false,
			items:2
		},
	}
})
function validate() {
	var userName = $('#userName');
	var userEmail = $('#userEmail');
	var userPhone = $('#userPhone');

	if(!userName.value) {
		userName.css('border', '1px solid red');
		return false;
	}

	if(!userEmail.value) {
		userEmail.css('border', '1px solid red');
		return false;
	}
	if(!userPhone.value) {
		userPhone.css('border', '1px solid red');
		return false;
	}

	return true;

}

function validateRemodal() {
	var userNameRemodal = $('#userNameRemodal');
	var userEmailRemodal = $('#userEmailRemodal');
	var userPhoneRemodal = $('#userPhoneRemodal');

	if(!userName.value) {
		userNameRemodal.css('border', '1px solid red');
		return false;
	}

	if(!userEmail.value) {
		userEmailRemodal.css('border', '1px solid red');
		return false;
	}
	if(!userPhone.value) {
		userPhoneRemodal.css('border', '1px solid red');
		return false;
	}

	return true;

}

