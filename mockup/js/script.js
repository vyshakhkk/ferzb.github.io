$(function() {
  $('input[name="daterange"]').daterangepicker({
    opens: 'bottom'
  }, function(start, end, label) {
  	$('.p-date-time').text(start.format('DD/MM/YYYY') + ' - ' + end.format('DD/MM/YYYY'));
  });
});

$('.search-btn').click(function() {
	$(this).toggleClass('search-open');
});

$('.tab-chart').click(function() {
	var id =$(this).attr('name')
	$('.tab-chart').removeClass('active-tab')
	$(this).addClass('active-tab')
	$('.tab-chart-block').removeAttr('style')
	$('div[id=' +id+ ']').fadeIn().css({
		display: 'block'
	});});