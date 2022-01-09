let hands = ["Rock", "Paper", "Scissors"];
let computerHand;
const list = document.createElement('ul');
const ul = document.getElementById('results');
const br = document.createElement("br");


    
document.getElementById('rock').addEventListener("click", function() {
    game("Rock");
});

document.getElementById('paper').addEventListener("click", function() {
    game("Paper");
});

document.getElementById('scissors').addEventListener("click", function() {
    game("Scissors");
    
});

function playerdraw() {
    list.textContent +="Draw!";
    
    ul.appendChild(list);//add item to the list
    ul.appendChild(br);
};

function playerwin() {
    list.textContent +="Player won!";
    
    ul.appendChild(list);//add item to the list
    ul.appendChild(br);
};

function playerlose() {
    list.textContent +="Player lost!";
    
    ul.appendChild(list);//add item to the list
    ul.appendChild(br);
};

function computerPlay() { // To generate Computer's Hand for the round
    computerHand = hands[Math.floor(Math.random() * 3)];
};

function game(playerHand) { //
        computerPlay(computerHand);
        if (computerHand === playerHand) {
            alert("Both players chose " +playerHand+ "! \nIt's a draw!");
            playerdraw();
        } else if (
                (playerHand === "Rock" && computerHand === "Scissors" ) || 
                (playerHand === "Scissors" && computerHand === "Paper" ) || 
                (playerHand === "Paper" && computerHand === "Rock" )) 
                {
            alert("Player chose " +playerHand+ " while computer chose " +computerHand+ "! \nYou win! " +playerHand +" beats " +computerHand +"!");
            playerwin();
        } else {
            alert("Player chose " +playerHand+ " while computer chose " +computerHand+ "! \nYou lose! " +computerHand +" beats " +playerHand +"!");
            playerlose();
        }
};