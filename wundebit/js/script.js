$(document).ready(function() {
	var btn_box = $('.global-btn-box'),
		btn_item = btn_box.find('button');
	
	btn_box.each(function(){
		var this_btn_box = $(this),
			this_btn_item = this_btn_box.find(btn_item);
		this_btn_item.click(function(){
			this_btn_item.removeClass('active')
			$(this).addClass('active');

		})
	});

	var filter = $('.pairs-box'),
		filter_list = filter.find('.pairs-box_list'),
		filter_span = filter.find('span'),
		filter_item = filter_list.find('li');

	filter.each(function(){
		var this_filter = $(this),
			this_filter_list = this_filter.find(filter_list),
			this_filter_item = this_filter_list.find(filter_item),
			this_filter_span = this_filter.find(filter_span);
		this_filter.click(function(){
			this_filter_list.slideToggle();
		})

		this_filter_item.click(function(){
			var text = $(this).text();
			this_filter_span.text(text);
		})
	})
});