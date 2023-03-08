var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient(){
	body.style.background="linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
};


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);



let text;
switch (new Date().getDay()) {
	case 0: 
		text = "Today is Sunday";
		break;
	case 1:
		text = "Today is Monday";
		break;
	case 2:
		text = "Today is Tuesday";
		break;
	case 3:
		text = "Today is Wednesday";
		break;
	case 4:
		text = "Today is Thursday";
		break;
	case 5:
		text = "Today is Friday";
		break;
	case 6:
		text = "Today is Saturday";
		
}