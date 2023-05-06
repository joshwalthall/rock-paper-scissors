// Initialize variable to hold valid choices
const validChoices = ['rock', 'paper', 'scissors'];

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

function getPlayerChoice() {
    // Create variable to store player text input
    let playerChoice = normalizeText(prompt("Choose your Weapon! Rock, Paper, or Scissors: "));
    // Return player text input
    return playerChoice;
};

function normalizeText(inputText) {
    // Convert input text to all lowercase characters
    let outputText = inputText.toLowerCase();
    // Return converted input
    return outputText;
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

function selectionIsValid(selection) {
    // Return true if selection is in validChoices array, otherwise return false
    return validChoices.includes(selection);
};

function getRoundVerdict(playerSelection, computerSelection) {
    // Create variable to store round verdict
    let roundVerdict = '';
    // Check if player selection is valid
    if (selectionIsValid(playerSelection) === false) {
        roundVerdict = 'invalid';
    } else if (playerSelection === computerSelection) {
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

function playRound() {
    // Get player choice
    let playerSelection = getPlayerChoice();
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
    }
    // Create variable to store round verdict and verdict message in array
    let verdictInfo = [roundDetails, roundVerdict, verdictMessage]
    // Return round verdict message
    return verdictInfo;
}

function game () {
    // Create variable to store game round counter
    let roundCounter = 1;
    // Create variable to store player score
    let playerScore = 0;
    // Create variable to store computer score
    let computerScore = 0;
    // Play 5 rounds
    for (let i = roundCounter; i < 6; i++) {
        // Create variable that plays round and stores round results info
        let verdictInfo = playRound();
        // Display round details
        console.log(verdictInfo[0]);
        // Display round verdict message
        console.log(`\t${verdictInfo[2]}`);
        // Change player or computer score based on verdict info
        switch (verdictInfo[1]) {
            case 'win':
                playerScore++;
                console.log("\tPlayer Score +1!");
                break;
            case 'lose':
                computerScore++;
                console.log("\tComputer Score +1!");
                break;
            case 'invalid':
                computerScore++;
                console.log("\tComputer Score +1!");
                break;
        };
        
    };
    // Display final score
    console.log(`\nFINAL SCORE\t>>>\tPlayer: ${playerScore}\tComputer: ${computerScore}\n\n`);
    // Display final verdict message
    if (playerScore > computerScore) {
        console.log(
            `
██████╗ ██╗      █████╗ ██╗   ██╗███████╗██████╗     ██╗    ██╗██╗███╗   ██╗███████╗██╗
██╔══██╗██║     ██╔══██╗╚██╗ ██╔╝██╔════╝██╔══██╗    ██║    ██║██║████╗  ██║██╔════╝██║
██████╔╝██║     ███████║ ╚████╔╝ █████╗  ██████╔╝    ██║ █╗ ██║██║██╔██╗ ██║███████╗██║
██╔═══╝ ██║     ██╔══██║  ╚██╔╝  ██╔══╝  ██╔══██╗    ██║███╗██║██║██║╚██╗██║╚════██║╚═╝
██║     ███████╗██║  ██║   ██║   ███████╗██║  ██║    ╚███╔███╔╝██║██║ ╚████║███████║██╗
╚═╝     ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝     ╚══╝╚══╝ ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝
            `);
    } else if (computerScore > playerScore) {
        console.log(
            `
 ██████╗ ██████╗ ███╗   ███╗██████╗ ██╗   ██╗████████╗███████╗██████╗     ██╗    ██╗██╗███╗   ██╗███████╗██╗
██╔════╝██╔═══██╗████╗ ████║██╔══██╗██║   ██║╚══██╔══╝██╔════╝██╔══██╗    ██║    ██║██║████╗  ██║██╔════╝██║
██║     ██║   ██║██╔████╔██║██████╔╝██║   ██║   ██║   █████╗  ██████╔╝    ██║ █╗ ██║██║██╔██╗ ██║███████╗██║
██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██║   ██║   ██║   ██╔══╝  ██╔══██╗    ██║███╗██║██║██║╚██╗██║╚════██║╚═╝
╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ╚██████╔╝   ██║   ███████╗██║  ██║    ╚███╔███╔╝██║██║ ╚████║███████║██╗
╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝      ╚═════╝    ╚═╝   ╚══════╝╚═╝  ╚═╝     ╚══╝╚══╝ ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝
            `);
    } else if (playerScore === computerScore) {
        console.log(
            `
████████╗██╗███████╗     ██████╗  █████╗ ███╗   ███╗███████╗██╗
╚══██╔══╝██║██╔════╝    ██╔════╝ ██╔══██╗████╗ ████║██╔════╝██║
   ██║   ██║█████╗      ██║  ███╗███████║██╔████╔██║█████╗  ██║
   ██║   ██║██╔══╝      ██║   ██║██╔══██║██║╚██╔╝██║██╔══╝  ╚═╝
   ██║   ██║███████╗    ╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗██╗
   ╚═╝   ╚═╝╚══════╝     ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚═╝
            `);
    }
};

game()