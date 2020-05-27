//Write a script `grade.js` that takes a number as argument that must be between 0 and 100. If the number is smaller or larger, log "Invalid grade". Otherwise, calculate their letter grade from "F" to "A" then log it. Try using BC's letter grading system (it's short).


let grade = parseFloat(process.argv[2]);

if (grade <= 100 && grade >= 80) {
  console.log("Your Grade is A (Smar student) ");
} else if (grade < 80 && grade >= 60) {
  console.log("Your Grade is B (Try Harder) ");
} else if (grade < 60 && grade >= 50) {
  console.log("Your grade is C (Before you fail study hard)");
} else if (grade < 50 && grade >= 0) {
  console.log("You failed the Class Your grade is F");
} else {
  console.log("Invalid Entry!!!");
}