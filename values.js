// NUMBERS
1
5.123141341
  -
  71.231241
Infinity
NaN

3 + 2 // 5
10 ** 3 // 1000
9 % 2 // 1
Number('123') // 123

// STRINGS
"This uses doubles quotes"
'This uses single quotes'
`This uses backticks`

// Concat strings
'Hello' + ' World' // 'Hello World
99 + ' bottles' // '99 bottles'
// If '+' is operated on a number and a string, it'll coerce the number to a string first before concatenating

// newline
'You are on a \n new line'
// 'You are on a
// new line'

// We can interpolate with backticks
`${1 + 1 + 1} rings... ` // '3 rings... '

// Only backticks can be used for multiline strings
`
  Backtick
  multiline
  string
`

// parse a string into a number
parseInt("10", 10) // 10
parseInt("10abc", 10) // 10
parseInt("10.1232", 10) // 10
parseFloat("10.1232", 10) // 10.1232

// Booleans
true
false
