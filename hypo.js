const sides=document.querySelectorAll(".side-input")
const hypoBtn=document.querySelector("#hypo-btn")
const Output=document.querySelector("#output")
hypoBtn.addEventListener("click",inputHypo)
function inputHypo(){
    calculateHypo(Number(sides[0].value),Number(sides[1].value))
}
function calculateHypo(a,b){
    const sumOfSquares =a*a+b*b
    const hypoLenght=Math.sqrt(sumOfSquares)
    Output.innerText="Length of hypotenuse :" + hypoLenght +" cm sq units"

}