(function(){
	
	"use strict";
	console.log("reading js");

	const startGame = document.getElementById('startgame');
	const game = document.getElementById('game');
	const score = document.getElementById('score');
	const actionArea = document.getElementById('actions');

	//audio 
	const diceSound = document.getElementById('dicesound');
	const winSound = document.getElementById('winsound');

	//dice images 
	const gameData = {
		dice: ['images/pinkflower1.png', 
            'images/pinkflower2.png', 
            'images/pinkflower3.png', 
            'images/pinkflower4.png', 
            'images/pinkflower5.png', 
            'images/pinkflower6.png'],

		players: ['player 1', 'player 2'],
		score: [0, 0],
		roll1: 0,
		roll2: 0,
		rollSum: 0,
		index: 0,
		gameEnd: 50
	};



    //start game    
	startGame.addEventListener('click', function () {
        startGame.outerHTML = '<button id="quit"> Quit </button>';
		document.getElementById('quit').addEventListener('click', function () {
				location.reload();
            });

		setUpTurn();
	});

	//switches the images when dice is thrown
	function setUpTurn() {
		game.innerHTML = `<p>${gameData.players[gameData.index]}</p>
            <div id="diceContainer">
                <img id="die1" src="images/pinkflower1.png">
                <img id="die2" src="images/pinkflower1.png">
            </div>`
		actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';

		//sound for roll buttons
		document.getElementById('roll').addEventListener('mouseup', function (){
			diceSound.currentTime = 0;
			diceSound.play();
		});

		document.getElementById('roll').addEventListener('click', throwDice);
	}


	// adds or subtracts the scores when dice is thrown
	function throwDice(){
		actionArea.innerHTML = '';

		gameData.roll1 = Math.floor(Math.random() * 6) + 1;
		gameData.roll2 = Math.floor(Math.random() * 6) + 1;

        document.getElementById('die1').src = gameData.dice[gameData.roll1-1];
        document.getElementById('die2').src = gameData.dice[gameData.roll2-1];

		gameData.rollSum = gameData.roll1 + gameData.roll2;


		// if a double 4 is rolled subtract 8 points 
		if( gameData.roll1 === 4 && gameData.roll2 === 4) {
            gameData.score[gameData.index] -= 8;
            
            showCurrentScore();

			gameData.index ? (gameData.index = 0) : (gameData.index = 1);
			setTimeout(setUpTurn, 2000);

            actionArea.innerHTML = '<button id="roll2">Roll the Dice </button>';
		} 


        // if a 4 is rolled subtract 4
        else if ( gameData.roll1 === 4 || gameData.roll2 === 4) {
            gameData.score[gameData.index] -= 4;
			showCurrentScore();

			gameData.index ? (gameData.index = 0) : (gameData.index = 1);
			setTimeout(setUpTurn, 2000);

            actionArea.innerHTML = '<button id="roll2">Roll the Dice </button>';
		}

		// if none rolled is a 4...  regular roll
		else { 
			gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
			actionArea.innerHTML = '<button id="rollagain">Roll again</button> <button id="pass">Pass</button>';

			//roll again sound
			document.getElementById('rollagain').addEventListener('mouseup', function (){
				diceSound.currentTime = 0;
				diceSound.play();
			});

			document.getElementById('rollagain').addEventListener('click', function () {
				//setUpTurn();
				throwDice();
			});

			document.getElementById('pass').addEventListener('click', function () {
				gameData.index ? (gameData.index = 0) : (gameData.index = 1);
				setUpTurn();
			});

            showCurrentScore();
			checkWinningCondition();
		}

	}

	// check who wins the game 
	function checkWinningCondition() {
		if (gameData.score[gameData.index] > gameData.gameEnd) {
			score.innerHTML = `<h2>${gameData.players[gameData.index]} 
			wins with ${gameData.score[gameData.index]} points!</h2>`;

			actionArea.innerHTML = '';

			//win sound
			winSound.currentTime = 0;
			winSound.play();


			const quitButton = document.getElementById('quit');
                if (quitButton) {
                    quitButton.innerHTML = 'Start a New Game?';
		        }   
                else {
			    // show current score...
			    showCurrentScore();
		        }
        }
	}

	//shows the score 
	function showCurrentScore() {
        document.querySelector('.player1 p').innerHTML = gameData.score[0];
        document.querySelector('.player2 p').innerHTML = gameData.score[1];
	}

}());