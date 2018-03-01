
var body = document.getElementById('port-body');

var contactButt = document.getElementById('contactButt')
,	contactme = document.getElementById('contactme');

contactButt.addEventListener('click', function(){
	contactme.style.display = 'block';
	body.style.backgroundColor = '#111111';
})

var close = document.getElementById('close');

close.addEventListener('click', function(){
	contactme.style.display = 'none';
	body.style.backgroundColor = '#F9F9F9';
});



// SCROLL
$('.js-btn').eq(0).click(function () {
	$('html, body').animate({
		scrollTop: $('.js-section').eq(0).offset().top
	}, 300);
});

$('.js-btn').eq(1).click(function () {
	$('html, body').animate({
		scrollTop: $('.js-section').eq(1).offset().top
	}, 300);
});

$('.js-btn').eq(2).click(function () {
	$('html, body').animate({
		scrollTop: $('.js-section').eq(2).offset().top
	}, 300);
});