$(function() {
	$('.open-map').on('click',function(){
		$('.map').toggleClass('open');
	});
	$('#mission').on('click',function(){
		$('#mission').toggleClass('active-tab');
		$('#membership, #history, #team, #contact').removeClass('active-tab');
	});
	$('#membership').on('click',function(){
		$('#membership').toggleClass('active-tab');
		$('#mission, #history, #team, #contact').removeClass('active-tab');
	});
	$('#history').on('click',function(){
		$('#history').toggleClass('active-tab');
		$('#membership, #mission, #team, #contact').removeClass('active-tab');
	});
	$('#team').on('click',function(){
		$('#team').toggleClass('active-tab');
		$('#membership, #mission, #history, #contact').removeClass('active-tab');
	});
	$('#contact').on('click',function(){
		$('#contact').toggleClass('active-tab');
		$('#membership, #mission, #team, #history').removeClass('active-tab');
	});
	$('.search-button').on('click',function(){
		$('.search-button').toggleClass('search-toggle');
		$('#search').focus();
	});

});
$(document).ready(function(){
	$('.overlay').click(function() {
		$(this).remove();
	});
});
var images = ['slide-img-1.jpg', 'slide-img-2.jpg', 'slide-img-3.jpg', 'slide-img-4.jpg', 'slide-img-5.jpg'];
$('.bg-header').css({'background-image': 'url(img/' + images[Math.floor(Math.random() * images.length)] + ')'});
