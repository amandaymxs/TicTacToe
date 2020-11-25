const playerOne = {
    mark: 'X',
    point: 1,
    cellTracker: []
}
const playerTwo = {
    mark: 'O',
    point: -1,
    cellTracker: []
}

const board = document.querySelector(".boardContainer");
const allCells = document.querySelectorAll(".cell");
const reset = document.querySelector("#reset");
let scoreCounter = [...Array(9)].fill(0);
let counter = 0;

//////////////////////////////////////////////////////////////

board.addEventListener("mouseup", playBoard);

reset.addEventListener('click', () => {
    for (let cell in allCells) {
        allCells[cell].innerText = "";
    }
    counter = 0;
    board.addEventListener("mouseup", playBoard);
    scoreCounter.fill(0);
    playerOne.cellTracker = [];
    playerTwo.cellTracker = [];
})

//////////////////////////////////////////////////////////////

function playBoard(e) {
    let player = turn();
    if (e.target.innerText == "") {
        e.target.innerText = `${player.mark}`;
        scoreCounter[e.target.id] = player.point;
        player.cellTracker.push(e.target.id);
        if (counter >= 4) {
            if (isGameOver()) {
                console.log(`Player ${player.mark} is the winner!`);
                toggleBoard(this.Function);
                gameOverColour(this.player);
            }
        }
        counter++;
    }
}

function turn() {
    return (counter % 2 == 0 ? playerOne : playerTwo);
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

function gameOverColour(player) {
    for (let i of player.cellTracker) {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        document.getElementById(`'${i}'`).backgroundColor = `rgb${r},${g},${b}`;
    }
}