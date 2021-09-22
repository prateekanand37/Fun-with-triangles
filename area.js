const inputLength=document.querySelectorAll(".input-length")
const btn=document.querySelector("#btn-submit")
const Output=document.querySelector("#output")
btn.addEventListener("click",inputValues)
function inputValues(){
    calculateArea(Number(inputLength[0].value),Number(inputLength[1].value))
}
function calculateArea(a,b){
    const area=0.5*a*b;
    Output.innerText="Calculated area :"+area+" cm sq.";

}