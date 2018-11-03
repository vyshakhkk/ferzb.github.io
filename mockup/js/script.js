function date() {
	var valStart = $('#dateStart').val();
	var valFinal = $('#dateFinal').val();
	$('.p-date-time').text(''+valStart+' - ' +valFinal);
}