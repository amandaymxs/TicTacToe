const playerOne = {
    mark: 'X',
    point: '1'
}
const playerTwo = {
    mark: 'O',
    point: '-1'
}

const board = document.querySelector(".boardContainer");
const allCells = document.querySelectorAll(".cell");
const reset = document.querySelector("#reset");
let counter = 0;
let scoreBoard = [...Array(3)].map(e => Array(3));

let cell = [...Array(8)].map(e => {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < scoreBoard.lenght; j++) {
            for (let k = 0; k < j.length; k++) {
                cell[i] = scoreBoard[j][k];

            }
        }
    }
});
///////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////

board.addEventListener("mouseup", (e) => {
    let player = turn();
    if (e.target.innerText == "") {
        e.target.innerText = `${player.mark}`;
        let cellNum = e.target.id;
        cell[cellNum] = player.point;
        counter++;
    }

    // if (counter >= 5) {
    //     if (isGameOver(player)) {
    //         console.log(`Player ${player.mark} is the winner!`)
    //     }
    // }

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

}