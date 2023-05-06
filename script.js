// Initialize variable to hold valid choices
const validChoices = ['rock', 'paper', 'scissors'];

// Get computer choice
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
let playerSelection = 'rOcK';
let computerSelection = getComputerChoice();

// Compare choices to determine winner
    // Normalize player selection to lowercase
    // Check if player selection is valid
    // Create variable to store verdict message
    // If player and computer selections match, return "It's a tie! X and Y cancel out!"
    // If player wins round, return "You Win! X beats Y!" message
    // If computer wins round, return "You Lose! Y beats X!" message

// 

function normalizeInput(inputText) {
    let outputText = inputText.toLowerCase();
    return outputText;
};

function selectionIsValid(selection) {
    return validChoices.includes(selection);
};

function getRoundVerdict(playerSelection, computerSelection) {
    // Create variable to store round verdict
    let roundVerdict = '';
    // Check if player selection is valid
    if (selectionIsValid(playerSelection) === false) {
        roundVerdict = 'invalid'
    } else if (playerSelection === computerSelection) {
    // If selections are the same
    //// Set verdict to tie
        roundVerdict = `tie`;
    } else if (playerSelection === 'rock') {
        switch (computerSelection) {
            case 'paper':
                roundVerdict = 'lose';
                break;
            case 'scissors':
                roundVerdict = 'win';
                break;
        };
    } else if (playerSelection === 'paper') {
        switch (computerSelection) {
            case 'rock':
                roundVerdict = 'win';
                break;
            case 'scissors':
                roundVerdict = 'lose';
                break;
        };
    } else if (playerSelection === 'scissors') {
        switch (computerSelection) {
            case 'rock':
                roundVerdict = 'lose';
                break;
            case 'paper':
                roundVerdict = 'win';
                break;
        };
    };

    return roundVerdict;
    // If player selected rock
    //// Match rock to computer selection
    // If player selected paper
    //// Match paper to computer selection
    // If player selected scissors
    //// Match scissors to computer selection
};

// Output final verdict message
let roundVerdict = getRoundVerdict(normalizeInput(playerSelection), computerSelection);
let verdictMessage = `Player selected ${normalizeInput(playerSelection)}, computer selected ${computerSelection}. Verdict is ${roundVerdict}`;
console.log(verdictMessage);