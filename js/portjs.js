var up = document.getElementById('up')
,	down = document.getElementById('down')

,	edButt = document.getElementById('edButt')
,	brandButt = document.getElementById('brandButt')
,	illButt = document.getElementById('illButt')
,	filmButt = document.getElementById('filmButt')

,	portTypeTitle = document.getElementById('port-type-title')

,	portscroll = document.getElementById('port-scroll')
,	editorial = document.getElementById('editorial')
,	illustration = document.getElementById('illustration')
,	branding = document.getElementById('branding')
,	video = document.getElementById('video')
;

edButt.addEventListener('click', function(){
	editorial.style.display = 'block';
	branding.style.display = 'none';
	illustration.style.display = 'none';
	video.style.display = 'none';
})

brandButt.addEventListener('click', function(){
	branding.style.display = 'block';
	editorial.style.display = 'none';
	illustration.style.display = 'none';
	video.style.display = 'none';

})

illButt.addEventListener('click', function(){
	illustration.style.display = 'block';
	branding.style.display = 'none';
	editorial.style.display = 'none';
	video.style.display = 'none';
})

filmButt.addEventListener('click', function(){
	illustration.style.display = 'none';
	branding.style.display = 'none';
	editorial.style.display = 'none';
	video.style.display = 'block';
})

var portHeader = document.getElementById("port-header");
var portButts = portHeader.getElementsByClassName("port-butts");
for (var i = 0; i < portButts.length; i++) {
  portButts[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("port-active");
    current[0].className = current[0].className.replace(" port-active", "");
    this.className += " port-active";
  });
}

// var branding = document.getElementById("branding");
// var sides = branding.getElementsByClassName("sides");
// for (var i = 0; i < sides.length; i++) {
//   sides[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("side-active");
//     current[0].className = current[0].className.replace(" side-active", "");
//     this.className += " side-active";
//   });
// }


// var front = document.getElementById('front')
// ,	back = document.getElementById('back')
// ,	butzFront = document.getElementById('butz-front')
// ,	butzBack = document.getElementById('butz-back')
// ;

// front.addEventListener('click', function(){
// 	butzFront.removeClass = 'opaque';
// })

