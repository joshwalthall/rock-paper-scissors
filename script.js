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
// Compare choices to determine winner
// Output final verdict message
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());