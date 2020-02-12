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
let on

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
	intervalId = setInterval(turn, 800);
	console.log(order)

function turn () {
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
	  	if (order[flash] == 2) two();
	  	if (order[flash] == 3) three();
	  	if (order[flash] == 4) four();
	  	flash++;
	  }, 200);
	}
  }
 };


 one = () => {
 	green.style.backgroundColor = '#4cbb17'
 	green.style.borderColor = '#005f00'
 }

 two = () => {
 	red.style.backgroundColor = '#ff0000'
 	red.style.borderColor = '#c00000'
 }

 three = () => {
 	yellow.style.backgroundColor = '#fffa00'
 	yellow.style.borderColor = '#ede212'
 }

 four = () => {
 	blue.style.backgroundColor = '#0059ff'
 	blue.style.borderColor = '#0000ce'
 }

 function clearColor () {
 	green.style.backgroundColor = '#4cbb17'
 	green.style.borderColor = '#005f00'
 	red.style.backgroundColor = '#ff0000'
 	red.style.borderColor = '#c00000'
 	yellow.style.backgroundColor = '#fffa00'
 	yellow.style.borderColor = '#ede212'
 	blue.style.backgroundColor = '#0000ce'
 	blue.style.borderColor = '#0059ff'
 }

 green.addEventListener('click', (event) => {
 	if (on) {
 		playerOrder.push(1);
 		// check();
 		one();
 		if (win) {
 			setTimeout(() => {
 				clearColor()
 			}, 300);
 		}
 	}
 });

 red.addEventListener('click', (event) => {
 	if (on) {
 		playerOrder.push(2);
 		// check();
 		one();
 		if (win) {
 			setTimeout(() => {
 				clearColor()
 			}, 300);
 		}
 	}
 });

 yellow.addEventListener('click', (event) => {
 	if (on) {
 		playerOrder.push(3);
 		// check();
 		one();
 		if (win) {
 			setTimeout(() => {
 				clearColor()
 			}, 300);
 		}
 	}
 });

 blue.addEventListener('click', (event) => {
 	if (on) {
 		playerOrder.push(4);
 		// check();
 		one();
 		if (win) {
 			setTimeout(() => {
 				clearColor()
 			}, 300);
 		}
 	}
 });

 function check() {
 	if (playerOrder[playerOrder.length = -1] !== order[playerOrder.length = -1])
 		good = false;

 	if (playerOrder.length == 20 && good) {
 		winGame();
 	}
 	
 	if (good == false) {
 		currentRound.innerHTML = round;
 		clearColor();
 	}
 	sound = false;
	}
	if (round = playerOrder.length && good && win) {
		round++;
		playerOrder = [];
		cpuTurn = true;
		flash = 0;
		currentRound.innerHTML = round;
		intervalId = setInterval(turn, 800)
};

	function winGame() {
		currentRound.innerHTML = '!!YOU WIN!!';  
		on = false;
		win = true;
	}