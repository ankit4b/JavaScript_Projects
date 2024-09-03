let instrumental = new Audio("instrumental.mpeg");
let instrumentalButton = document.getElementById("instrumentalButton");
let boxes = document.getElementsByClassName("box");

let turn = "X";
let gameover = false;

instrumentalButton.addEventListener("click", () => {
  instrumental.play();
});

// Function to change the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

// Handle click
const handleClick = (event) => {
  let boxtext = event.currentTarget.querySelector(".box-text");
  if (boxtext.innerText === "") {
    boxtext.innerText = turn;
    checkWin();
    turn = changeTurn();
    if (!gameover) {
      document.getElementById("turn").innerHTML = `Now it's ${turn} turn <br> ${
        turn === "X" ? "😎" : "👻"
      } `;
    }
  }
};

// Function to check for a win
const checkWin = () => {
  let boxtexts = document.getElementsByClassName("box-text");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[2]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[0]].innerText !== ""
    ) {
      document.getElementById(
        "turn"
      ).innerHTML = `🥳 ${turn} Won the Game 🥳 <br> ${
        turn === "X" ? "😎" : "👻"
      } `;
      gameover = true;
      Array.from(boxes).forEach((element) => {
        element.removeEventListener("click", handleClick);
      });
      return;
    }
  });
};

// Game logic
Array.from(boxes).forEach((element) => {
  element.addEventListener("click", handleClick);
});
