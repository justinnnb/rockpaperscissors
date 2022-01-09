let hands = ["Rock", "Paper", "Scissors"];
let computerHand;


    
document.getElementById('rock').addEventListener("click", function() {
    game("Rock");
});

document.getElementById('paper').addEventListener("click", function() {
    game("Paper");
});

document.getElementById('scissors').addEventListener("click", function() {
    game("Scissors");
});

function computerPlay() { // To generate Computer's Hand for the round
    computerHand = hands[Math.floor(Math.random() * 3)];
}

function game(playerHand) { //
        computerPlay(computerHand);
        if (computerHand === playerHand) {
            alert("Both players chose " +playerHand+ "!");
            alert("It's a draw!");
        } else if (
                (playerHand === "Rock" && computerHand === "{Scissors}" ) || 
                (playerHand === "Scissors" && computerHand === "Paper" ) || 
                (playerHand === "Paper" && computerHand === "Rock" )) 
                {
            alert("Player chose " +playerHand+ " while computer chose " +computerHand+ "! \nYou win! " +playerHand +" beats " +computerHand +"!");
        } else {
            alert("Player chose " +playerHand+ " while computer chose " +computerHand+ "! \nYou lose! " +computerHand +" beats " +playerHand +"!");
        }
}