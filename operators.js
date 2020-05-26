// Equality/Inequality operators
// Double equals () (equality) will compare the two values
// It has a loose idea equality
// because it tries to coerce both sides to similar types
// == !=

2 == 2 // true
2 != 2 // false
2 == '2' // true (because of type coercion)
2 != '2' // false (because of type coercion)

// Strict Equality/Inequality Operator
// triple equals will compare the value and its data type
// because it won't try to coerce different data types

2 === 2 // true
2 !== 2 // false
2 === '2' // false 
2 !== '2' // true 

// Comparison operators
// < > <= >=
5 > 5 // false
5 >= 5 // true