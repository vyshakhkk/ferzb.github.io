$(document).ready(function() {
	var count = 0;
	var counter = setInterval(function(){
		if (count < 101) {
			$('.count').text(count + '%');
			$('.loader').css('width', count + '%');
			count++;
		}
		else{
			clearInterval(counter);
			$('.loader-box').css('opacity', '0');
		}
	}, 10)

	var letStart = $('.preview-btn');
	letStart.click(function() {
		$('.logo').addClass('hello')
	});

});