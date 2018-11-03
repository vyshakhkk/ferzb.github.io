function date() {
	var valStart = $('#dateStart').val();
	var valFinal = $('#dateFinal').val();
	$('.p-date-time').text(''+valStart+' - ' +valFinal);

}

$('.tab-chart').click(function() {
	var id =$(this).attr('name')
	$('.tab-chart').removeClass('active-tab')
	$(this).addClass('active-tab')
	$('.tab-chart-block').removeAttr('style')
	$('div[id=' +id+ ']').fadeIn().css({
		display: 'block'
	});});