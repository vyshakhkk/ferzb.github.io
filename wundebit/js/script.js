$(document).ready(function() {
	var btn_box = $('.global-btn-box'),
		btn_item = btn_box.find('button');
	
	btn_box.each(function(){
		var this_btn_box = $(this),
			this_btn_item = this_btn_box.find(btn_item);
		this_btn_item.click(function(){
			this_btn_item.removeClass('active')
			$(this).addClass('active');
			$(function(){
				if ($('.general-btn.buy').hasClass('active')){
					$('header').css('box-shadow', '0px 7px 0px 0px #02D29A')
				} else($('header').css('box-shadow', '0px 7px 0px 0px #E14DAF'))
			})

			$(function(){
				if ($('.general-price.sell').hasClass('active')){
					$('.tiggle-slide-box').slideUp();
				} else($('.tiggle-slide-box').slideDown())
			})
		})
	});

	var btn_checkbox = $('.general-checkbox'),
		btn_checkbox_item = btn_checkbox.find('button');

		btn_checkbox.each(function(){
			var this_btn_checkbox = $(this),
				this_btn_checkbox_item = this_btn_checkbox.find(btn_checkbox_item),
				this_inupt_box = this_btn_checkbox.find('.general-checkbox_inner');
			this_btn_checkbox_item.click(function(){
				$(this).toggleClass('active');
				this_inupt_box.slideToggle();
			})
		});
	

});