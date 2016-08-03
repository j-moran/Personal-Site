var items = document.querySelectorAll('.slide');
var currentSlide = '';
var currentDot = '';
var next = document.querySelector('#next');
var prev = document.querySelector('#previous');
var buttons = document.querySelectorAll('button');
var dots = document.querySelectorAll('#dot-cont > div > i');
var slideCount = 0;

//Start slideshow on first image
init();

//Add click handlers for buttons
next.addEventListener('click', function(){
	changeSlide('next');
});

prev.addEventListener('click', function(){
	changeSlide('previous');
});

//Create dots for projects
function genDots(){

}

//Add click handlers to pagination for carousel
function dotEvents(){
	for(var i = 0; i < dots.length; i++){
		dots[i].addEventListener('click', function(){
			console.log(changeSlide('', this.id));
		})
	}
}

//Function for slide change
function changeSlide(option, val){
	switch(option){
		case 'previous':
			slideCount -= 1;
			if(slideCount < 0){
				slideCount = items.length - 1;
			};
			break;
		case 'next':
			slideCount += 1;
			if(slideCount > items.length - 1){
				slideCount = 0;
			};
			break;
		default:
			slideCount = val - 1;
			break;
	};

	//Change active slide and dot
	currentSlide.className = 'slide inactive';
	currentDot.className = 'fa fa-circle-o'
	currentSlide = items[slideCount];
	currentDot = dots[slideCount];
	currentSlide.className = 'slide active';
	currentDot.className = 'fa fa-circle';
};

//Initialization function
function init(){
	items[0].className = 'slide active';
	currentSlide = items[slideCount];
	dots[0].className = 'fa fa-circle';
	currentDot = dots[slideCount];
	dotEvents();
};
