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
	})
});