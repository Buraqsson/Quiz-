// byta färg på sidan (mörk backgrund med ljus text, ljus backgrund med mörk text)
let darkMode = document.querySelector("#change-background");
let questionOne = document.querySelector("#question1X3");
let allQuestion = document.querySelector("#quiz");
darkMode.addEventListener("click", () => {
  let body = document.querySelector("body");
  if (body.style.background === "black") {
    body.style.background = "white";
    body.style.color = "black";
  } else {
    body.style.background = "black";
    body.style.color = "white";
  }
});
// body.style.background = "#131E3A";
// body.style.color ="#D9DDDC";

let button = document.createElement("button");
button.innerHTML = "Get reslut!";
allQuestion.appendChild(button);

button.addEventListener("click", () => {
  let score = 0;

  let answers = document.querySelectorAll("#answer");

  for (let x = 0; x < answers.length; x++) {
    let correctAnswers = answers[x];
    if (correctAnswers.value == "correct" && correctAnswers.checked) {
      score++;
    }
  }

  let q7Answers = document.querySelectorAll("#question7");

  for (let x = 0; x < q7Answers.length; x++) {
    let correctAnswers7 = q7Answers[x];
    if (
      document.getElementById("ja").checked &&
      document.getElementById("ja1").checked
    ) {
      score++;
    }
  }

  let totalScore = document.querySelector("#message");
  totalScore.innerHTML = `Din totala poäng: ${score}`;

  if (score === 7) {
    totalScore.style.color = "green";
  } else if (score >= 4) {
    totalScore.style.color = "orange";
  } else {
    totalScore.style.color = "red";
  }
});
