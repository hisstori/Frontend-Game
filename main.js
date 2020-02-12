//Create variables for javascript.
//Have system randomly select colors to play.
//Colors need to light up on each successful press. (SOUND TO COME AFTER)
//Create click event for all buttons.
//Create click event for all simon buttons.
//Impliment round system to keep track of current rounds and hightest round reached.
//Add functionality to 'how to', start button, reset button.
//==============================================
//==============================================

//Created variables to be used in JS
let order = [];
console.log(order);
let playerOrder = [];
console.log(playerOrder);
let round;
let good;
let cpuTurn;
let intervalId;
let flash;
let sound = true;
// let on = false;
let win;

//Constant variables to be used that have value in HTML
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

//Displays current round that the user is actively participating in.
//Displays highest completed round OR total number of WINs. (TBD)
currentRound.innerHTML = '--';
highRound.innerHTML = '--';

startButton.addEventListener('click', (event) => {
	play();
});

//This will completely stop and reset the current play area.
resetButton.addEventListener('click', (event) => {
	win = false;
	order = [];
	playerOrder = [];
	flash = 0;
	currentRound.innerHTML = '--';
	good = false;
	clearColor();
	clearInterval(intervalId);
});

//Function that runs the game and through the turns.
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

//Exchanges turns between the the computer and the user.
function turn () {

	if (flash == turn) {
		clearInterval(intervalId);
		cpuTurn = false;
		clearColor();
		// on = true;
	}

	if (cpuTurn) {
	  clearColor();
	  setTimeout(() => {
	  	if (order[flash] == 1) one();
	  	if (order[flash] == 2) two();
	  	if (order[flash] == 3) three();
	  	if (order[flash] == 4) four();
	  	flash++;
	  }, 400);
	}
  }
 };

//Flashes green button on press.
 one = () => {
 	green.style.backgroundColor = '#4cbb17'
 	green.style.borderColor = '#005f00'
 }

//Flashes red button on press.
 two = () => {
 	red.style.backgroundColor = '#ff0000'
 	red.style.borderColor = '#c00000'
 }

//Flashes yellow button on press.
 three = () => {
 	yellow.style.backgroundColor = '#fffa00'
 	yellow.style.borderColor = '#ede212'
 }

//Flashes blue button on press.
 four = () => {
 	blue.style.backgroundColor = '#0059ff'
 	blue.style.borderColor = '#0000ce'
 }

//Resets the button to original color, no flash.
 function clearColor () {
 	green.style.backgroundColor = '#005f00'
 	green.style.borderColor = '#4cbb17'
 	red.style.backgroundColor = '#c00000'
 	red.style.borderColor = '#ff0000'
 	yellow.style.backgroundColor = '#ede212'
 	yellow.style.borderColor = '#fffa00'
 	blue.style.backgroundColor = '#0000ce'
 	blue.style.borderColor = '#0059ff'
 }

//Flashses ALL colors on WIN.
 function flashColor () {
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
 	// if () {
 		playerOrder.push(1);
 		check();
 		one();
 		if (win) {
 			setTimeout(() => {
 				clearColor()
 			}, 400);
 		}
 	})
 // });

 red.addEventListener('click', (event) => {
 	// if () {
 		playerOrder.push(2);
 		check();
 		one();
 		if (win) {
 			setTimeout(() => {
 				clearColor()
 			}, 400);
 		}
 	})
 // });

 yellow.addEventListener('click', (event) => {
 	// if () {
 		playerOrder.push(3);
 		check();
 		one();
 		if (win) {
 			setTimeout(() => {
 				clearColor()
 			}, 400);
 		}
 	})
 // });

 blue.addEventListener('click', (event) => {
 	// if () {
 		playerOrder.push(4);
 		check();
 		one();
 		if (win) {
 			setTimeout(() => {
 				clearColor()
 			}, 400);
 		}
 	})
 // });

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
		function flashColor() {
		currentRound.innerHTML = '!!YOU WIN!!';  
		// on = false;
		win = true;
	}
};