// A variable points to a value
// It has accessibility, name, and a value

// the accessibility is set one keyword
// const, let, var

// Syntax is as follows:
// Here we declare and initialize a variable
// {keyword} {variableName} = {value}

// When declaring a variable without a value,
// the space in memory gets assigned but its value is undefined
let helloWorld
helloWorld // undefined
helloWorld = "a value" // assign it a value after

// Declare a variable that can't be reassigned/rebinded: 
const num = 2
num = 3 // Uncaught TypeError: Assignment to constant variable.

// When declaring const variables, you must initialize it at the same time
const num2 // SyntaxError