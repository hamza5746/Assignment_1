let x:number =4;
let y:number =5;
let result:number =0;

function showAddition(firstNumber:number,secondNumber:number){
    console.log("Addition: "+(firstNumber+secondNumber));
}
function showSubstraction(firstNumber:number,secondNumber:number){
    console.log("Substraction: " +(firstNumber-secondNumber));
}
function showMultiplication(firstNumber:number,secondNumber:number){
    console.log("Multiplication: "+(firstNumber*secondNumber));
}
function showDivision(firstNumber:number,secondNumber:number){
    console.log("Division: "+(firstNumber/secondNumber));
}

showAddition(x,y);
showSubstraction(x,y);
showMultiplication(x,y);
showDivision(x,y);