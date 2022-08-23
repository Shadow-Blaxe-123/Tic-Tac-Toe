let button = document.getElementById("reset");
var player = "X";
let turn = document.getElementById("turn");
let elements = document.querySelectorAll(".box");
let ting = new Audio("ting.mp3");
let gameover = false;
let music = document.getElementById('music');
let gameAudio = new Audio('music.mp3');
let gameoverMusic = new Audio('gameover.mp3')

music.addEventListener('click', ()=>{
  if (music.innerText == 'Music off'){
    gameAudio.play();
    music.innerText = 'Music on';
    music.style.backgroundColor = 'green';
  }
  else if(music.innerText == 'Music on') {
    gameAudio.pause();
    music.innerText = 'Music off';
    music.style.backgroundColor = 'rgb(60, 172, 216)';
  }
})

function changeTurn() {
  // if (!gameover) {
  if (player === "X") {
    turn.innerText = `Turn for ${player};`;
    return (player = "O");
  } else if (player === "O") {
    turn.innerText = `Turn for ${player};`;
    return (player = "X");
  }
}
// }
let interval = setInterval(checkWin, 100);
if(gameover){
  clearInterval(interval)
}
Array.from(elements).forEach((element) => {
  element.addEventListener("click", () => {
    // checkWin();
    if (element.innerText == "") {
      if (!gameover) {
        // checkWin();
        ting.play();
        changeTurn();
        //   console.log(elements[0]);
        element.innerText = player;
      }
    }
  });
});

function checkWin() {
  const winCriteria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  winCriteria.forEach((e) => {
    if (
      elements[e[0]].innerText === elements[e[1]].innerText &&
      elements[e[2]].innerText === elements[e[0]].innerText &&
      elements[e[0]].innerText !== ""
    ) {
      turn.innerText = `Player ${player} Won!!!!`;
      document.getElementsByTagName('img')[0].style = `
      width: 200px;
      transition: width 2s ease-in 0.5s;
      `;
      gameoverMusic.play();
      return (gameover = true);
    } 
    else if (
      (elements[0].innerText !== "") && (elements[1].innerText !== "") && (elements[2].innerText !== "") && (elements[3].innerText !== "") && (elements[4].innerText !== "") && (elements[5].innerText !== "") && (elements[6].innerText !== "") && (elements[7].innerText !== "") && (elements[8].innerText !== "") &&
      !gameover
    ) {
      turn.innerText = `Match is a Tie`;
      gameoverMusic.play();
      gameoverMusic.loop = false;
      return (gameover = true);
    }
  });
}

button.addEventListener("click", () => {
  location.reload();
  return false;
});
