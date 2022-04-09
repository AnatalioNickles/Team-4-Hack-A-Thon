const quizData = [
    {
        question: "What was the original name for Java?",
        a: "Ada",
        b: "c++",
        c: "Lisp",
        d: "Oak",
        correct: "d",
    },
    {
        question: "What is Java mascot called?",
        a: "Buggie",
        b: "The Duke",
        c: "Octocat",
        d: "Wilber",
        correct: "b",
    },
    {
        question: "What is the real-time aerospace programming language?",
        a: "HAL/S",
        b: "FORTRAN",
        c: "C",
        d: "Java",
        correct: "a",
    },
    {
        question: "What was the first computer game?",
        a: "Pong",
        b: "Spacewar",
        c: "Tennis for Two",
        d: "Computer Space",
        correct: "b",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score=0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {

    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
           alert('Correct. Great job!')
       }
       else{
         alert('Sorry, wrong answer. Correct option is: ' + quizData[currentQuiz].correct)
       }
       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button>All done!</button>
           `
       }
    }
})
