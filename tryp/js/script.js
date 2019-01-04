$(document).ready(function() {
	var toggleBlock = $('.nav-toggle-block'),
		toggleLine = $('.nav-toggle-line'),
		nav = $('#nav');

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
//scroll fieldset2
	$('.fieldset2').click(function(event) {
		$(this).addClass('active-form');
		$('form').css('transform', 'translate(-50%, -185px)');
		$('.fieldset1').removeClass('active-form').addClass('top');
		$('.fieldset3').addClass('opacity-form');
	});
	$('.fieldset3').click(function(event) {
		$(this).addClass('active-form');
		$('form').css('transform', 'translate(-50%, -370px)');
		$('.fieldset2').removeClass('active-form').addClass('top');
		$('.fieldset4').addClass('opacity-form');
	});
	$('.fieldset4').click(function(event) {
		$(this).addClass('active-form');
		$('form').css('transform', 'translate(-50%, -555px)');
		$('.fieldset3').removeClass('active-form').addClass('top');
		$('.fieldset5').addClass('opacity-form');
	});
	$('.fieldset5').click(function(event) {
		$(this).addClass('active-form');
		$('form').css('transform', 'translate(-50%, -780px)');
		$('.fieldset4').removeClass('active-form').addClass('top');
		$('.fieldset6').addClass('opacity-form');
	});
	$('.fieldset6').click(function(event) {
		$(this).addClass('active-form');
		$('form').css('transform', 'translate(-50%, -1039px)');
		$('.fieldset5').removeClass('active-form').addClass('top');
		$('.fieldset7').addClass('opacity-form');
	});
	$('.fieldset7').click(function(event) {
		$(this).addClass('active-form');
		$('form').css('transform', 'translate(-50%, -1240px)');
		$('.fieldset6').removeClass('active-form').addClass('top');
		$('.fieldset8').addClass('opacity-form');
	});
	$('.fieldset8').click(function(event) {
		$(this).addClass('active-form');
		$('form').css('transform', 'translate(-50%, -1441px)');
		$('.fieldset7').removeClass('active-form').addClass('top');
		$('.fieldset9').addClass('opacity-form');
	});
	$('.fieldset9').click(function(event) {
		$(this).addClass('active-form');
		$('form').css('transform', 'translate(-50%, -1626px)');
		$('.fieldset8').removeClass('active-form').addClass('top');
		$('.fieldset10').addClass('opacity-form');
	});
	$('.fieldset10').click(function(event) {
		$(this).addClass('active-form');
		$('form').css('transform', 'translate(-50%, -1811px)');
		$('.fieldset9').removeClass('active-form').addClass('top');
		$('.fieldset11').addClass('opacity-form');
	});
	$('.fieldset11').click(function(event) {
		$(this).addClass('active-form');
		$('form').css('transform', 'translate(-50%, -1996px)');
		$('.fieldset10').removeClass('active-form').addClass('top');
		$('.fieldset12').addClass('opacity-form');
	});
	$('.fieldset12').click(function(event) {
		$(this).addClass('active-form');
		$('form').css('transform', 'translate(-50%, -2183px)');
		$('.fieldset11').removeClass('active-form').addClass('top');
		$('.fieldset13').addClass('opacity-form');
	});
	$('.fieldset13').click(function(event) {
		$(this).addClass('active-form');
		$('form').css('transform', 'translate(-50%, -2368px)');
		$('.fieldset12').removeClass('active-form').addClass('top');
		$('.fieldset14').addClass('opacity-form');
	});
	$('.fieldset14').click(function(event) {
		$(this).addClass('active-form');
		$('form').css('transform', 'translate(-50%, -2553px)');
		$('.fieldset13').removeClass('active-form').addClass('top');
		$('.fieldset15').addClass('opacity-form');
		$('.account-info').css({
			transform: 'translateY(135%)',
			opacity: '1'
		});;
	});
	$('.fieldset15').click(function(event) {
		$(this).addClass('active-form');
		$('form').css('transform', 'translate(-50%, -2738px)');
		$('.fieldset14').removeClass('active-form').addClass('top');
		$('.fieldset16').addClass('opacity-form');
		$('.account-info').css({
			transform: 'translateY(-92%)',
			opacity: '1'
		});;
		$('.personal-info').css({
			transform: 'translateY(-100%)',
			opacity: '0'
		});;
		$('.h-section').addClass('account-info-active');
		$('span').addClass('account-info-active');
	});
	$('.fieldset16').click(function(event) {
		$(this).addClass('active-form');
		$('form').css('transform', 'translate(-50%, -2923px)');
		$('.fieldset15').removeClass('active-form').addClass('top');
		$('.fieldset17').addClass('opacity-form');
	});
	$('.fieldset17').click(function(event) {
		$(this).addClass('active-form');
		$('form').css('transform', 'translate(-50%, -3108px)');
		$('.fieldset16').removeClass('active-form').addClass('top');
		$('.fieldset18').addClass('opacity-form');
	});
	$('.fieldset18').click(function(event) {
		$(this).addClass('active-form');
		$('form').css('transform', 'translate(-50%, -3324px)');
		$('.fieldset17').removeClass('active-form').addClass('top');
	});
});