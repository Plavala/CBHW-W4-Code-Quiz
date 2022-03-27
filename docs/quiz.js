//*Vars
var startQuiz = document.getElementById("start-quiz");
var choiceOne = document.getElementById("choice-one");
var choiceTwo = document.getElementById("choice-two");
var choiceThree = document.getElementById("choice-three");
var choiceFour = document.getElementById("choice-four");
var back = document.getElementById("back");
var reset = document.getElementById("reset");
var question = document.getElementById("question");

var questionIndex = 0;

//*functions
startQuiz.addEventListener("click", start);
choiceOne.addEventListener("click", next);
choiceTwo.addEventListener("click", next);
choiceThree.addEventListener("click", next);
choiceFour.addEventListener("click", next);

function next() {
    choiceOne.innerHTML = questions[questionIndex].choices[0].title;
    choiceTwo.innerHTML = questions[questionIndex].choices[1].title;
    choiceThree.innerHTML = questions[questionIndex].choices[2].title;
    choiceFour.innerHTML = questions[questionIndex].choices[3].title;
    question.innerHTML = questions[questionIndex].question;

    questionIndex++;
}

function start() {
    next();
}

var questions = [
    {
        question: "Screwdrivers include what fruit juice?",
        choices: [
            { title: "Apple juice", correct: false },
            { title: "Cranberry juice", correct: false },
            { title: "Orange juice", correct: true },
            { title: "Grape juice", correct: false },
        ]
    },
    {
        question: "Which liquor is used to make a Bloody Mary?",
        choices: [
            { title: "", correct: false },
            { title: "", correct: false },
            { title: "", correct: false },
            { title: "", correct: true },
        ]
    },
    {
        question: "",
        choices: [
            { title: "", correct: false },
            { title: "", correct: false },
            { title: "", correct: false },
            { title: "", correct: true },
        ]
    },
    {
        question: "",
        choices: [
            { title: "", correct: false },
            { title: "", correct: false },
            { title: "", correct: false },
            { title: "", correct: true },
        ]
    },
    {
        question: "",
        choices: [
            { title: "", correct: false },
            { title: "", correct: false },
            { title: "", correct: false },
            { title: "", correct: true },
        ]
    },
    {
        question: "",
        choices: [
            { title: "", correct: false },
            { title: "", correct: false },
            { title: "", correct: false },
            { title: "", correct: true },
        ]
    },{
        question: "",
        choices: [
            { title: "", correct: false },
            { title: "", correct: false },
            { title: "", correct: false },
            { title: "", correct: true },
        ]
    },{
        question: "",
        choices: [
            { title: "", correct: false },
            { title: "", correct: false },
            { title: "", correct: false },
            { title: "", correct: true },
        ]
    },{
        question: "",
        choices: [
            { title: "", correct: false },
            { title: "", correct: false },
            { title: "", correct: false },
            { title: "", correct: true },
        ]
    },{
        question: "",
        choices: [
            { title: "", correct: false },
            { title: "", correct: false },
            { title: "", correct: false },
            { title: "", correct: true },
        ]
    },

]