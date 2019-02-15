var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log('answer', _.without(array, 3));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btnLeft = document.querySelector("#btnLeft");
var btnBoth = document.querySelector("#btnBoth");
var btnRight = document.querySelector("#btnRight");

function setGradient(rnd) {
	switch (rnd) {
		case 1:
		color1.value = getRandomColor();
		color2.value = getRandomColor();
		break;

		case 2:
		color1.value = getRandomColor();
		break;

		case 3:
		color2.value = getRandomColor();
		break;
	}
	body.style.background = "linear-gradient(to right, " 
	+ color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", function() {
	setGradient(0);
})

color2.addEventListener("input", function() {
	setGradient(0);
})

btnBoth.addEventListener("click", function() {
	setGradient(1);
})

btnLeft.addEventListener("click", function() {
	setGradient(2);
})

btnRight.addEventListener("click", function() {
	setGradient(3);
})

// from stackoverflow
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

setGradient(0);

