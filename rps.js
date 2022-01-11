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
function playerdraw() { // 
    let ul = document.getElementById('results');
    let li = document.createElement('li');
    li.appendChild(document.createTextNode("Draw!"));
    ul.appendChild(li);//add item to the li

};

function playerlose() {
    let ul = document.getElementById('results');
    let li = document.createElement('li');
    li.appendChild(document.createTextNode("Lose!"));
    ul.appendChild(li);//add item to the li
};

function computerPlay() { // To generate Computer's Hand for the round
    computerHand = hands[Math.floor(Math.random() * 3)];
};

function game(playerHand) { //
        
    const winResult = "Player chose " +playerHand+ " while computer chose " +computerHand+ "! \nYou win! " +playerHand +" beats " +computerHand +"!";
    const loseResult = "Player chose " +playerHand+ " while computer chose " +computerHand+ "! \nYou lose! " +computerHand +" beats " +playerHand +"!";
    const drawResult = "Both players chose " +playerHand+ "! \nIt's a draw!";
    function playerwin() {

        let ul = document.getElementById('results');
        let li = document.createElement('li');
        li.appendChild(document.createTextNode("Win!"));
        ul.appendChild(li);//add item to the li
    };

    function winLog() {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(winResult));
        document.getElementById('roundlog').appendChild(li);
    };

    function loseLog() {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(loseResult));
        document.getElementById('roundlog').appendChild(li);
    };

    function drawLog() {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(drawResult ));
        document.getElementById('roundlog').appendChild(li);
    };

    let playescore = 0;
    let computerscore = 0;
    
        computerPlay(computerHand);
        if (computerHand === playerHand) {
            alert(drawResult);
            playerdraw();
            drawLog();
        } else if (
                (playerHand === "Rock" && computerHand === "Scissors" ) || 
                (playerHand === "Scissors" && computerHand === "Paper" ) || 
                (playerHand === "Paper" && computerHand === "Rock" )) 
                {
            alert(winResult);
            playerwin();
            winLog();
            document.getElementById('playerscore').innerHTML += "playerscore + 1";
        } else {
            alert(loseResult);
            playerlose();
            loseLog();
        };
};

