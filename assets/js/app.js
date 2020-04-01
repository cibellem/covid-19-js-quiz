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
  // const answerArray = [];
  // for (var i = 0; i < questions.length; i += 1) {
  //   const answers = questions[i].answer;
  //   answerArray.push(answers);
  // }

  questions.forEach(item => {
    const title = item.title;
    const choice = item.choices;
    const answer = item.answer;

    const divQuestion = document.createElement("div");
    const titleNode = document.createElement("h6");
    const answerNode = document.createElement("p");

    answerNode.innerHTML = answer;
    titleNode.innerHTML = title;

    //add predefined classes
    divQuestion.classList = "hide";
    titleNode.classList = "title";
    answerNode.classList = "hideAnswer";

    //Apend to the HTML
    divQuestion.appendChild(titleNode);
    rootDiv.appendChild(divQuestion);
    divQuestion.append(answerNode);

    choice.forEach(i => {
      const choiceNode = document.createElement("button");
      choiceNode.innerHTML = i;
      choiceNode.classList = "button-choice";
      choiceNode.value = i;
      divQuestion.append(choiceNode);
      return;
    });
  });

  gameStart();
}

//Generates a ramdom div that will be displayed
function gameStart() {
  const allDiv = document.querySelectorAll("div.hide");
  const randomDiv = allDiv[Math.floor(Math.random() * allDiv.length)];

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
    questionValidation(e);
    const divToHide = document.querySelectorAll("div.show");
    for (var i = 0; i < divToHide.length; i += 1) {
      divToHide[i].style.display = "none";
    }

    gameStart();
  } else {
    return;
  }
});

function questionValidation(e) {
  const correctAnswer = document.querySelectorAll("p.hideAnswer");
  const answered = e.target.value;
  correctAnswer.forEach(item => {
    if (answered === item.innerText) {
      console.log("Correct!");
    } else return;
  });
}
