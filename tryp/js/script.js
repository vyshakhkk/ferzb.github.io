$(document).ready(function() {
	var toggleBlock = $('.nav-toggle-block'),
		toggleLine = $('.nav-toggle-line'),
		nav = $('#nav'),
		sectionFocus = $('.personal-info-section'),
		form = $('#globalForm'),
		fieldset = $('.fieldset');

	toggleBlock.on('click', function(event) {
		$(this).toggleClass('open');
		toggleLine.toggleClass('active-line');
		nav.toggleClass('active');
	});

	$(window).resize(function() {
		if ($(window).width() > 960) {
			nav.removeClass('active');
			toggleLine.removeClass('active-line');
			toggleBlock.removeClass('open');
		}
	});

});

	