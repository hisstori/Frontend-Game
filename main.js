//Create variables for javascript.
//Have system randomly select colors to play.
//Colors need to light up on each successful press. (SOUND TO COME AFTER)
//Create click event for all buttons.
//Create click event for all simon buttons.
//Impliment round system to keep track of current rounds and hightest round reached.
//Add functionality to 'how to', start button, reset button.
//==============================================
//==============================================

// Created variables to be used in JS
let order = [];
let playerOrder = [];
let round;
let good;
let cpuTurn;
let intervalId;
let flash;
let sound = true;
let win;
let game = false;
let victory = 0;
let best = 0;
let endless = false;

//Constant variables to be used that have value in HTML
const howButton = document.querySelector('#how')
const wins = document.querySelector('#wins');
const span = document.querySelector('.close');
const currentRound = document.querySelector('#current');
const highRound = document.querySelector('#high');
const green = document.querySelector('#green');
const red = document.querySelector('#red');
const yellow = document.querySelector('#yellow');
const blue = document.querySelector('#blue');
const startButton = document.querySelector('#start');
const resetButton = document.querySelector('#reset');
const modal = document.querySelector('.modal');
const endlessButton = document.querySelector('#endless');



//Audio files for colors, win and game over.
let greenTone= new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
let redTone = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
let yellowTone = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
let blueTone = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
let gameOver = new Audio(src = "GameOver.wav");
let cheer = new Audio(src = "CrowdCheer.mp3")

//Displays current round that the user is actively participating in.
//Displays highest completed round OR total number of WINs. (TBD)
currentRound.innerHTML = '--';
highRound.innerHTML = '--';
wins.innerHTML = '--';

//Opens modal to display play instructions and win/loss conditions.
how.onclick = function () {
	modal.style.display = 'inline-block';
};

//Closes modal when clicking on 'x'.
span.onclick = function () {
	modal.style.display = 'none';
};

//Begins the game of Simon Says.
startButton.addEventListener('click', (event) => {
	playGame();
});

endlessButton.addEventListener('click', (event) => {
	endless = true;
});

//This will completely stop and reset the current play area.
resetButton.addEventListener('click', (event) => {
	win = false;
	order = [];
	playerOrder = [];
	game = false;
	flash = 0;
	currentRound.innerHTML = '--';
	good = false;
	endless = false;
	clearColor();
	clearInterval(intervalId);
});

//Function that runs the game and through the turns.
function playGame() {
	game = true;
	win = false;
	order = [];
	playerOrder = [];
	flash = 0;
	intervalId = 0;
	round = 1;
	currentRound.innerHTML = 1;
	good = true;
	for (let i = 0; i < 5; i++) {
		order.push(Math.floor(Math.random() * 4) +1);
	}
	cpuTurn = true;

	intervalId = setInterval(turn, 800);
}

//Exchanges turns between the the computer and the user.
function turn () {
	game = false;

	if (flash == round) {
		clearInterval(intervalId);
		cpuTurn = false;
		clearColor();
		game = true;
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
  };

//Flashes green button on press.
 one = () => {
 	green.style.backgroundColor = '#4cbb17'
 	green.style.borderColor = '#005f00'
 	greenTone.play();
 }

//Flashes red button on press.
 two = () => {
 	red.style.backgroundColor = '#ff0000'
 	red.style.borderColor = '#c00000'
 	redTone.play();
 }

//Flashes yellow button on press.
 three = () => {
 	yellow.style.backgroundColor = '#fffa00'
 	yellow.style.borderColor = '#ede212'
 	yellowTone.play();
 }

//Flashes blue button on press.
 four = () => {
 	blue.style.backgroundColor = '#0059ff'
 	blue.style.borderColor = '#0000ce'
 	blueTone.play();
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
 	blue.style.backgroundColor = '#0059ff'
 	blue.style.borderColor = '#0000ce'
 }

//Green lights up when pressed, 
 green.addEventListener('click', (event) => {
 	if (game) {
 		playerOrder.push(1);
 		check();
 		one();
 		if (!win) {
 			setTimeout(() => {
 				clearColor();
 			}, 300);
 		}
 	}
 });
//Red lights up when pressed.
 red.addEventListener('click', (event) => {
 	if (game) {
 		playerOrder.push(2);
 		check();
 		two();
 		if (!win) {
 			setTimeout(() => {
 				clearColor();
 			}, 300);
 		}
 	}
 });
//Yellow lights up when pressed.
 yellow.addEventListener('click', (event) => {
 	if (game) {
 		playerOrder.push(3);
 		check();
 		three();
 		if (!win) {
 			setTimeout(() => {
 				clearColor();
 			}, 300);
 		}
 	}
 });
//Blue lights up when pressed.
 blue.addEventListener('click', (event) => {
 	if (game) {
 		playerOrder.push(4);
 		check();
 		four();
 		if (!win) {
 			setTimeout(() => {
 				clearColor();
 			}, 300);
 		}
 	}
 });
//Checking the player presses against the computer presses to identify matching sequence. 
//If sequnce matches, new sequence plays.
 function check() {
 	if (playerOrder[playerOrder.length -1] !== order[playerOrder.length -1])
 		good = false;

 	if (playerOrder.length == 5 && good) {
 		winGame();
 	}
 	
 	if (good == false) {
 		flashColor();
 		currentRound.innerHTML = 'Failed round ' 
 		+ round  + ' ';
 		gameOver.play();
 		game = false;
 		alert("Game Over, please press reset and try again!");
 		clearColor();
 	}

	if (round == playerOrder.length && good && !win) {
		round++;
		playerOrder = [];
		cpuTurn = true;
		flash = 0;
		currentRound.innerHTML = round;
		highRound.innerHTML = round;
		intervalId = setInterval(turn, 800)
	}
};

//Displays and takes effect after user wins the game.
function winGame() {
		flashColor();
		clearColor();
		currentRound.innerHTML = '!!YOU WIN!!';  
		game = false;
		win = true;
		victory++
		wins.innerHTML = victory;
		cheer.play();
		alert("Congratulations, you have won!")
};