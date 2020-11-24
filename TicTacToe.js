const board = document.querySelector(".boardContainer");
let counter = 0;
let playerOne = 'X';
let playerTwo = 'O';

board.addEventListener("mouseup", (e) => {
    let player = turn();
    e.target.innerText = `${player}`;
    counter++;
})

function turn() {
    return (counter % 2 == 0 ? playerOne : playerTwo);
}
