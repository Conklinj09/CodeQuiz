var questionsElement = document.getElementById('questions');
var timerElement = document.getElementById('time');
var choicesElement = document.getElementById('choices');
var submitButton = document.getElementById('submit');
var startButton = document.getElementById('start');
var initialsElement = document.getElementById('initials');
var feedbackElement = document.getElementById('feedback');
var time = 60;
var clock;
var currentQuestionIndex = 0;




var questions = [
  {
    title: 'Commonly used data types DO NOT include:',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    answer: 'alerts',
  },
  {
    title: 'The condition in an if / else statement is enclosed within ____.',
    choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
    answer: 'parentheses',
  },
  {
    title: 'Arrays in JavaScript can be used to store ____.',
    choices: [
      'numbers and strings',
      'other arrays',
      'booleans',
      'all of the above',
    ],
    answer: 'all of the above',
  },
  {
    title:
      'String values must be enclosed within ____ when being assigned to variables.',
    choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
    answer: 'quotes',
  },
  {
    title:
      'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
    answer: 'console.log',
  },
];
function endGame (){
  clearInterval(clock);

}
function checkAnswer(event){
  console.log(event)
  console.log(this)
  if (this.value === questions[currentQuestionIndex].answer){
    currentQuestionIndex++
    showQuestions()
  }
  if (currentQuestionIndex === questions.length-1){
  endGame()
  }
}
function showQuestions() {
  var currentQuestion = questions[currentQuestionIndex];
  var questionTitleElement = document.getElementById('question-title');
  questionTitleElement.textContent = currentQuestion.title;
choicesElement.innerHTML = '';
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var choice = currentQuestion.choices[i]
    var choiceButton = document.createElement('button')
    choiceButton.setAttribute('value', choice)
    choiceButton.textContent = choice
    choiceButton.addEventListener('click',checkAnswer)
    choicesElement.appendChild(choiceButton)

  }

}

// }
function startQuiz() {
  var startScreenElement = document.getElementById('start-screen')
  startScreenElement.setAttribute('class', 'hide')
  questionsElement.removeAttribute('class')
  clock = setInterval(timer, 1000)
  console.log(questions[currentQuestionIndex]);
  showQuestions()

}


// Array of words the user will guess
// var words = ["variable", "array", "modulus", "object", "function", "string", "boolean"];


//Timer Function 
function timer() {
  time--
  timerElement.textContent = time;
}




// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startQuiz);

// Calls init() so that it fires when page opened
// init();

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");


