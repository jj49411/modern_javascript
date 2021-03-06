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

## Scopes&Variables 

** What is a scope?
- The lifetime of a variable. where that variable is visible and available for us to use in the code

** What are the different scopes in JavaScript?
- Global scpoe
- Functional/local scope
- Block level scope - use let or const
```
{
  let a = 'block'
  {
    console.log(a) // block
  }
}
console.log(a) // a is not defined
```
** What is variable hoisting?
- Automatic hoisting of the variable declaration to the top of its enclosing scope
- Functions and variables are hoisted to the top of the page
```
console.log(a)
var a = 1
// is equal to
var a
console.log(a) // undefined
a = 1
```
** What is the scope chain?
- The scope chain is defined by how the code is physically written on the page v.s. how the functions are called
- When looking for a varible, it looks inside its inner scope(eg. a functional scope) and then the outer scope and the outer until it finds the variable
- The variables are resolved in the order in which the code is written

** What is an IIFE?
- Immediately Invoked Funtion Expression
```
(function() {
  var thing = {'hello':'julie'}
  console.log(thing)
})() // wrap an anonymous function with() and use() to execute it immediately  
// this way we prevent the global variables declared inside any of the js files from leaking out into our application global scope
```
```
(function(){
  var a = 3
})()
console.log("a defined? " + (typeof a !== 'undefined')) // a defined false
```

** What are function closures?
- Closures can refer to variables in outer scopes
- Can refer to those variables in outer funtions even after those functions have returned
```
var foo = []
for (var i = 0; i < 10; i++) {
    foo[i] = function() { return i }
}
console.log(foo[0]()) // 10 when we call foo[0]() here this loop has been exhausted and i is then 10
console.log(foo[1]()) // 10
```
- The closure only point to the current value of outer scope vaiables rather the value of the time the closure was created

## Destrcturing&Looping

** What is destrcturing?
- A way of extracting values into variables from data stored in objects or arrays
- Keep destructuring at a minimum, keep it only at one level so it won't be too confusing for others who read the code
```
const obj = {first: 'Julie', last: 'C'}
const {first: Yay, last} = obj
console.log(Yay) // Julie
console.log(last) // C
// so we don't need to declare another variable lile const Yay = obj.first
```
- Function parameter destructuring
```
function f({x=0}) { // set x to default value 0
  console.log(x)
}
f({x:4}) // 4
f({}) // 0
```
** What are the different ways you can loop with 'for'?
1. Standard for loop
```
var array = [1, 3, 5]
for (let i= 0; i<array.length; i++) {
  console.log(array[i]) // 1 3 5
  // we can use continue, break or return in the for loop
}
```
2. ForEach // cannot use continue, break
```
var array = [1, 3, 5]
array.forEach(function(value) {
  console.log(value) // 1 3 5
})
```
3. For-in // looping over the properties of objects
```
var obj = {a:1, b:2}
for (let prop in obj) {
  console.log(prop) // a b
  console.log(typeof(prop)) // string. it's expacting strings
}
```
4. For-of // looping over arrays
```
var array = [1, 3, 5]
for (let value of array) {
  console.log(value) // 1 3 5
  console.log(typeof(value)) // number
}
```
## This

** What does 'this' mean?
- This is determined by the calling context/by the way in which a function is called
- It points to the global window object by default
- But calling within an object, it refers to the object itself
```
var jul = {
  checkThis: function() {
    var self = this // solution for assigning this to self, so we lock down a variable
    console.log(self) // Object{}
    
    function checkOther() {
      console.log(this) // window object{}
    }
  }
}
```

** What do the functions call, bind and apply do?
Stabilising the value of this
- Functions are in fact objects which have the call, bind and apply functions
- Call function
```
"use stict"
function hello() {
  console.log(this) // 'this' is whatever we pass in as parameter on the call function
}
hello.call({}) // Object{}

function a(b, c, d) {
  console.log(this) // the first parameter to the call function is whatever we want 'this' to be
  console.log(b)
  console.log(c)
  console.log(d)
}
a.call(1, 2, 3, 4) // 1 2 3 4

```
- Apply function // use when we want to call a function that takes a variable number of parameters
```
- continue with the code above -
a.apply(1, [2, 3, 4]) // 1 2 3 4
```
- Bind function // at the time we define a function we can lock down what we want this to be
// to bind something directly to the function object that's created
// bind can only be used on functions after they have been created and assigned to a variable
```
var a = function() {
  console.log(this)
}.bind(1) // we bind this to 1
a() // 1 
```

** What is a fat arror function?
- An easier way of writing functions but also stabilising this keyword
```
setTimeout(() => {
  console.log('setTimeout called')
}, 1000)
```
## Object Orientation

** What is the prototype chain?
- The objects in JavaScript are linked to others in a prototype chain. JavaScript tracks the chain when looking for a property and only returns undefined if it can't find the properties from all the objects in the chain
```
var animal = {
  kind: 'human'
}
var jul = {}
jul.__proto__ = animal // link the object jul to the object animal

var human = Object.create(animal) // to create an object and assign a prototype to it
var cat = Object.create(animal, {food: {value: "fish"}} ) // can also pass an object to the second parameter to add a default property. passing in an object that describes the property, not to use as the properties
```

** What is the Constructor OO pattern?
```
// call an instance on Person constructor
var dude = new Person('fist', 'last')
```
- Objects have a `__proto__` property/ Functions have a `prototype` property that points to an object `{}` which has a constructor property that points to Person itself and a `__proto__` property that points to another object and another object
- When we create multiple instances, they all share the same prototype and the function we added on prototype

```
function Person(first_name, last_name) {
  this.first_name = first_name
  this.last_name = last_name
}
Person.prototype.full_name_prototype => {
  return this.first_name + this.last_name
}
```
```
Professional.prototype = Object.create(Person.prototype)
```
- Replace the existing prototype object on the professional function with `Object.create`.
- `Object.create(Person.prototype)` creates an object whose `__proto__` points to the object passed in as the first parameter

** How do you do object orientation on ES6/how do you use the class and extends keywords?
- A **class** is a blueprint/instruction for creating an object
```
class Person{
  constructor(firstName, lastName) {
    this._firstName =  firstName
    this._lastName = lastName
  }
  fullName() {
    return `${this._firstName} ${this._lastName}`
  }
  whoAreYou() {
    return `Hi i'm ${this.fullName()}`
  }
}
let julie = new Person('julie', 'c')
```
- Inheritance: `extends` is used when creating a new blueprint which contains everything that the existing blueprint has plus other features/functionality
```
class Student extends Person {
  constructor(firstName, lastName, course) {
    super(firstName, lastName) // super calls the constructor of Person
    this.course = course
  }
  hello() {
    return `${super.whoAreYou()} and i'm studying ${this.course}` // use super to call whoAreYou() of Person class
  }
}
let julie = new Student('julie', 'c', 'javascript')
```



