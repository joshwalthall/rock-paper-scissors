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
}

// Get player choice
let playerSelection = 'sCiSsOrS'
let computerSelection = getComputerChoice()

// Compare choices to determine winner
    // Normalize player selection to lowercase
    // Check if player selection is valid
    // Create variable to store verdict message
    // If player and computer selections match, return "It's a tie! X and Y cancel out!"
    // If player wins round, return "You Win! X beats Y!" message
    // If computer wins round, return "You Lose! Y beats X!" message

// 

function normalizeInput(inputText) {
    let outputText = inputText.toLowerCase()
    return outputText
}

function selectionIsValid(selection) {
    return validChoices.includes(selection)
}

// Output final verdict message

console.log(`Player Selection: ${playerSelection}`)
console.log(`Normalized Player Selection: ${normalizeInput(playerSelection)}`)
let isValid = selectionIsValid(normalizeInput(playerSelection))
console.log(`Is Valid: ${isValid}`)

playerSelection = 'rock and STONE!'

console.log(`Player Selection: ${playerSelection}`)
console.log(`Normalized Player Selection: ${normalizeInput(playerSelection)}`)
isValid = selectionIsValid(normalizeInput(playerSelection))
console.log(`Is Valid: ${isValid}`)