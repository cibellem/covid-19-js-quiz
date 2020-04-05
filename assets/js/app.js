//global var
const rootDiv = document.querySelector(".root");
const startButton = document.querySelector("#button-start");
const divStart = document.getElementById("start");
const questionsAsked = [];
const endView = document.querySelector(".end");
const backToStart = document.querySelector(".backToStart");

//Modal

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const close_button_modal = document.querySelector(".close_button_modal");

close_button_modal.addEventListener("click", function () {
  modal.style.display = "none";
});

function toggleModal() {
  if ((modal.style.display = "none")) {
    document.querySelector("p.correct").innerHTML = "Correct!";
    modal.style.display = "block";
  }
}
//setting up inital style display for some elements

modal.style.display = "none";
backToStart.style.display = "none";

//Listeners
startButton.addEventListener("click", setupGame);
backToStart.addEventListener("click", function () {
  location.reload();
});

//Games starts
function setupGame() {
  divStart.style.display = "none";

  createQuestions();
}

//Set up the questions creating a DIV for each
function createQuestions() {
  questions.forEach((item) => {
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

    //Append to the HTML
    divQuestion.appendChild(titleNode);
    rootDiv.appendChild(divQuestion);
    divQuestion.append(answerNode);

    choice.forEach((i) => {
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
  backToStart.style.display = "block";
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

rootDiv.addEventListener("click", (e) => {
  const isButton = e.target.nodeName === "BUTTON";
  if (isButton) {
    correctAnswerCheck(e);

    const divToHide = document.querySelectorAll("div.show");
    for (var i = 0; i < divToHide.length; i += 1) {
      divToHide[i].style.display = "none";
    }

    gameStart();
  } else {
    return;
  }
});
//Checks if answer is right or wrong
function correctAnswerCheck(e) {
  const correctAnswer = document.querySelectorAll("p.hideAnswer");

  const answered = e.target.value;

  for (var i = 0; i < correctAnswer.length; i += 1) {
    if (correctAnswer[i].innerText.includes(answered)) {
      toggleModal(e);
    }
  }
}
//Final Div
function finalGame() {
  const finalDiv = document.createElement("div");
  const finalH = document.createElement("h3");
  const finalP = document.createElement("p");
  const playAgainBtn = document.createElement("a");
  const copyBtn = document.createElement("a");

  finalDiv.classList = "finalDiv";
  finalH.classList = "finalH";
  finalP.classList = "finalP";
  playAgainBtn.classList = "playAgain";
  copyBtn.classList = "copyBtn";

  copyBtn.innerText = "Copy url & Share";
  playAgainBtn.innerText = "Play again";
  finalP.innerText =
    " I hope this quiz helped you to learn more about this virus!Be safe!";
  finalH.innerText = "Good Job! ";

  finalDiv.prepend(finalH);
  finalDiv.append(finalP);
  finalDiv.append(playAgainBtn);
  finalDiv.append(playAgainBtn);
  finalDiv.append(copyBtn);
  rootDiv.append(finalDiv);

  //Listener Copy url
  copyBtn.addEventListener("click", function () {
    var dummy = document.createElement("input"),
      text = window.location.href;

    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    alert("Copied! :)");
    location.reload();
  });

  //Listener play again
  playAgainBtn.addEventListener("click", function () {
    finalDiv.style.display = "none";
    setupGame();
  });
}
