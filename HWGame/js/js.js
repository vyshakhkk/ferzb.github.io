var size = 80;
var start = false;
var nextLvl = true;
var cols = rows = 2;

next(cols ,rows);

function next(c,r) {
	if(!nextLvl)
		return;
	nextLvl = false;
	$( ".content" ).fadeOut( 1000, 
	function(){
		$('.content').empty();
		$('.container').animate({
			height: ((size+14)*r) + "px",
			width: ((size+14)*c) + "px"
		},1000,
			function(){
				for(i = 0; i < (c * r); i++)
					$('.content').append(createCircle('circle', size));
				$('.content').fadeIn(200);
				pickRandomCircle();
			})
	})
}

function createCircle(type, r){
	return $('<div>').addClass('circle ' +type).width(r).height(r).click(function(){
		if(start){
			if($(this).attr('selected') == 'selected')
				$(this).addClass('selected');
			else
				$(this).addClass('wrong');
			var totalSeceted = $('.circle[selected="selected"]').length
			if(($('.selected').length + $('.wrong').length) >= totalSeceted){
				start = false;
				$('.circle[selected = "selected"]:not(.selected)').addClass('selected');
				if ($('.wrong').length == 0) {
					alert("It's Good my friend. Let's go next level");

					if (cols = rows)
						cols++;
					else if(cols > rows)
						rows++;
					else(cols > 6)
						cols = 6;
						rows = 6;
				}
			}
			next(cols, rows);
		}
	})
}

function pickRandomCircle(){
	var count = 0;
	var length = $( '.content > .circle' ).length

	for( count = 0; count < Math.ceil(length/2);){
		var random = Math.ceil(Math.random()*length);
		if (random < length){
			if(!$('.content > .circle').eq(random).hasClass('selected')){
				$('.content > .circle').eq(random).addClass('selected').attr('selected','selected');
				count++;
			}
		}
	}
	window.setTimeout(hideRandomSelectedCircle,1200)
}

function hideRandomSelectedCircle() {
	$('.content > .circle').removeClass('selected');
	start  = true;
	nextLvl = true;
}