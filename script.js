let gamePattern = [];
let playerPattern = [];
let level = 0;
$(document).keypress(function (event) {
  $("h1").text("Level 1");
  startGame();
});
function gameOver() {
  let voice = new Audio("sounds/wrong.mp3");
  voice.play();
  document.body.style.backgroundColor = "red";
  setTimeout(function () {
    document.body.style.backgroundColor = "#011F3F";
  }, 1000);
  $("h1").text("Game Over, Press Any Key to Restart");
  gamePattern = [];
  playerPattern = [];
}
function nextSequence(randomNum) {
  switch (randomNum) {
    case "red":
      $(".red").fadeOut(100).fadeIn(100);
      const voice = new Audio("sounds/red.mp3");
      voice.play();
      break;
    case "blue":
      $(".blue").fadeOut(100).fadeIn(100);
      const voice2 = new Audio("sounds/blue.mp3");
      voice2.play();
      break;
    case "green":
      $(".green").fadeOut(100).fadeIn(100);
      const voice3 = new Audio("sounds/green.mp3");
      voice3.play();
      break;
    case "yellow":
      $(".yellow").fadeOut(100).fadeIn(100);
      const voice4 = new Audio("sounds/yellow.mp3");
      voice4.play();
      break;
  }
}

function startGame() {
  let randomNum = Math.floor(Math.random() * 4) + 1;
  switch (randomNum) {
    case 1:
      randomNum = "red";
      break;
    case 2:
      randomNum = "blue";
      break;
    case 3:
      randomNum = "green";
      break;
    case 4:
      randomNum = "yellow";
      break;
  }
  console.log(randomNum)
  gamePattern.push(randomNum);
  console.log(gamePattern);
  nextSequence(randomNum);
  
}

  $(".box").click(function () {
    var colorId = $(this).attr("id");
    playerPattern.push(colorId);
    console.log(playerPattern);
    nextSequence(colorId);
    checkList(playerPattern.length - 1);
  });

function checkList(stage) {
  if (gamePattern[stage] === playerPattern[stage]) {
    if (gamePattern.length === playerPattern.length) {
      level++;
      $("h1").text("Level " + level);
      playerPattern = [];
      setTimeout(startGame, 1000);
    }
  } else {
    gameOver();
  }
}
