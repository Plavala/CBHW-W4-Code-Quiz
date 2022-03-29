// variables for page elements
// time and score
var timeEl = document.querySelector("p.time");
var secondsLeft = 75;
var scoreEl = document.querySelector("#score");

// sections
// section intro
const introEl = document.querySelector("#intro");

// section questions
//question section
const questionsEl = document.querySelector("#questions");
//where question goes
var questionEl = document.querySelector("#question");
// how many questions they have answered
var questionCount = 0;
// div yaynay
const yaynayEl = document.querySelector("#yaynay");

// section final
const finalEl = document.querySelector("#final");
// user initials
var initialsInput = document.querySelector("#initials");

// section highscores
const highscoresEl = document.querySelector("#highscores");
// ordered list
var scoreListEl = document.querySelector("#score-list");
// array of scores
var scoreList = [];

// buttons
// start
const startBtn = document.querySelector("#start");
// answer button class
const ansBtn = document.querySelectorAll("button.ansBtn")
// answer1
const ans1Btn = document.querySelector("#answer1");
// answer2
const ans2Btn = document.querySelector("#answer2");
// answer3
const ans3Btn = document.querySelector("#answer3");
// answer4
const ans4Btn = document.querySelector("#answer4");
// submit-score
const submitScrBtn = document.querySelector("#submit-score");
// goback
const goBackBtn = document.querySelector("#goback");
// clearscores
const clearScrBtn = document.querySelector("#clearscores");
// view-scores
const viewScrBtn = document.querySelector("#view-scores");

// Object for question, answer, true/false
const questions = [ // array of objects
     {
        // question 0
        question: "Screwdrivers include what fruit juice?",
        answers: ["1. Apple juice", "2. Cranberry juice", "3. Orange juice", "4. Grape juice"],
        correctAnswer: "3. Orange juice"
    },
    {
        // question 1
        question: "Which liquor is used to make a Bloody Mary?",
        answers: ["1. Rum", "2. Gin", "3. Tequila", "4. Vodka"],
        correctAnswer: "4. Vodka"
    },
    {
        // question 2
        question: "Which of these cocktails could be ordered dry or dirty?",
        answers: ["1. Americano", "2. Manhattan", "3. Martini", "4. Old fashiond"],
        correctAnswer: "3. Martini"
    },
    {
        // question 3
        question: "Which cocktail is made with these ingredients: vodka, triple sec, cranberry juice and lime juice?",
        answers: ["1. Painkiller", "2. Mojito", "3. Cosmpolitan", "4. Blue clazer"],
        correctAnswer: "3. Cosmpolitan"
    },
    {
        // question 4
        question: "Which cocktail is made with these ingredients: Amaretto liqueur and sweet and sour mix?",
        answers: ["1. Amaretto peaches", "2. Amaretto sour", "3. Amaretto supreme", "4. Amoretto splash"],
        correctAnswer: "2. Amaretto sour"
    },
    {
        // question 5
        question: "A hairy navel is the stronger version of which drink?",
        answers: ["1. Fuzzy navel", "2. Peachy navel", "3. Buttery navel", "4. Mossy navel"],
        correctAnswer: "1. Fuzzy navel"
    },
    {
        // question 6
        question: "What exactly is the sunrise in a Tequila sunrise?",
        answers: ["1. Lime juice & grenadine", "2. grapefruit juice & curacao", "3. Orange juice & grenadine", "4. Lime juice & peach schnapps"],
        correctAnswer: "3. Orange juice & grenadine"
    },
    {
        // question 7
        question: "When a customer asks for a house margarita, what is the underlying flavor?",
        answers: ["1. Strawberry", "2. Pineapple", "3. Lemon/lime", "4. Orange"],
        correctAnswer: "3. Lemon/lime"
    },
    {
        // question 8
        question: "What does a Blue Moon beer get garnished with?",
        answers: ["1. Lemon", "2. Lime", "3. Mint", "4. Orange"],
        correctAnswer: "4. Orange"
    },
    {
        // question 9
        question: "Which liqueur is used in margaritas?",
        answers: ["1. Vodka", "2. Gin", "3. Rum", "4. Tequila"],
        correctAnswer: "4. Tequila"
    }
];


