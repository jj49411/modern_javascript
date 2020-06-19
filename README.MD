JavaScript

** The use of compiler
- Compile modern JavaScript -> old version
- Use Babel. turn next-gen JavaScript to browser-compatible JS

** Why use strict mode
- Allows to place a programme or a function in a strict operating context. It makes debugging easier
- Throws an error when there’s a syntax error, will not waste lots of time. prevents accidental globals and head scratchy syntax errors
- It doesn’t let us delete functions/ arguments to functions
- eval code not validate (not been read) with strict mode

** Does JS pass parameters by value or by reference?
- Passing primitive types (strings, numbers, booleans) -> by value
- Objects -> by reference

** What is pass by value?
- if change the value of a primitive type inside a function, the changes won’t affect the variable in the outer scope
- it is really passing the copy of the variable (its value)

** What is pass by reference?
- passing something that points to something else
- when change a property of that object from within the function, the change will be reflected in the outer scopes
- we can’t change what a points to -> can only change/add a property of a
```
var a = {}
function boo(a) {
  a.moo = false
}
```

** What is the rest operators?
- The arguments array is not an array
- So should turn arguments to an array by using ->
`Array.prototype.slice.call(arguments, 1) `
- rest operators in ES6 -> `(…args)`. it takes all the parameters into a single array
- it’s the rest of the single element collapsed into an array
- Nothing can exist after it
```
function login(method, …options) {
  console.log(method)
  console.log(options)
}

login(‘Facebook’, 1, 2, 3, 4)
=> ‘Facebook’
[1, 2, 3, 4]
```

** What is the spread operator?
- looks like `…`
- exploding each individual items, concatenate an array all through(inject an array into an array)
- Place it anywhere you want
- Use to copy an array
- Use cases: manipulating arrays, adding, inserting, appending to an array, copying arrays. when pass explode arguments into a function which accepts a variable number of arguments

** rest and spread operators are the same operator
