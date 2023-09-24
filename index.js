const startBtn = document.getElementById("start_btn");
const quizBox = document.getElementById("quiz_container");
const quizStart = document.getElementById("quiz_start");
const answerNum1 = document.getElementById("first_answer");
const answerNum2 = document.getElementById("second_answer");
const answerNum3 = document.getElementById("third_answer");
const quizQuestion = document.getElementById("quiz_question")
const quizAnswer = document.getElementById("quiz_answer");
const nextBtn = document.getElementById("next_button");
const answerBtn = document.querySelectorAll(".answerbtn");
const quizIndicator = document.getElementsByClassName("indicator");
const timerNum = document.getElementById("time_number");

const quizArray = [
    {   
        question: "Jin의 반려동물은 무엇인가요?",
        options: [
            "고양이",
            "강아지",
            "도마뱀",
        ],
        correct: "강아지"
    },
    {
        question: "Jin의 반려동물의 이름은 무엇인가요?",
        options: [
            "Luca",
            "Eden",
            "Choco",
        ],
        correct: "Luca"
    },
    {
        question: "Luca의 몸무게는 몇키로일까요?",
        options: [
            "10kg",
            "13kg",
            "15kg",
        ],
        correct: "15kg"
    },

]

let currentQuestionNum = -1;
let score = 0;

function showQuestion() {
    currentQuestionNum = currentQuestionNum + 1;
    resetState();
    let currentQuestion = quizArray[currentQuestionNum];
    quizQuestion.innerHTML = currentQuestion.question;

    currentQuestion.options.forEach(answer => {
        let currentAnswer = answer[currentQuestionNum];
        const button = document.createElement("button");
        button.innerHTML = answer;
        button.classList.add("btn");
        quizAnswer.appendChild(button);
        button.addEventListener("click", () => {
            if(button.innerHTML === currentQuestion.correct) {
                console.log(quizIndicator)
                quizIndicator[currentQuestionNum].style.color = "green";
                score = score + 1;
                console.log(button)
                clearInterval(timerId)
            }else {quizIndicator[currentQuestionNum].style.color = "red";}
            nextBtn.style.display = "block"
            clearInterval(timerId)
        })
    })
}

function resetState() {
    nextBtn.style.display = "none";
    while(quizAnswer.firstChild){
        quizAnswer.removeChild(quizAnswer.firstChild);
    }
}

let seconds = 5;
let timerId;

function timer() {
    seconds--
    timerNum.innerHTML = seconds;
    console.log(seconds)
    if (seconds <= 0){
        clearInterval(timerId)
        nextBtn.style.display = "block"
        quizIndicator[currentQuestionNum].style.color = "red";
    };
}

function resetTimer() {
    clearInterval(timerId);
    seconds =5;
    timerNum.innerHTML = seconds;
}



startBtn.addEventListener("click", () => {
    quizBox.classList.remove("hide");
    quizStart.classList.add("hide");
    showQuestion()
    timerId = setInterval(timer, 1000)
    
})

nextBtn.addEventListener("click", () => {
    showQuestion();
    resetTimer();
    timerId = setInterval(timer, 1000);
})

