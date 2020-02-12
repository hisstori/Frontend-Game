//Create variables for javascript.
//Have system randomly select colors to play.
//Colors need to light up on each successful press. (SOUND TO COME AFTER)
//Create click event for all buttons.
//Create click event for all simon buttons.
//Impliment round system to keep track of current rounds and hightest round reached.
//Add functionality to 'how to', start button, reset button.
//==============================================
//==============================================

let order = [];
console.log(order)
let playerOrder = [];
let round 
let good
let cpuTurn
let intervalId
let sound = true;
let win 

const howButton = document.querySelector('#how')
console.log(how);
const currentRound = document.querySelector('#current');
console.log(current);
const highRound = document.querySelector('#high');
console.log(high);
const green = document.querySelector('#green');
console.log(green);
const red = document.querySelector('#red');
console.log(red);
const yellow = document.querySelector('#yellow');
console.log(yellow);
const blue = document.querySelector('#blue');
console.log(blue);
const startButton = document.querySelector('#start');
console.log(start);
const resetButton = document.querySelector('#reset');
console.log(reset);
let simon = document.querySelectorAll('.simon');
console.log(simon);


currentRound.innerHTML = '--';
highRound.innerHTML = '--';

// clearColor()
// clearInterval(intervalID)

// startButton.addEventListener('click', (event) =>)

function play() {
	win = false;
	order = [];
	playerOrder = [];
	flash = 0;
	intervalId = 0;
	round = 1;
	currentRound.innerHTML = 1;
	good = true;
	for (var i = 0; i < 20; i++) {
		order.push(Math.floor(Math.random() * 4) +1);
	}
	cpuTurn = true;
	intervalId = setInterval(turns), 800);
	console.log(order)
}

function turns () {
	startButton = false;

	if (flash == turn) {
		clearInterval(intervalId);
		cpuTurn = false;
		clearColor();
		on = true;
	}

	if (cpuTurn) {
	  clearColor();
	  setTimeout(() => {
	  	if (order[flash] == 1) one();
	  	if (order[flash] == 1) one();
	  	if (order[flash] == 1) one();
	  	if (order[flash] == 1) one();
	  }, one();
	}
}