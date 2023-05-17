// Initialize variable to hold valid choices
const validChoices = ['rock', 'paper', 'scissors'];
const container = document.querySelector('#container');
const scoreboard = document.querySelector('#scoreboard');
const playerScoreboard = document.querySelector('#playerScoreboard');
const computerScoreboard = document.querySelector('#computerScoreboard');
const gameMessages = document.querySelector('#gameMessages');
const btnRock = document.querySelector('#btnRock');
const btnPaper = document.querySelector('#btnPaper');
const btnScissors = document.querySelector('#btnScissors');
const allButtons = [btnRock, btnPaper, btnScissors];
const finalMessage = document.querySelector('#finalMessage');

btnRock.addEventListener('click', function() {playRound('rock');});
btnPaper.addEventListener('click', function() {playRound('paper');});
btnScissors.addEventListener('click', function() {playRound('scissors');});

let playerScore = 0;
let computerScore = 0;
const winningScore = 5;

playerScoreboard.textContent = `You: ${playerScore}`;
computerScoreboard.textContent = `Computer: ${computerScore}`;

function getComputerChoice() {
    // Create variable to store computer choice
    let computerSelection = '';
    // Generate a random number between 0 and 2
    let randomIndex = Math.floor(Math.random() * 3);
    // Use number to assign choice to computer choice variable
    computerSelection = validChoices[randomIndex];
    // Return that value
    return computerSelection;
};

function capitalizeText(inputText) {
    // Get first letter of input text
    firstLetter = inputText.charAt(0);
    // Get rest of text
    restOfText = inputText.slice(1);
    // Create output text by adding capitalized first letter to lowercase rest of text
    outputText = firstLetter.toUpperCase() + restOfText.toLowerCase();
    // Return output text
    return outputText;
}

function getRoundVerdict(playerSelection, computerSelection) {
    // Create variable to store round verdict
    let roundVerdict = '';
    if (playerSelection === computerSelection) {
        // If selections are the same, set verdict to tie
        roundVerdict = `tie`;
    } else if (playerSelection === 'rock') {
        // If player chose rock...
        switch (computerSelection) {
            case 'paper':
                // ...and computer chose paper, player loses
                roundVerdict = 'lose';
                break;
            case 'scissors':
                // ...and computer chose scissors, player wins
                roundVerdict = 'win';
                break;
        };
    } else if (playerSelection === 'paper') {
        // If player chose paper...
        switch (computerSelection) {
            case 'rock':
                // ...and computer chose rock, player wins
                roundVerdict = 'win';
                break;
            case 'scissors':
                // ...and computer chose scissors, player loses
                roundVerdict = 'lose';
                break;
        };
    } else if (playerSelection === 'scissors') {
        // If player chose scissors...
        switch (computerSelection) {
            case 'rock':
                // ...and computer chose rock, player loses
                roundVerdict = 'lose';
                break;
            case 'paper':
                // ...and computer chose paper, player wins
                roundVerdict = 'win';
                break;
        };
    };
    // Return round verdict value (win, lose, tie, or invalid)
    return roundVerdict;
};

function playRound(playerSelection) {
    // Get computer choice
    let computerSelection = getComputerChoice();
    // Create and populate round details
    let roundDetails = `You chose ${playerSelection}, the computer chose ${computerSelection}.`;
    // Create variable to store round verdict message
    let verdictMessage = '';
    // Get round verdict based on player and computer selections
    let roundVerdict = getRoundVerdict(playerSelection, computerSelection);
    // Create capitalized version of player selection
    let playerSelCap = capitalizeText(playerSelection);
    // Create capitalized version of computer selection
    let computerSelCap = capitalizeText(computerSelection);
    // Create round verdict message and assign to variable
    switch (roundVerdict) {
        case 'win':
            verdictMessage = `You Win! ${playerSelCap} beats ${computerSelCap}`;
            break;
        case 'lose':
            verdictMessage = `You Lose! ${computerSelCap} beats ${playerSelCap}`;
            break;
        case 'tie':
            verdictMessage = `It's a Tie! ${playerSelCap} and ${computerSelCap} cancel each other out!`;
            break;
        case 'invalid':
            verdictMessage = `You Lose! ${computerSelCap} annihilates whatever "${playerSelCap}" is`;
            break;
    };
    // Create variable to store round verdict and verdict message in array
    let verdictInfo = [roundDetails, roundVerdict, verdictMessage]
    // Update player or computer score based on verdict
    updateScore(roundVerdict);
    // Update scoreboard to show latest score
    updateScoreboard();
    // Display game verdict in game messages box
    gameMessages.textContent = verdictInfo[0] + ' ' + verdictInfo[2];
    // Check if player or computer have reached the winning score
    if (checkForVictory() === true) {
        declareVictory();
    };
};

function updateScore(roundVerdict) {
    // Update player or computer score based on verdict
    if (roundVerdict == 'win') {
        playerScore += 1;
    } else if (roundVerdict == 'lose') {
        computerScore += 1;
    };
};

function updateScoreboard() {
    // Update scoreboard to show latest score
    playerScoreboard.textContent = `You: ${playerScore}`;
    computerScoreboard.textContent = `Computer: ${computerScore}`;
};

function checkForVictory() {
    // Return True if player or computer have a victory score
    // Otherwise, return False
    if (playerScore === winningScore || computerScore === winningScore) {
        return true;
    } else {
        return false;
    };
};

function declareVictory() {
    // Disable buttons
    allButtons.forEach(disableButton);
    // Determine victor and display victory message
    if (playerScore === winningScore) {
        finalMessage.textContent = "YOU WIN!";
    } else if (computerScore === winningScore) {
        finalMessage.textContent = "YOU LOSE!";
    };
};

function disableButton(button) {
    // Disable the provided button
    button.disabled = true;
};