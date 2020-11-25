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
let scoreCounter = [...Array(8)].fill('0');
let counter = 0;

///////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////

board.addEventListener("mouseup", (e) => {
    let player = turn();
    if (e.target.innerText == "") {
        e.target.innerText = `${player.mark}`;
        scoreCounter[e.target.id] = player.point;
        console.log(scoreCounter[e.target.id]);
        if (counter >= 4) {
            if (isGameOver()) {
                console.log(`Player ${player.mark} is the winner!`);
            }
        }
        counter++;
    }

})

reset.addEventListener('click', () => {
    for (let cell in allCells) {
        allCells[cell].innerText = "";
    }
    counter = 0;
})



function turn() {
    return (counter % 2 == 0 ? playerOne : playerTwo);
}

function isGameOver() {
    for (let i = 0; i < 9; i += 3) {
        let _sum = scoreCounter[0 + i] + scoreCounter[1 + i] + scoreCounter[2 + i];
        if (Math.abs(_sum) === 3) {
            return true;
        }
    }
    return false;
}