$(document).ready(function(){
	$('#pixel').css('background', '#000');
	$('#pixel>i').css('transform', 'translateY(0%)');
});
 $(function() {
	$.scrollify({
		section : ".section",
		after:function(i) {
		/*
			if(i===2) {
				$.scrollify.setOptions({
					easing:"easeOutExpo"
				});
		}*/},
	});
});
var oldWidth = window.innerWidth;
window.onresize = function () {
	var newWidth = window.innerWidth;
	if (newWidth != oldWidth) {
		window.location.reload();
		oldWidth = newWidth;
	}
};

$('.nav-toggle-block').click(function() {
	$(this).toggleClass('open');
	$('.nav-toggle-line').toggleClass('active-line');
	$('.nav-list>li').toggleClass('active-list');
	$('.wrap-nav').toggleClass('wrap-nav-open');
	$('.nav-page').toggleClass('background-black');
	$('.logo-page>a').toggleClass('background-black');
});

$(function(){
	var bgHeight = $('.section-img>img').height()
	$('.section-img').css('height', bgHeight);
})

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var top1 = getRandomInt(3, 90)
var left1 = getRandomInt(3, 90)
var top2 = getRandomInt(3, 90)
var left2 = getRandomInt(3, 90)
var top3 = getRandomInt(3, 90)
var left3 = getRandomInt(3, 90)
var top4 = getRandomInt(3, 90)
var left4 = getRandomInt(3, 90)
var top5 = getRandomInt(3, 90)
var left5 = getRandomInt(3, 90)
var top6 = getRandomInt(3, 90)
var left6 = getRandomInt(3, 90)

$(function(){
	$('.random-1').css({
		top: top1 + '%',
		left: left1 + '%'
	});
	$('.random-2').css({
		top: top2 + '%',
		left: left2 + '%'
	});
	$('.random-3').css({
		top: top3 + '%',
		left: left3 + '%'
	});
	$('.random-4').css({
		top: top4 + '%',
		left: left4 + '%'
	});
	$('.random-5').css({
		top: top5 + '%',
		left: left5 + '%'
	});
})
