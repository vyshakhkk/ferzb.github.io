var dh = $(document).height();
console.log(dh);
$('.page-head').css('height', dh);

$('.toggle').click(function(){
	$('.head').slideToggle();
	$('em').toggleClass('close');
})


