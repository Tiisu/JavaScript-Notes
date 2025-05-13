

// A fucntion to get computer choice

let humanScore  = 0;
let computerScore  = 0;

function getComputerChoice(){
    let me = Math.floor(Math.random() * 3)
    if (me == 0) {
        return 'rock'
    } else if (me == 1){
        return 'paper'
    } else if (me == 2){
        return 'scissors'
    } else {
        return 'This is a werong choince';
    };
}

// A functon to get Human Score

function getHumanChoice(){
    let userChoice = prompt('Enter your choice ').toLocaleLowerCase();
    if (userChoice == 'rock'){
        return userChoice;
    } else if (userChoice == 'paper') {
        return userChoice;
    } else if (userChoice == 'scissors'){
        return userChoice;
    } else{
        return 'You have entered a wrong choice';
    }
    // userChoice.toLocaleLowerCase()
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

// A functon to play a round
function playRound(humanChoice , computerChoice){
    if (humanChoice === "rock" && computerChoice === "scissors") {
        alert('Human has won')
        humanScore += 1;
    }
    else if (computerChoice === "rock" && humanChoice === "scissors") {
        alert('Computer has won')

        computerScore += 1;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        alert('Human has won')

        humanScore += 1;
    }
    else if (computerChoice === "paper" && humanChoice === "rock") {
        alert('Computer has won')

        computerScore += 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        alert('Human has won')

        humanScore += 1;
    }
    else if (computerChoice === "scissors" && humanChoice === "paper") {
        alert('Computer has won')

        computerScore += 1;

    }

}



function playGame(){
    let numOfRounds = 5;
    let numOfRoundsPlayed = 0;
    while ( numOfRoundsPlayed <= numOfRounds) {
        playRound(humanChoice,computerChoice )  

    }
    
    

}
// getHumanChoice()
playGame()
// getComputerChoice()w