const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

	var preRandNum = 0;
btn.addEventListener("click", function(){
	var randomNumber = Math.floor(Math.random()*colors.length);
	if(preRandNum == randomNumber)
		randomNumber = (preRandNum+1)%4;
	preRandNum = randomNumber;
	console.log(randomNumber);
	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
})