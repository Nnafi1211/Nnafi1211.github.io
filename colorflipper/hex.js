
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
	var hexColor = "#";
	for(var i=0; i<6; ++i){
		const randomIndex = randomNumberGenerator();
		hexColor += hex[randomIndex];
	}

	color.textContent = hexColor;
	document.body.style.backgroundColor = hexColor;
});

function randomNumberGenerator(){
	const randomNumber = Math.floor(Math.random()*hex.length);
	return randomNumber;
}