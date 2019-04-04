$(document).ready(function() {
	var choose_veidu = $('.choose-veidu'),
		choose_veidu_item = choose_veidu.find('.box-item'),
		choose_periodu = $('.choose-periodu'),
		choose_periodu_item = choose_periodu.find('.box-item');

	choose_veidu_item.click(function() {
		choose_veidu_item.removeClass('active');
		$(this).addClass('active');
		if ($('.box-item.business-item').hasClass('active')){
			choose_veidu_item.addClass('business'),
			choose_periodu_item.addClass('business'),
			$('.global-btn').addClass('business')	
		} else(
			choose_veidu_item.removeClass('business'),
			choose_periodu_item.removeClass('business'),
			$('.global-btn').removeClass('business')
		)
	});

	choose_periodu_item.click(function() {
		choose_periodu_item.removeClass('active');
		$(this).addClass('active');
	});


});