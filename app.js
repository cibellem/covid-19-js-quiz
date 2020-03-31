//global var
const rootDiv = document.querySelector(".root");
const startButton = document.querySelector("#button-start");
const divStart = document.getElementById("start");
const divQuestion1 = document.querySelector(".question1");

//Listeners
startButton.addEventListener("click", setupGame);

//Games starts
function setupGame() {
  divStart.style.display = "none";
  createQuestions();
}

function createQuestions() {
  let id = 0;
  questions.forEach(item => {
    id++;
    const divQuestion = document.createElement("div");
    divQuestion.classList = "question" + id;
    divQuestion.classList = "hide";

    const title = item.title;
    const choice = item.choices;
    const titleNode = document.createElement("h6");
    titleNode.innerHTML = title;
    divQuestion.appendChild(titleNode);
    rootDiv.appendChild(divQuestion);

    choice.forEach(i => {
      const choiceNode = document.createElement("button");
      choiceNode.innerHTML = i;
      divQuestion.append(choiceNode);
      return;
    });
  });
  gameStart();
}

function gameStart() {
  divQuestion1.style.display = "block";
}
