const quizData = [
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'Paris', correct: true },
            { text: 'Berlin', correct: false },
            { text: 'Madrid', correct: false },
            { text: 'Rome', correct: false },
        ],
    },
    {
        question: 'Which planet is known as the "Red Planet"?',
        answers: [
            { text: 'Venus', correct: false },
            { text: 'Mars', correct: true },
            { text: 'Jupiter', correct: false },
            { text: 'Saturn', correct: false },
        ],
    },
    {
        question: 'Who wrote the play "Romeo and Juliet"?',
        answers: [
            { text: 'William Shakespeare', correct: true },
            { text: 'Jane Austen', correct: false },
            { text: 'Charles Dickens', correct: false },
            { text: 'Mark Twain', correct: false },
        ],
    },
    {
        question: 'What is the largest mammal in the world?',
        answers: [
            { text: 'Elephant', correct: false },
            { text: 'Giraffe', correct: false },
            { text: 'Blue Whale', correct: true },
            { text: 'Gorilla', correct: false },
        ],
    },
    {
        question: 'In which year did the Titanic sink?',
        answers: [
            { text: '1905', correct: false },
            { text: '1912', correct: true },
            { text: '1920', correct: false },
            { text: '1931', correct: false },
        ],
    },
    {
        question: 'What is the chemical symbol for gold?',
        answers: [
            { text: 'Hg', correct: false },
            { text: 'Ag', correct: false },
            { text: 'Fe', correct: false },
            { text: 'Au', correct: true },
        ],
    },
    {
        question: 'Which country is known as the "Land of the Rising Sun"?',
        answers: [
            { text: 'China', correct: false },
            { text: 'South Korea', correct: false },
            { text: 'Japan', correct: true },
            { text: 'Thailand', correct: false },
        ],
    },
    {
        question: 'What is the largest ocean on Earth?',
        answers: [
            { text: 'Atlantic Ocean', correct: false },
            { text: 'Indian Ocean', correct: false },
            { text: 'Pacific Ocean', correct: true },
            { text: 'Arctic Ocean', correct: false },
        ],
    },
    {
        question: 'Who painted the Mona Lisa?',
        answers: [
            { text: 'Vincent van Gogh', correct: false },
            { text: 'Leonardo da Vinci', correct: true },
            { text: 'Pablo Picasso', correct: false },
            { text: 'Claude Monet', correct: false },
        ],
    },
    {
        question: 'What is the powerhouse of the cell?',
        answers: [
            { text: 'Nucleus', correct: false },
            { text: 'Ribosome', correct: false },
            { text: 'Mitochondrion', correct: true },
            { text: 'Endoplasmic reticulum', correct: false },
        ],
    },
    {
        question: 'Who is the author of the Harry Potter book series?',
        answers: [
            { text: 'J.K. Rowling', correct: true },
            { text: 'George R.R. Martin', correct: false },
            { text: 'Stephen King', correct: false },
            { text: 'Suzanne Collins', correct: false },
        ],
    },
    {
        question: 'What is the largest planet in our solar system?',
        answers: [
            { text: 'Earth', correct: false },
            { text: 'Saturn', correct: false },
            { text: 'Jupiter', correct: true },
            { text: 'Neptune', correct: false },
        ],
    },
    {
        question: 'Which element has the chemical symbol "O"?',
        answers: [
            { text: 'Gold', correct: false },
            { text: 'Uranium', correct: false },
            { text: 'Silver', correct: false },
            { text: 'Oxygen', correct: true },
        ],
    },
    {
        question: 'In which year did the United States declare its independence?',
        answers: [
            { text: '1776', correct: true },
            { text: '1789', correct: false },
            { text: '1800', correct: false },
            { text: '1812', correct: false },
        ],
    },
    {
        question: 'Who wrote the famous play "Hamlet"?',
        answers: [
            { text: 'William Wordsworth', correct: false },
            { text: 'William Faulkner', correct: false },
            { text: 'William Shakespeare', correct: true },
            { text: 'William Blake', correct: false },
        ],
    },
    {
        question: 'What is the currency of Japan?',
        answers: [
            { text: 'Ringgit', correct: false },
            { text: 'Won', correct: false },
            { text: 'Yen', correct: true },
            { text: 'Baht', correct: false },
        ],
    },
    {
        question: 'Which gas makes up the majority of Earths atmosphere?',
        answers: [
            { text: 'Nitrogen', correct: true },
            { text: 'Carbon dioxide', correct: false },
            { text: 'Oxygen', correct: false },
            { text: 'Argon', correct: false },
        ],
    },
    {
        question: 'What is the largest mammal on land?',
        answers: [
            { text: 'Elephant', correct: true },
            { text: 'Giraffe', correct: false },
            { text: 'Rhino', correct: false },
            { text: 'Hippopotamus', correct: false },
        ],
    },
    {
        question: 'Who is known as the "Father of Physics"?',
        answers: [
            { text: 'Albert Einstein', correct: false },
            { text: 'Galileo Galilei', correct: true },
            { text: 'Isaac Newton', correct: false },
            { text: 'Nikola Tesla', correct: false },
        ],  
    },
    {
        question: 'What is the capital of Australia?',
        answers: [
            { text: 'Sydney', correct: false },
            { text: 'Canberra', correct: true },
            { text: 'Melbourne', correct: false },
            { text: 'Brisbane', correct: false },
        ],
    },
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

const questionContainer = document.getElementById('question-container');
const answerButtonsContainer = document.getElementById('answer-buttons');

function startQuiz() {
    currentQuestionIndex = 0;
    shuffleArray(quizData);
    showQuestion(quizData[currentQuestionIndex]);
}

function shuffleArray(array) {
    for(let i = array.length-1; i > 0; i-- ){
        const j = Math.floor(Math.random() * (i +1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showQuestion(question) {
    questionContainer.innerText = question.question;
    answerButtonsContainer.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtonsContainer.appendChild(button);
    });
}

function selectAnswer(answer) {
    const correct = answer.correct;
    if (correct) {
        alert('Correct Answer!');
        correctAnswers++;
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            showQuestion(quizData[currentQuestionIndex]);
        }
        else {
            alert('Quiz completed!');
            showResult();
        }
    } else {
        alert('Wrong Answer!');
        wrongAnswers++;
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            showQuestion(quizData[currentQuestionIndex]);
        }
        else {
            alert('Quiz completed!');
            showResult();
        }
    }
    nextButton.classList.remove('hide');
}

function showResult(){
    const result = document.getElementById('result');
    result.style.display = 'block';

    const totalQuestions = document.getElementById('total-questions');
    const correct = document.getElementById('correct-answers');
    const wrong = document.getElementById('wrong-answers');
    const viewscore = document.getElementById('score');
    const greet = document.getElementById('greet');
    const score = (correctAnswers/quizData.length) * 100;

    totalQuestions.textContent = quizData.length;
    correct.innerHTML = correctAnswers;
    wrong.innerText = wrongAnswers;
    viewscore.innerHTML = score;

    if(score > 80){
        greet.innerHTML = 'Excellent';
    } else if(score > 60){
        greet.innerHTML = 'Good';
    } else if(score > 40){
        greet.innerHTML = 'Average';
    } else if(score > 20){
        greet.innerHTML = 'Bad';
    } else if(score < 20){
        greet.innerHTML = 'Poor';
    }
}

startQuiz();