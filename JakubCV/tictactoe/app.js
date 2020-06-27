/* 
Building a tic tac toe game:

-Win condition (tie and win)
-build a board (possibly a table)
-Ask for player names (form)
-Create players
-Displaying whos turn is it.
-countinue to alternate players until win or tie
-user is not suppose to be able to click on already marked square
-Ability to reset the board without having to type player names again (possibly switch who starts first or who is x and o)
-after one player wins append his score on the scoreboard (somewhere on the side)

algorithm:
-make an area for players which is a square divided in 9 equal size smaller squares.
-players choose x or o and write their names next to them
-after filling the form players are assigned X or O
-Randomize which player is first
-when a player clicks one of the small squares on the board it is assigned the value of that player (X or O)
-Once a square is filled it cannot be changed
-After each fill check if any player has a full row or column or across assigned to him (that player wins) - stop the game
-if all the squares are filled and there is no winner its a tie
-after one of the players clicks the reset button it clears the board and randomizes which player is first
-append the score on the score board
*/

var currentPlayer = 2;
var clickedArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var playerX = "";
var playerO = "";
var scoreX = 0;
var scoreO = 0;

function appendSquare(clickedDiv) {

    var id = clickedDiv.id.slice(-1) - 1;
    whoseTurn();


    if (clickedArray[id] == 0) {

        if (currentPlayer == 1) {
            clickedDiv = document.getElementById(clickedDiv.id).style.backgroundImage = `url('cross2.png')`;
            clickedArray[id] = 1;
            drawCondition();
            winCondition(0, 1, 2);
            winCondition(3, 4, 5);
            winCondition(6, 7, 8);
            winCondition(0, 3, 6);
            winCondition(1, 4, 7);
            winCondition(2, 5, 8);
            winCondition(0, 4, 8);
            winCondition(2, 4, 6);
        } else if (currentPlayer == 2) {
            clickedDiv = document.getElementById(clickedDiv.id).style.backgroundImage = `url('circle2.png')`;
            clickedArray[id] = 2;
            drawCondition();
            winCondition(0, 1, 2);
            winCondition(3, 4, 5);
            winCondition(6, 7, 8);
            winCondition(0, 3, 6);
            winCondition(1, 4, 7);
            winCondition(2, 5, 8);
            winCondition(0, 4, 8);
            winCondition(2, 4, 6);
        }

    }
}

function whoseTurn() {

    if (currentPlayer == 2) {
        currentPlayer = 1;
        document.getElementById("whoseTurn").innerText = playerO;
    } else {
        currentPlayer = 2;
        document.getElementById("whoseTurn").innerText = playerX;
    }
}

function formFill() {
    playerX = document.getElementById("playerx_name").value;
    playerO = document.getElementById("playero_name").value;
}


function resetGameBoard() {

    for (i in clickedArray) {
        if (clickedArray[i] != 0) {
            document.getElementById("img-area" + (parseInt(i) + 1)).style.backgroundImage = `none`;
        }
    }
    startButton();
    document.getElementById("whoseTurn").innerText = "Tic Tac Toe -> Start";
    clickedArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}

function startButton() {
    document.getElementById("whoseTurn").innerText = playerX;
    playerX = document.getElementById("playerx_name").value;
    playerO = document.getElementById("playero_name").value;
    document.getElementById("playerX").innerText = playerX;
    document.getElementById("playerO").innerText = playerO;
}

function winCondition(a, b, c) {

    if (clickedArray[a] == clickedArray[b] && clickedArray[a] == clickedArray[c]) {
        if (clickedArray[a] == 1) {
            document.getElementById("whoseTurn").innerText = playerX + " is the WINNER! Reset";
            scoreX += 1;
            document.getElementById("scoreX").innerHTML = scoreX;
        } else if (clickedArray[a] == 2) {
            document.getElementById("whoseTurn").innerText = playerO + " is the WINNER! Reset";
            scoreO += 1;
            document.getElementById("scoreO").innerHTML = scoreO;
        }
    }

}

function drawCondition() {
    if (clickedArray.indexOf(0) === -1) {
        document.getElementById("whoseTurn").innerText = "Oh it's a draw!!";
    }
}
