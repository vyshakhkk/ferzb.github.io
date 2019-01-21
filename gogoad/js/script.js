$(document).ready(function() {
	var categoryTitleList = $('.title-list'),
		categoryBlock = $('.category-block'),
		toggleCategoryBlock = $('.toggle-category-block');

	categoryBlock.each(function() {
		var this_categoryBlock = $(this);
		var this_categoryCheckBox = this_categoryBlock.find('label');
		this_categoryCheckBox.click(function() {
			$(this).toggleClass('active');
		});
	});
	categoryTitleList.each(function() {
		var this_categoryTitleList = $(this);

		this_categoryTitleList.click(function() {
			$(this).toggleClass('active');
			var this_titleListUl = this_categoryTitleList.find('ul')
			this_titleListUl.slideToggle();
		});
	});

	toggleCategoryBlock.each(function() {
		var this_toggleCategoryBlock = $(this);
		var this_categoryTitle = this_toggleCategoryBlock.find('.category-title');
		var this_categoryBlock = this_toggleCategoryBlock.find('div');
		
		this_categoryTitle.click(function() {
			$(this).toggleClass('active');
			this_categoryBlock.slideToggle();
		});
	});

	
	$(function(){
		var input = $('.input-global')
		input.each(function() {
			var this_input = $(this);
			this_input.click(function() {
				this_input.addClass('input-focus')
			});
		});
	});
});