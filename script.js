function computerPlay() {
    if(gameResult.textContent !== "") {
        gameResult.textContent = "";
    }
    const computerMove = Math.floor(Math.random() * 3);
    switch (computerMove) {
        case 0:
            return "rock";
        case 1:
            return 'scissors';
        case 2: 
            return 'paper';
        default:
            return 'Something went wrong when calculating computer move';
    }
}
function playerPlayedRock() {
    switch (computerPlay()) {
        case 'rock':
            playerDraw();
            break;
        case 'paper': 
            playerLose('Papaer', 'Rock');
            break;
        case 'scissors':
            playerWin('Rock', 'Scissors');
            break;
        default: 
            console.log('Something went wrong when calculating winner');
            break;
    }
}
function playerPlayedPaper() {
    switch (computerPlay()) {
        case 'rock':
            playerWin('Paper', 'Rock');
            break;
        case 'paper':  
            playerDraw();
            break;
        case 'scissors':
            playerLose('Scossors', 'Paper'); 
            break;
        default: 
            console.log('Something went wrong when calculating winner');
            break;
    }
}
function playerPlayedScissors() {
    switch (computerPlay()) {
        case 'rock':
            playerLose('Rock', 'Scissors');
            break;
        case 'paper': 
            playerWin('Scissors', 'Paper');
            break;
        case 'scissors':
            playerDraw();
            break;
        default: 
            console.log('Something went wrong when calculating winner');
            break;
    } 
}

function playerWin(playerMove, computerMove) {
    roundResult.textContent = `You Win! ${playerMove} beats ${computerMove}.`;
    updateScore(true);
    updateGamesPlayed();
    if(gamesPlayed === 5) {
        decideGameResult();     
    }  
}

function playerLose(playerMove, computerMove) {
    roundResult.textContent = `You Lose! ${computerMove} beats ${playerMove}.`;
    updateScore(false);
    updateGamesPlayed();
    if(gamesPlayed === 5) {
        decideGameResult();     
    }   
}

function playerDraw() {
    roundResult.textContent = "It's a draw."; 
    updateGamesPlayed();
    if(gamesPlayed === 5) {   
        decideGameResult();  
    }
}

function updateGamesPlayed() {
    gamesPlayed += 1;
    showGamesPlayed.textContent = gamesPlayed;
}

function updateScore(win) {
    if(win) {
        score += 1;
    }else {
        score -= 1;
    }       
    result.textContent = score;
    console.log(score);
}

function decideGameResult() {
    if(score >= 3) {
        gameResult.textContent = 'You win the game!';
        gameResult.classList.remove('invisible');
        console.log('You win!');          
        startNewGame();
    }else {
        console.log('You lose the game!');  
        gameResult.textContent = 'You lose!';
        gameResult.classList.remove('invisible');         
        startNewGame();
    }

    function startNewGame() {
        result.textContent = 0;
        score = 0;
        gamesPlayed = 0;
        showGamesPlayed.textContent = 0;
    }
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', playerPlayedRock);

const paper = document.querySelector('#paper');
paper.addEventListener('click', playerPlayedPaper);

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', playerPlayedScissors);

let result = document.getElementById('result');
let score = Number(result.textContent);    

let showGamesPlayed = document.getElementById('gamesPlayed');
let gamesPlayed = 0;

let gameResult = document.getElementById('gameResult');

let roundResult = document.getElementById('roundResult');
