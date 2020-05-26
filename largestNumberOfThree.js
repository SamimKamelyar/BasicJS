// lab Largest three number of

let num2 = parseInt(process.argv[3]);
let num3 = parseInt(process.argv[4]);
let num1 = parseInt(process.argv[2]);


if (num1 > num2 && num1 > num3) {
  console.log("The Largest number is : ", num1);
} else if (num2 > num1 && num2 > num3) {
  console.log("The Largest number is : ", num2);
} else {
  console.log("The Largest number is : ", num3);
}