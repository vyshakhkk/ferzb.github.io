$('.bug-tab').click(function() {
	var id =$(this).attr('name')
	$('.bug-tab').removeClass('active-bug')
	$(this).addClass('active-bug')
	$('.bugs-items').removeAttr('style')
	$('div[id=' +id+ ']').fadeIn().css({
		display: 'flex'
	});});
var oldWidth = window.innerWidth;
window.onresize = function () {
	var newWidth = window.innerWidth;
	if (newWidth != oldWidth) {
		window.location.reload();
		oldWidth = newWidth;
	}
};
if($(window).width() < 640) {
	$('.bugs-items').addClass('owl-carousel')
} else{
	$('.bugs-items').removeClass('owl-carousel')
}
$('.owl-carousel').owlCarousel({
    items:1,
    lazyLoad:true,
    loop:true
});

function range(){
	var val = $('#form-range').val();
	$('#form-range').css({
		'background': '-webkit-linear-gradient(left, #13d399 0%, #13d399 '+val/3+'%, #f3f5f9 '+val/3+'%, #f3f5f9 '+val/3+'%)'
	});
	$('.number').text(+val+'');
	$('.number-price').text(+val*6+'');
	$('.value').css('left', +val/3.22222+'%');
}
function rangeHeader(){
	var val = $('#form-range-header').val();
	$('#form-range-header').css({
		'background': '-webkit-linear-gradient(left, #13d399 0%, #13d399 '+val/3+'%, #f3f5f9 '+val/3+'%, #f3f5f9 '+val/3+'%)'
	});
	$('.number-header').text(+val+'');
	$('.number-price-header').text(+val*6+'');
	$('.value-header').css('left', +val/3.22222+'%');
}
document.getElementById('dateToday').valueAsDate = new Date();
document.getElementById('timeToday').value = new Date().toJSON().slice(11,16)
document.getElementById('dateTodayForm').valueAsDate = new Date();
document.getElementById('timeTodayForm').value = new Date().toJSON().slice(11,16)