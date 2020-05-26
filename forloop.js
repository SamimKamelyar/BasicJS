// while loop

// Initialize value e.g. let i = 1
// while ( condition/expression ) {
// code will run while the codition is true

// after the iteration we should increment the initializer
// e.g. i++
// }

// Log the numbers 100 to 0
// let i = 100
// while (i >= 0) {
//   console.log(i)
//   i--
// }

// Log the even numbers from 0 to 100
// let i = 0
// while (i <= 100) {
//   console.log(i)
//   i += 2
// }

// for loop
// for ( initializer ; expression/condition ; afterthought/iterator) {
// code of that runs while the condition is true
// }

// The break statement breaks out of the entire loop
// and continues on with the program
let letters = 'A'
while (true) {
  letters += 'A' // letters = letters + 'A'
  if (letters.length < 20) break
}
console.log(letters)

// continue terminates the current iteration and moves to the next iteration
// Log out the multiples of 3 to the console
for (let i = 0; i <= 10; i++) {
  if (i % 3 !== 0) continue
  console.log(i)
}

// A do while loop will run once before checking the condition
do {
  console.log('this will run')
} while (false)