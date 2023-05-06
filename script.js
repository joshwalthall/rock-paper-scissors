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

// Get player choice
let playerSelection = 'pApEr';
// Get computer choice
let computerSelection = getComputerChoice();

// Compare choices to determine winner
    // Normalize player selection to lowercase
    // Check if player selection is valid
    // Create variable to store verdict message
    // If player and computer selections match, return "It's a tie! X and Y cancel out!"
    // If player wins round, return "You Win! X beats Y!" message
    // If computer wins round, return "You Lose! Y beats X!" message

// 

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
    return outputText
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
        roundVerdict = 'invalid'
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

function playRound(playerSelection, computerSelection) {
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
    // Return round verdict message
    return verdictMessage
}

// Output final verdict message
console.log("Testing playRound()")
let testInputText = normalizeText(playerSelection)
let testComputerChoice = getComputerChoice()
console.log(`\tPlayer Choice: ${testInputText}`)
console.log(`\tComputer Choice: ${testComputerChoice}`)
console.log(`\tOutput Text: ${playRound(testInputText, testComputerChoice)}`)

