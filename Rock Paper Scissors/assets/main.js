
const rockBtn = document.getElementById('btn0');
const paperBtn = document.getElementById('btn1');
const scissorsBtn = document.getElementById('btn2');
const playBtn = document.getElementById('btnPlay');
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
    rockBtn.addEventListener('click', (() => {
        let  humanChoice = 'rock';
        return humanChoice;
    }));
    paperBtn.addEventListener('click', (() => {
        let humanChoice = paperBtn.textContent;
        return humanChoice;
    }));
    scissorsBtn.addEventListener('click', (() => {
        let humanChoice = 'scissors';
        return humanChoice;
    }));
    
    // userChoice.toLocaleLowerCase()
}

// let humanChoice = getHumanChoice();
// let computerChoice = getComputerChoice();

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
    for ( let i = 1; i <= numOfRounds; i++){
        playRound(getHumanChoice(), getComputerChoice());
        // if (i == 5) {
        //     alert(
        //         'The game has ended Play again'
        //     )
        // }

     // console.log(i)
    }

    // alert(`You scored ${humanScore} while the computer scored ${computerScore}`)
    // if (humanScore > computerScore) {
    //     alert('You have won')
    // }else {
    //     alert('Computer is the winner')
    // }

}

playBtn.addEventListener('click',playGame() );
// getHumanChoice()
// playGame()
// getComputerChoice()w