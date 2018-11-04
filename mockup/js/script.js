$(function() {
  $('input[name="daterange"]').daterangepicker({
    opens: 'bottom',
    alwaysShowCalendars: true,
    showDropdowns: true,
    ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    }
  }, function(start, end, label) {
  	$('.p-date-time').text(start.format('DD/MM/YYYY') + ' - ' + end.format('DD/MM/YYYY'));
  });
});
$('.search-btn').click(function() {
	$(this).toggleClass('search-open');
});
var date = moment();
$('.p-date-time').text(date.format("DD/MM/YYYY")+ ' - '+date.format("DD/MM/YYYY"))
$('.tab-chart').click(function() {
	var id =$(this).attr('name')
	$('.tab-chart').removeClass('active-tab')
	$(this).addClass('active-tab')
	$('.tab-chart-block').removeAttr('style')
	$('div[id=' +id+ ']').fadeIn().css({
		display: 'block'
	});});