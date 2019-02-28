$(document).ready(function() {
	var toggleBtn = $('.toggle-btn'),
		globalNav = $('.global-nav');

	toggleBtn.on('click', function(event) {
		globalNav.addClass('open');
		$('.overlay').addClass('active')
	});
	$('.overlay, .close-nav').on('click', function(event) {
		globalNav.removeClass('open');
		$('.overlay').removeClass('active')
	});
	$(window).resize(function() {
		if ($(window).width() > 960) {
			$('.overlay').removeClass('active');
			globalNav.removeClass('open');
		}
	});
});