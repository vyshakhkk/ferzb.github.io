$(document).ready(function() {
	var choose_veidu = $('.choose-veidu'),
		choose_veidu_item = $('.choose-veidu').find('.box-item'),
		choose_periodu = $('.choose-periodu'),
		choose_periodu_item = $('.choose-periodu').find('.box-item');

	choose_veidu_item.click(function() {
		choose_veidu_item.removeClass('active');
		$(this).addClass('active');
	});

	choose_periodu_item.click(function() {
		choose_periodu_item.removeClass('active');
		$(this).addClass('active');
	});
});