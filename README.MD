# JavaScript

## Basics

** The use of compiler
- Compile modern JavaScript -> old version
- Use Babel. turn next-gen JavaScript to browser-compatible JS

** Why use strict mode
- Allows to place a programme or a function in a strict operating context. It makes debugging easier
- Throws an error when there’s a syntax error, will not waste lots of time. prevents accidental globals and head scratchy syntax errors
- It doesn’t let us delete functions/ arguments to functions
- Eval code not validate (not been read) with strict mode

** Does JS pass parameters by value or by reference?
- Passing primitive types (strings, numbers, booleans) -> by value
- Objects -> by reference

** What is pass by value?
- If change the value of a primitive type inside a function, the changes won’t affect the variable in the outer scope
- It is really passing the copy of the variable (its value)

** What is pass by reference?
- Passing something that points to something else
- When change a property of that object from within the function, the change will be reflected in the outer scopes
- We can’t change what a points to -> can only change/add a property of a
```
var a = {}
function boo(a) {
  a.moo = false
}
```

** What is the rest operators?
- Looks like `(...args)`
- The arguments array (ex. `login(1, 2, 3, 4)`) is not an array. `arguments.slice(1)` would fail
- So should turn arguments to an array by using ->
`Array.prototype.slice.call(arguments, 1) `
- Rest operators in ES6 -> `(…args)`. it takes all the parameters into a single array
- It’s the rest of the single element collapsed into an array
- Nothing can exist after it
```
function login(method, …options) {
  console.log(method)
  console.log(options)
}

login(‘Facebook’, 1, 2, 3, 4)
// ‘Facebook’
// [1, 2, 3, 4]
```

** What is the spread operator?
- Looks like `…`
- Exploding each individual items, concatenate an array all through(inject an array into an array)
- Place it anywhere you want
- Use to copy an array
- Use cases: manipulating arrays, adding, inserting, appending to an array, copying arrays. when pass explode arguments into a function which accepts a variable number of arguments
```
var arr1 = [4, 5, 6]
var arr2 = [1, 2, 3, ...arr1]
console.log(arr2) //  [1, 2, 3, 4, 5, 6]
```

** Rest and spread operators are the same operator

** What are template strings?
- Multi lines operator: back tick ``
- `${name}`. We can put not only a variable in {} but an expression like `${isBold ? "<b>JJ</b>" : "JJ"}`
```
Template tags: h1`hello` // <h1>hello</h1>
```

## Types&Equality

** What’s the difference between a dynamically typed language like JavaScript and a statically typed language like Java?
```
In Java: 
String a = 'hello'
a = 1 // Error

In JS:
var a = 'hello'
typeof(a) // string
a = 1
typeof(a) // number
```
- With JavaScript the type of variables are determined dynamically at run time, when we actually run the application; whereas in Java, variable types are determined statically when we write the code

** What’s the difference between == and ===?
- Equality `==` only checks values
- Strict Equality `===` checks both values and types
