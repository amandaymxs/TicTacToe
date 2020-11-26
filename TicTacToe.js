const playerOne = {
    mark: 'X',
    point: 1
}
const playerTwo = {
    mark: 'O',
    point: -1
}

const board = document.querySelector(".boardContainer");
const allCells = document.querySelectorAll(".cell");
const reset = document.querySelector("#reset");
let scoreCounter = [...Array(9)].fill(0);
let counter = 0;
let player = turn();

//////////////////////////////////////////////////////////////
window.addEventListener('load', () => {
    displayTurn(player.mark);
})
board.addEventListener("mouseup", playBoard);


reset.addEventListener('click', () => {
    for (let cell in allCells) {
        allCells[cell].innerText = "";
    }
    counter = 0;
    board.addEventListener("mouseup", playBoard);
    scoreCounter.fill(0);
    player = turn();
    displayTurn(player.mark);
})

//////////////////////////////////////////////////////////////

function playBoard(e) {

    if (e.target.innerText == "") {
        e.target.innerText = `${player.mark}`;
        scoreCounter[e.target.id.substring(1)] = player.point;
        if (isGameOver()) {
            toggleBoard(this.Function);
            announceWinner();
        } else {
            counter++;
            player = turn();
            displayTurn(player.mark);

        }
    }
}

function turn() {
    return (counter % 2 === 0 ? playerOne : playerTwo);
}

function isGameOver() {
    let sumCounter = 0;
    for (let i = 0; i < 9; i += 3) {
        sumCounter = scoreCounter[0 + i] + scoreCounter[1 + i] + scoreCounter[2 + i];
        if (Math.abs(sumCounter) === 3) {
            return true;
        }

    }
    for (let i = 0; i < 3; i++) {
        sumCounter = scoreCounter[0 + i] + scoreCounter[3 + i] + scoreCounter[6 + i];
        if (Math.abs(sumCounter) === 3) {
            return true;
        }
    }

    if (Math.abs(scoreCounter[0] + scoreCounter[4] + scoreCounter[8]) === 3) {
        return true;
    } else if (Math.abs(scoreCounter[2] + scoreCounter[4] + scoreCounter[6]) === 3) {
        return true;
    }

    return false;
}

function toggleBoard() {
    board.removeEventListener('mouseup', playBoard);
}

function displayTurn(player) {
    document.querySelector(".turn").innerText = `${player}`;
}

function announceWinner() {
    document.querySelector(".annoucement").innerText = `Player ${player.mark} won!`;
}