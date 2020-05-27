//Write a script `raiseToThePower.js` that takes two numbers as arguments, then calculate the first number raised to the power of the second number and log it to the screen.


let num1 = parseFloat(process.argv[2]);
let num2 = parseFloat(process.argv[3]);
console.log("The Result is : ",num1 ** num2);