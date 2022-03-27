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
            { title: "Rum", correct: false },
            { title: "Gin", correct: false },
            { title: "Tequila", correct: false },
            { title: "Vodka", correct: true },
        ]
    },
    {
        question: "Which of these cocktails could be ordered dry or dirty?",
        choices: [
            { title: "Americano", correct: false },
            { title: "Manhattan", correct: false },
            { title: "Martini", correct: true },
            { title: "Old fashiond", correct: false },
        ]
    },
    {
        question: "Which cocktail is made with these ingredients: vodka, triple sec, cranberry juice and lime juice?",
        choices: [
            { title: "Painkiller", correct: false },
            { title: "mojito", correct: false },
            { title: "Cosmpolitan", correct: true },
            { title: "Blue blazer", correct: false },
        ]
    },
    {
        question: "Which cocktail is made with these ingredients: Amaretto liqueur and sweet and sour mix?",
        choices: [
            { title: "Amaretto peaches", correct: false },
            { title: "Amaretto Sour", correct: true },
            { title: "Amaretto Supreme", correct: false },
            { title: "Amaretto splash", correct: false },
        ]
    },
    {
        question: "A hairy navel is the stronger version of which drink?",
        choices: [
            { title: "Fuzzy navel", correct: true },
            { title: "Peachy navel", correct: false },
            { title: "Buttery navel", correct: false },
            { title: "Mossy navel", correct: false },
        ]
    },{
        question: "What exactly is the sunrise in a Tequila sunrise?",
        choices: [
            { title: "Lime juice & grenadine", correct: false },
            { title: "Grapefruit juice & curacao", correct: false },
            { title: "Orange juice & grenadine", correct: true },
            { title: "Lime juice & peach schnapps", correct: false },
        ]
    },{
        question: "When a customer asks for a house margarita, what is the underlying flavor?",
        choices: [
            { title: "Strawberry", correct: false },
            { title: "Pineapple", correct: false },
            { title: "Lemon/Lime", correct: true },
            { title: "Orange", correct: false },
        ]
    },{
        question: "What does a Blue Moon beer get garnished with?",
        choices: [
            { title: "Lemon", correct: false },
            { title: "Lime", correct: false },
            { title: "Mint", correct: false },
            { title: "Orange", correct: true },
        ]
    },{
        question: "Which liqueur is used in margaritas?",
        choices: [
            { title: "Vodka", correct: false },
            { title: "Gin", correct: false },
            { title: "Rum", correct: false },
            { title: "Tequila", correct: true },
        ]
    },

]