// Functions

// timer
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = `Time:${secondsLeft}s`;

        if (secondsLeft === 0 || questionCount === questions.length) {
            clearInterval(timerInterval);
            questionsEl.style.display = "none";
            finalEl.style.display = "block";
            scoreEl.textContent = secondsLeft;
        }
    }, 1000);
}

// start quiz with timer and set up questions
function startQuiz() {
    introEl.style.display = "none";
    questionsEl.style.display = "block";
    questionCount = 0;

    setTime();
    setQuestion(questionCount);
}

// function to set question; takes in a count and displays the next question/answers
function setQuestion(id) {
    if (id < questions.length) {
        questionEl.textContent = questions[id].question;
        ans1Btn.textContent = questions[id].answers[0];
        ans2Btn.textContent = questions[id].answers[1];
        ans3Btn.textContent = questions[id].answers[2];
        ans4Btn.textContent = questions[id].answers[3];
    }
}

// function to check answer and then move to next question
function checkAnswer(event) {
    event.preventDefault();

    // show section for yaynay and append message
    yaynayEl.style.display = "block";
    var p = document.createElement("p");
    yaynayEl.appendChild(p);

    // time out after 1 second
    setTimeout(function () {
        p.style.display = 'none';
    }, 1000);

    // answer checker
    if (questions[questionCount].correctAnswer === event.target.value) {
        p.textContent = "Correct!";
    } else if (questions[questionCount].correctAnswer !== event.target.value) {
        secondsLeft = secondsLeft - 10;
        p.textContent = "Wrong!";
    }

    // increment so the questions index is increased
    if (questionCount < questions.length) {
        questionCount++;
    }
    // call setQuestion to bring in next question when any ansBtn is clicked
    setQuestion(questionCount);
}

function addScore(event) {
    event.preventDefault();

    finalEl.style.display = "none";
    highscoresEl.style.display = "block";

    var init = initialsInput.value.toUpperCase();
    scoreList.push({ initials: init, score: secondsLeft });

    // sort scores
    scoreList = scoreList.sort((a, b) => {
        if (a.score < b.score) {
          return 1;
        } else {
          return -1;
        }
      });
    
    scoreListEl.innerHTML="";
    for (var i = 0; i < scoreList.length; i++) {
        var li = document.createElement("li");
        li.textContent = `${scoreList[i].initials}: ${scoreList[i].score}`;
        scoreListEl.append(li);
    }

    // Add to local storage
    storeScores();
    displayScores();
}

function storeScores() {
    localStorage.setItem("scoreList", JSON.stringify(scoreList));
}

function displayScores() {
    // Get stored scores from localStorage
    // Parsing the JSON string to an object
    var storedScoreList = JSON.parse(localStorage.getItem("scoreList"));

    // If scores were retrieved from localStorage, update the scorelist array to it
    if (storedScoreList !== null) {
        scoreList = storedScoreList;
    }
}

// clear scores
function clearScores() {
    localStorage.clear();
    scoreListEl.innerHTML="";
}

// EventListeners
// Start timer and display first question when click start quiz
startBtn.addEventListener("click", startQuiz);

// Check answers loop
ansBtn.forEach(item => {
    item.addEventListener('click', checkAnswer);
});

// Add score
submitScrBtn.addEventListener("click", addScore);

// Go Back Button
goBackBtn.addEventListener("click", function () {
    highscoresEl.style.display = "none";
    introEl.style.display = "block";
    secondsLeft = 75;
    timeEl.textContent = `Time:${secondsLeft}s`;
});

// Clear the scores
clearScrBtn.addEventListener("click", clearScores);

// View/Hide High Scores Button
viewScrBtn.addEventListener("click", function () {
    if (highscoresEl.style.display === "none") {
        highscoresEl.style.display = "block";
    } else if (highscoresEl.style.display === "block") {
        highscoresEl.style.display = "none";
    } else {
        return alert("No scores to show.");
    }
});