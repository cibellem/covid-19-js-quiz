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
  console.log(allDiv);
  const randomDiv = allDiv[Math.floor(Math.random() * allDiv.length)];
  console.log(randomDiv);
  if (!questionsAsked.includes(randomDiv)) {
    questionsAsked.push(randomDiv);
    randomDiv.classList = "show";
  } else {
    gameStart;
  }
}

rootDiv.addEventListener("click", e => {
  const isButton = e.target.nodeName === "BUTTON";
  if (isButton) {
    const divToHide = document.querySelectorAll("div.show");

    console.log(divToHide);
    for (var i = 0; i < divToHide.length; i += 1) {
      divToHide[i].style.display = "none";
    }

    gameStart();
  } else {
    return;
  }
});

function questionValidation() {
  console.log("hi");
}
