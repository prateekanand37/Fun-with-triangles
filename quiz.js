const quizForm=document.querySelector(".quiz-form")
const btnSubmit=document.querySelector("#answer-btn")
const OutputResult=document.querySelector("#output-1")
const correctAnswer=["90°","Right-angled"];
btnSubmit.addEventListener("click",calculateScore)
function calculateScore(){
    console.log("done")
    let score=0;
    let i=0;
    const formResults=new FormData(quizForm)
    for(let value of formResults.values()){
        if(value===correctAnswer[i]){
            score++;
        }
        i++;
    }
    OutputResult.innerHTML="Your score : " + score 
    
}
