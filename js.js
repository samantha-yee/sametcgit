

//hide show function

var hideMe = true;
var portfolio = true;

function byeThere(){
	hithere.style.marginLeft = '-1700px';
	hithere.style.width = '110vw';
}

// function noShowPortfolio(){
// 	sectionGa.style.display = 'none';
// 	sectionBranding.style.display = 'none';
// 	sectionShort.style.display = 'none';
// 	body.style.overflow = 'hidden';
// 	portfolio == false;
// }

function hideMe() {

	hideMe == true;
	homeme.classList = 'hidden';
	infome.classList = 'hidden';
	skillsme.classList = 'hidden';
}

function showMe(){
	byeThere();
	classList = 'showing';

	hideMe == false;
}


function dontContact(){
	contactme.className = 'dontContact';
	contactme.style.display = 'none';
}

// nav buttons

var homeAnim = document.getElementById('Layer_1')
// ,	infoAnim = document.getElementById('svg2')
,	contactAnim = document.getElementById('svg2')
,	hithere = document.getElementById('hithere')
,	samsits = document.getElementById('sam')
;


////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
// portfolio button & animation


var homeButt = document.getElementById('homeButt')
,	homeme = document.getElementById('homeme');

homeButt.addEventListener('click',function(){
	dontContact();
	showMe();
	// noShowPortfolio();
	homeme.className = 'showing';
	homeAnim.style.display = 'block';
	// infoAnim.style.display = 'none';
	contactAnim.style.display = 'none';

	
	hideMe = false;

	if (hideMe == false){
		infome.className = 'hidden';
		skillsme.className = 'hidden';
	}
})


////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
// sam yee & about button & animation

var infoButt = document.getElementById('infoButt')
,	infome = document.getElementById('infome');


infoButt.addEventListener('click',function(){
	dontContact();
	showMe();
	// noShowPortfolio();
	infome.className = 'showing';
	// infoAnim.style.display = 'block';
	samsits.style.display = 'block';
	homeAnim.style.display = 'none';
	contactAnim.style.display = 'none';

	hideMe = false;

	if (hideMe == false){
		homeme.className = 'hidden';
		skillsme.className = 'hidden';

	}
})

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
// services button & animation


var skillsButt = document.getElementById('skillsButt')
,	skillsme = document.getElementById('skillsme');

skillsButt.addEventListener('click',function(){
	dontContact();
	showMe();
	// noShowPortfolio();
	skillsme.className = 'showing';
	contactAnim.style.display = 'block';
	// infoAnim.style.display = 'none';
	homeAnim.style.display = 'none';


	hideMe = false;

if (hideMe == false){
		infome.className = 'hidden';
		homeme.className = 'hidden';

	}
})

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
// contact button & animation


var contactButt = document.getElementById('contactButt')
,	contactme = document.getElementById('contactme')
,	body = document.getElementById('home-body');

contactButt.addEventListener('click', function(){
	contactme.style.display = 'block';
	body.style.backgroundColor = '#111111';
})

var close = document.getElementById('close');

close.addEventListener('click', function(){
	contactme.style.display = 'none';
	body.style.backgroundColor = '#F9F9F9';
});




