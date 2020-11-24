const board = document.querySelector(".boardContainer");

board.addEventListener("click", (e) => {
    e.target.innerText = "X";
})

