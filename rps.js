let computerSelection = ["Rock", "Paper", "Scissors"];
let playerSelection;
let computerHand;
let playerHand;

function computerPlay() {
    computerHand = computerSelection[Math.floor(Math.random() * 3)];
}

function playerPlay() {
    playerHand = plgayerSelection[Math.floor(Math.random() * 3)];
}    
function game() {
    for (let playRound = 0; playRound < 5; playRound++) {
    computerPlay(computerSelection);
    prompt("Pick your hand:", playerSelection);
    if (computerSelection === playerSelection) {
    console.log("It's a draw!");
    } else if ((playerHand === "Rock" && computerHand === "{Scissors}" ) || 
               (playerHand === "Scissors" && computerHand === "Paper" ) || 
               (playerHand === "Paper" && computerHand === "Rock" )){
        console.log("Player chose " +playerHand+ " while computer chose " +computerHand+ "!");
        console.log("You win! " +playerHand +" beats " +computerHand +"!");
    } else {
        console.log("Player chose " +playerHand+ " while computer chose " +computerHand+ "!");
        console.log("You lose! " +computerHand +" beats " +playerHand +"!");
    }
    }
    }
