// All values in JS are truthy except:
0
  -
  0
null
undefined
  ''
NaN

// if/else statement

// The syntax for an if statement:

// Can be stand-alone
// if ( expression / condition ) {
// code block that will execute only if the condition is true
// }

// With an else clause:
// if ( expression / condition ) {
// code block that will execute only if the condition is true
// } else {
// code will run if condition is false
// }

// Whenever you have an else clause, a block of code will always run
// No more than one code block will run per if statement
// With an else if clause
// if ( expression / condition ) {
// code block that will execute only if the condition is true
// } else if ( expression / condition ) {
// code will run if the else if condition is true
// but will not run if the first if (condition) was true
// } else {
// code will run if all previous if and else if conditions were false
// }

// Ternary operator
5 + 5 === 10 ? 'it was true' : 'it was false'