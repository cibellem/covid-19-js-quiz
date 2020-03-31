//global var
const rootDiv = document.querySelector(".root");
const startButton = document.querySelector("#button-start");
const divStart = document.getElementById("start");
const questionsAsked = [];

//Listeners
startButton.addEventListener("click", setupGame);

//Games starts
function setupGame() {
  divStart.style.display = "none";
  createQuestions();
}

//Set up the questions creating a DIV for each
function createQuestions() {
  let id = 0;

  questions.forEach(item => {
    id++;
    const title = item.title;
    const choice = item.choices;

    const divQuestion = document.createElement("div");
    const titleNode = document.createElement("h6");

    titleNode.innerHTML = title;

    //add predefined classes
    divQuestion.classList = "hide";
    titleNode.classList = "title";

    //Apend to the HTML
    divQuestion.appendChild(titleNode);
    rootDiv.appendChild(divQuestion);

    choice.forEach(i => {
      const choiceNode = document.createElement("button");
      choiceNode.innerHTML = i;
      choiceNode.classList = "button-choice";
      divQuestion.append(choiceNode);
      return;
    });
  });
  gameStart();
}

//Generates a ramdom div that will be displayed
function gameStart() {
  const allDiv = document.querySelectorAll("div.hide");
  var randomDiv = allDiv[Math.floor(allDiv.length * Math.random())];
  if (questionsAsked.includes(randomDiv)) {
    return;
  } else {
    randomDiv.classList = "show";
    questionsAsked.push(randomDiv);
  }
  rootDiv.addEventListener("click", e => {
    const isButton = e.target.nodeName === "BUTTON";
    if (!isButton) {
      return;
    } else randomDiv.classList = "hide";
    gameStart();
  });
}

function questionValidation() {
  console.log("hi");
}
