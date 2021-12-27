"use strict";

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

function gameScore(text) {
  document.querySelector(".score").textContent = text;
}

function highScoreCall() {
  document.querySelector(".highscore").textContent = score;
}

function bodyColor(colorRGB) {
  document.querySelector("body").style.backgroundColor = colorRGB;
}

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 15;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // Quando o número é inválido de acordo com as regras:
  if (guess <= 0 || guess > 20) {
    displayMessage("🚨 Invalid Number!");
  }
  // Quando o jogador vence (acerta o secret number):
  else if (guess === secretNumber) {
    displayMessage("🏅 Correct Number Congratulations!");
    document.querySelector(".secret-number").textContent = secretNumber;

    bodyColor("#60b347");
    document.querySelector(".secret-number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      highScoreCall();
    }
  }

  // Quando o guess é diferente (maior ou menor)
  else if (guess !== secretNumber) {
    if (score >= 1) {
      displayMessage(
        guess > secretNumber ? "📈 Too high Number" : "📉 Too low Number"
      );
      score--;
      gameScore(score);
    }

    if (score === 0) {
      displayMessage("🔥 You losed the game!");
      gameScore(score);
      bodyColor("#9b111e");
    }
  }
});

// reseta tudo para iniciar uma nova rodada
document.querySelector(".again").addEventListener("click", function () {
  score = 15;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  gameScore(score);
  displayMessage("Start Guessing...");
  bodyColor("#222");
  document.querySelector(".secret-number").style.width = "15rem";
  document.querySelector(".secret-number").textContent = "?";
  document.querySelector(".guess").value = "";
});
