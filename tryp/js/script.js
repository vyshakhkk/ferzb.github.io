$(document).ready(function() {
	var toggleBlock = $('.nav-toggle-block'),
		toggleLine = $('.nav-toggle-line'),
		nav = $('#nav'),
		sectionFocus = $('.personal-info-section'),
		form = $('#globalForm'),
		fieldset = $('.fieldset');

	toggleBlock.on('click', function(event) {
		$(this).toggleClass('open');
		toggleLine.toggleClass('active-line');
		nav.toggleClass('active');
	});

	$(window).resize(function() {
		if ($(window).width() > 960) {
			nav.removeClass('active');
			toggleLine.removeClass('active-line');
			toggleBlock.removeClass('open');
		}
	});
	$(window).scroll(function(){
//scroll wrap-con
		if ($(window).scrollTop() > 100){
			$('.wrap-con').css('position', 'fixed');
		}
		if ($(window).scrollTop() < 100){
			$('.wrap-con').removeAttr('style');
		}
		if ($(window).scrollTop() < 2930){
			$('.wrap-con').css('opacity', '1');
		}
		if ($(window).scrollTop() > 2930){
			$('.wrap-con').css('opacity', '0');
		}
		if ($(window).scrollTop() > 2930){
			$('.wrap-con').css('position', 'relative');
		}
//scroll wrap-con2
		if ($(window).scrollTop() > 2930){
			$('.wrap-con2').css('position', 'fixed').addClass('wrap-con-active');
		}
		if ($(window).scrollTop() < 2930){
			$('.wrap-con2').removeAttr('style').removeClass('wrap-con-active');
		}
		if ($(window).scrollTop() > 4200){
			$('.wrap-con2').css('position', 'relative');
		}
//scroll fieldset1
		if ($(window).scrollTop() > 230){
			$('.fieldset1').removeClass('active-form');
		}
		if ($(window).scrollTop() < 230){
			$('.fieldset1').addClass('active-form');
		}
		if ($(window).scrollTop() > 230){
			$('.fieldset1').addClass('top');
		}
		if ($(window).scrollTop() < 230){
			$('.fieldset1').removeClass('top');
		}
//scroll fieldset2
		if ($(window).scrollTop() > 230){
			$('.fieldset2').addClass('active-form');
		}
		if ($(window).scrollTop() < 230){
			$('.fieldset2').removeClass('active-form');
		}
		if ($(window).scrollTop() > 430){
			$('.fieldset2').removeClass('active-form');
		}
		if ($(window).scrollTop() > 450){
			$('.fieldset2').addClass('top');
		}
		if ($(window).scrollTop() < 450){
			$('.fieldset2').removeClass('top');
		}
//scroll fieldset3
		if ($(window).scrollTop() > 430){
			$('.fieldset3').addClass('active-form');
		}
		if ($(window).scrollTop() < 430){
			$('.fieldset3').removeClass('active-form');
		}
		if ($(window).scrollTop() > 600){
			$('.fieldset3').removeClass('active-form');
		}
		if ($(window).scrollTop() > 620){
			$('.fieldset3').addClass('top');
		}
		if ($(window).scrollTop() < 620){
			$('.fieldset3').removeClass('top');
		}
//scroll fieldset4
		if ($(window).scrollTop() > 600){
			$('.fieldset4').addClass('active-form');
		}
		if ($(window).scrollTop() < 600){
			$('.fieldset4').removeClass('active-form');
		}
		if ($(window).scrollTop() > 700){
			$('.fieldset4').removeClass('active-form');
		}
		if ($(window).scrollTop() > 780){
			$('.fieldset4').addClass('top');
		}
		if ($(window).scrollTop() < 780){
			$('.fieldset4').removeClass('top');
		}
//scroll fieldset5
		if ($(window).scrollTop() > 750){
			$('.fieldset5').addClass('active-form');
		}
		if ($(window).scrollTop() < 750){
			$('.fieldset5').removeClass('active-form');
		}
		if ($(window).scrollTop() > 1050){
			$('.fieldset5').removeClass('active-form');
		}
		if ($(window).scrollTop() > 1070){
			$('.fieldset5').addClass('top');
		}
		if ($(window).scrollTop() < 1070){
			$('.fieldset5').removeClass('top');
		}
//scroll fieldset6
		if ($(window).scrollTop() > 1050){
			$('.fieldset6').addClass('active-form');
		}
		if ($(window).scrollTop() < 1050){
			$('.fieldset6').removeClass('active-form');
		}
		if ($(window).scrollTop() > 1200){
			$('.fieldset6').removeClass('active-form');
		}
		if ($(window).scrollTop() > 1220){
			$('.fieldset6').addClass('top');
		}
		if ($(window).scrollTop() < 1220){
			$('.fieldset6').removeClass('top');
		}
//scroll fieldset7
		if ($(window).scrollTop() > 1200){
			$('.fieldset7').addClass('active-form');
		}
		if ($(window).scrollTop() < 1200){
			$('.fieldset7').removeClass('active-form');
		}
		if ($(window).scrollTop() > 1400){
			$('.fieldset7').removeClass('active-form');
		}
		if ($(window).scrollTop() > 1420){
			$('.fieldset7').addClass('top');
		}
		if ($(window).scrollTop() < 1420){
			$('.fieldset7').removeClass('top');
		}
//scroll fieldset8
		if ($(window).scrollTop() > 1400){
			$('.fieldset8').addClass('active-form');
		}
		if ($(window).scrollTop() < 1400){
			$('.fieldset8').removeClass('active-form');
		}
		if ($(window).scrollTop() > 1600){
			$('.fieldset8').removeClass('active-form');
		}
		if ($(window).scrollTop() > 1620){
			$('.fieldset8').addClass('top');
		}
		if ($(window).scrollTop() < 1620){
			$('.fieldset8').removeClass('top');
		}
//scroll fieldset9
		if ($(window).scrollTop() > 1600){
			$('.fieldset9').addClass('active-form');
		}
		if ($(window).scrollTop() < 1600){
			$('.fieldset9').removeClass('active-form');
		}
		if ($(window).scrollTop() > 1800){
			$('.fieldset9').removeClass('active-form');
		}
		if ($(window).scrollTop() > 1820){
			$('.fieldset9').addClass('top');
		}
		if ($(window).scrollTop() < 1820){
			$('.fieldset9').removeClass('top');
		}
//scroll fieldset10
		if ($(window).scrollTop() > 1800){
			$('.fieldset10').addClass('active-form');
		}
		if ($(window).scrollTop() < 1800){
			$('.fieldset10').removeClass('active-form');
		}
		if ($(window).scrollTop() > 2000){
			$('.fieldset10').removeClass('active-form');
		}
		if ($(window).scrollTop() > 2020){
			$('.fieldset10').addClass('top');
		}
		if ($(window).scrollTop() < 2020){
			$('.fieldset10').removeClass('top');
		}
//scroll fieldset11
		if ($(window).scrollTop() > 2000){
			$('.fieldset11').addClass('active-form');
		}
		if ($(window).scrollTop() < 2000){
			$('.fieldset11').removeClass('active-form');
		}
		if ($(window).scrollTop() > 2200){
			$('.fieldset11').removeClass('active-form');
		}
		if ($(window).scrollTop() > 2220){
			$('.fieldset11').addClass('top');
		}
		if ($(window).scrollTop() < 2220){
			$('.fieldset11').removeClass('top');
		}
//scroll fieldset12
		if ($(window).scrollTop() > 2200){
			$('.fieldset12').addClass('active-form');
		}
		if ($(window).scrollTop() < 2200){
			$('.fieldset12').removeClass('active-form');
		}
		if ($(window).scrollTop() > 2400){
			$('.fieldset12').removeClass('active-form');
		}
		if ($(window).scrollTop() > 2420){
			$('.fieldset12').addClass('top');
		}
		if ($(window).scrollTop() < 2420){
			$('.fieldset12').removeClass('top');
		}
//scroll fieldset13
		if ($(window).scrollTop() > 2400){
			$('.fieldset13').addClass('active-form');
		}
		if ($(window).scrollTop() < 2400){
			$('.fieldset13').removeClass('active-form');
		}
		if ($(window).scrollTop() > 2600){
			$('.fieldset13').removeClass('active-form');
		}
		if ($(window).scrollTop() > 2620){
			$('.fieldset13').addClass('top');
		}
		if ($(window).scrollTop() < 2620){
			$('.fieldset13').removeClass('top');
		}
//scroll fieldset14
		if ($(window).scrollTop() > 2600){
			$('.fieldset14').addClass('active-form');
		}
		if ($(window).scrollTop() < 2600){
			$('.fieldset14').removeClass('active-form');
		}
		if ($(window).scrollTop() > 2800){
			$('.fieldset14').removeClass('active-form');
		}
		if ($(window).scrollTop() > 2820){
			$('.fieldset14').addClass('top');
		}
		if ($(window).scrollTop() < 2820){
			$('.fieldset14').removeClass('top');
		}
//scroll fieldset15
		if ($(window).scrollTop() > 2850){
			$('.fieldset15').addClass('active-form');
		}
		if ($(window).scrollTop() < 2850){
			$('.fieldset15').removeClass('active-form');
		}
		if ($(window).scrollTop() > 3000){
			$('.fieldset15').removeClass('active-form');
		}
		if ($(window).scrollTop() > 3020){
			$('.fieldset15').addClass('top');
		}
		if ($(window).scrollTop() < 3020){
			$('.fieldset15').removeClass('top');
		}
//scroll fieldset16
		if ($(window).scrollTop() > 3000){
			$('.fieldset16').addClass('active-form');
		}
		if ($(window).scrollTop() < 3000){
			$('.fieldset16').removeClass('active-form');
		}
		if ($(window).scrollTop() > 3200){
			$('.fieldset16').removeClass('active-form');
		}
		if ($(window).scrollTop() > 3220){
			$('.fieldset16').addClass('top');
		}
		if ($(window).scrollTop() < 3220){
			$('.fieldset16').removeClass('top');
		}
//scroll fieldset17
		if ($(window).scrollTop() > 3200){
			$('.fieldset17').addClass('active-form');
		}
		if ($(window).scrollTop() < 3200){
			$('.fieldset17').removeClass('active-form');
		}
		if ($(window).scrollTop() > 3400){
			$('.fieldset17').removeClass('active-form');
		}
		if ($(window).scrollTop() > 3420){
			$('.fieldset17').addClass('top');
		}
		if ($(window).scrollTop() < 3420){
			$('.fieldset17').removeClass('top');
		}
//scroll fieldset18
		if ($(window).scrollTop() > 3400){
			$('.fieldset18').addClass('active-form');
		}
		if ($(window).scrollTop() < 3400){
			$('.fieldset18').removeClass('active-form');
		}
		if ($(window).scrollTop() > 3600){
			$('.fieldset18').removeClass('active-form');
		}
		if ($(window).scrollTop() > 3620){
			$('.fieldset18').addClass('top');
		}
		if ($(window).scrollTop() < 3620){
			$('.fieldset18').removeClass('top');
		}
//scroll fieldset19
		if ($(window).scrollTop() > 3400){
			$('.fieldset19').addClass('active-form');
		}
		if ($(window).scrollTop() < 3400){
			$('.fieldset19').removeClass('active-form');
		}
		if ($(window).scrollTop() > 3800){
			$('.fieldset19').removeClass('active-form');
		}
		if ($(window).scrollTop() > 3820){
			$('.fieldset19').addClass('top');
		}
		if ($(window).scrollTop() < 3820){
			$('.fieldset19').removeClass('top');
		}

	});
});

	