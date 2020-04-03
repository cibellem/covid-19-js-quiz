//global var
const rootDiv = document.querySelector(".root");
const startButton = document.querySelector("#button-start");
const divStart = document.getElementById("start");
const questionsAsked = [];
const endView = document.querySelector(".end");

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
  const arrayOfQuestions = [];

  const allDiv = document.querySelectorAll("div.hide");
  for (var i = 0; i < allDiv.length; i += 1) {
    arrayOfQuestions.push(allDiv[i]);
  }

  const ramdomQuestions =
    arrayOfQuestions[Math.floor(Math.random() * arrayOfQuestions.length)];

  if (
    !questionsAsked.includes(ramdomQuestions) &&
    ramdomQuestions != undefined
  ) {
    questionsAsked.push(ramdomQuestions);
    ramdomQuestions.classList = "show";
  } else if (arrayOfQuestions.length === 0) {
    console.log("no more questions");
    finalGame();

    return;
  } else {
    gameStart;
  }
}

rootDiv.addEventListener("click", e => {
  const isButton = e.target.nodeName === "BUTTON";
  if (isButton) {
    const correctAnswer = document.querySelectorAll("p.hideAnswer");
    const answered = e.target.value;
    correctAnswer.forEach(item => {
      if (answered === item.innerText) {
        console.log("Correct!");
      } else if (answered != item.innerText) {
        console.log("Incorrect");
      } else return;
    });

    const divToHide = document.querySelectorAll("div.show");
    for (var i = 0; i < divToHide.length; i += 1) {
      divToHide[i].style.display = "none";
    }

    gameStart();
  } else {
    return;
  }
});

// function questionValidation(e) {
//   const correctAnswer = document.querySelectorAll("p.hideAnswer");
//   const answered = e.target.value;
//   correctAnswer.forEach(item => {
//     if (answered === item.innerText) {
//       alert("Correct!");
//     } else return;
//   });
// }

function finalGame() {
  const finalDiv = document.createElement("div");
  const finalH = document.createElement("h3");
  const finalP = document.createElement("h3");
  finalDiv.addClass = "finalDiv";
  finalH.addClass = "finalH";
  finalP.addClass = "finalP";

  finalH.innerText =
    " I hope this quiz helped you to learn more about this virus!Be safe!";
  finalP.innerText = "Good Job! ";
  finalDiv.appendChild(finalH, finalP);
  rootDiv.append(finalDiv);
}
