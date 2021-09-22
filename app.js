const allInputs=document.querySelectorAll(".input-taken")
const btnCheck=document.querySelector("#isTriangle")
const resultOutput=document.querySelector("#output")

btnCheck.addEventListener("click",istriangle)
function istriangle(){

    calculateSum(Number(allInputs[0].value),Number(allInputs[1].value),Number(allInputs[2].value))
}
function calculateSum(a,b,c){
    const sumOfAngles=a+b+c;
    if(sumOfAngles===180){
        resultOutput.innerText="Yes , given angles forms a triangle"
        
    }
    else{
    resultOutput.innerText="No, given angles don't forms a triangle"
    }
}