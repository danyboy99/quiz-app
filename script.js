const quizData =[
    {
        question:"which language run in a web browser",
        a: "Java",
        b: "c",
        c: "python",
        d: "javascript",
        correct: "d",
    },
    {
        question:"What does CSS stands for ?",
        a: "central style sheet",
        b: "Cascading style sheet",
        c: "Cascading simple sheet",
        d: "comported simple sheet",
        correct: "b",
    },
    {
        question:"What does HTML stands for",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Hypersmooth Machine Language",
        correct: "a",
    },
    {
        question:"What year was javascript launched ?",
        a: "1998",
        b: "1995",
        c: "1990",
        d: "none of the above",
        correct: "b",
    },
];
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEls = document.getElementById('question');
const a_text = document.getElementById('a-text');
const b_text = document.getElementById('b-text');
const c_text = document.getElementById('c-text');
const d_text = document.getElementById('d-text');
const subButton = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
const deselectAnswer = ()=>{
    answerEls.forEach(answerEls => answerEls.checked = false )
}
deselectAnswer();
const loadQuiz= ()=> {
    deselectAnswer()
    const currentQuizData = quizData[currentQuiz]

    questionEls.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

};
loadQuiz();
const getSelected = () =>{
    let answer 
    answerEls.forEach(answerEls =>{
        if(answerEls.checked){
            answer = answerEls.id
        }
    })
    return answer 
}
 
subButton.addEventListener('click', () => {
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++ 
        if(currentQuiz < quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML=`
            <h2>You answeres  ${score}/${quizData.length} questions correctly </h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
