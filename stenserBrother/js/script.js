var dh = $(document).height();
$('.page-head').css('height', dh);

$('.toggle').click(function(){
	$('.head').slideToggle().css({
		position: 'absolute',
		zIndex: '2',
		width: '100%',
    	top: '65px'
	});
	// $('.head').fadeOut();
	$('em').toggleClass('close');
})


