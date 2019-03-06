$(document).ready(function() {
	var categoryTitleList = $('.title-list'),
		categoryTitleListSpan = $('.title-list').find('span'),
		categoryBlock = $('.category-block'),
		toggleCategoryBlock = $('.toggle-category-block'),
		toggleTopSearch = $('.toggle-top-search'),
		toggleTitleBuilder = $('.title-builder');
	/*category's script active*/
	categoryBlock.each(function() {
		var this_categoryBlock = $(this);
		var this_categoryCheckBox = this_categoryBlock.find('label');
		this_categoryCheckBox.click(function() {
			$(this).toggleClass('active');
		});
	});

	categoryTitleListSpan.each(function() {
		var this_categoryTitleListSpan = $(this)
		this_categoryTitleListSpan.click(function() {
			var this_categoryTitleList = this_categoryTitleListSpan.parents('li');
			this_categoryTitleList.toggleClass('active');
			var this_titleListUl = this_categoryTitleListSpan.siblings('ul');
			this_titleListUl.slideToggle();
		});
	});

	toggleCategoryBlock.each(function() {
		var this_toggleCategoryBlock = $(this);
		var this_categoryTitle = this_toggleCategoryBlock.find('.category-title');
		var this_categoryBlock = this_categoryTitle.siblings('div');
		
		this_categoryTitle.click(function() {
			$(this).toggleClass('active');
			this_categoryBlock.slideToggle();
		});
	});

	toggleTitleBuilder.each(function() {
		var this_toggleTitleBuilder = $(this);
		var this_selectItem = this_toggleTitleBuilder.parents('.select-item');
		var this_containerItem = this_toggleTitleBuilder.siblings('.container-item');
		
		this_toggleTitleBuilder.click(function() {
			this_selectItem .toggleClass('active');
			this_containerItem.slideToggle();
		});
	});
	/*end category's script active*/

	/*builder's script active*/
	var builder__chooseCategoty = $('.main-builder-page__choose-category-selection').find('.builder__choose-categoty'),
		chooseCategoty__builder__itemBox = builder__chooseCategoty.find('.builder__item-box'),
		builder__selectTheAD = $('.main-builder-page__choose-category-selection').find('.builder__select-the-AD'),
		selectTheAD__builder__itemBox = builder__selectTheAD.find('.builder__item-box');

	chooseCategoty__builder__itemBox.click(function() {
		chooseCategoty__builder__itemBox.removeClass('active');
		$(this).addClass('active');
		
	});
	selectTheAD__builder__itemBox.click(function() {
		selectTheAD__builder__itemBox.removeClass('active');
		$(this).addClass('active');
		
	});
	/*end builder's script active*/

	$('.dropdown-link').click(function() {
		$('.dropdown-block').slideToggle();
	});

	$('.dropdown-menu').click(function() {
		var this_dropdown_link = $(this),
			this_dropdown_list = this_dropdown_link.find('ul');
		this_dropdown_list.slideToggle();
	});

	$(function() {
		$(window).scroll(function(){
			if  ($(window).scrollTop() > 180)
				toggleTopSearch.addClass('visibility');
			else
				toggleTopSearch.removeClass('visibility');
		});
	});

	$('.popular-block-carousel').owlCarousel({
		lazyLoad:true,
		nav:true,
		dots:false,
		margin: 20,
		responsive:{
			0:{
				items:3
			},
			960:{
				items:4
			}
		}
	});

	$('.item-foto-carousel').owlCarousel({
		items:1,
		lazyLoad:true,
		loop:true,
		nav:true,
		dots:false,
		margin: 10
	});

	$('.advertising-box').owlCarousel({
		items:1,
		lazyLoad:true,
		loop:true,
		nav:true,
		dots:false,
		margin: 10
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