function login(method, ...options) {
  console.log(method)
  console.log(options)
}

login('Facebook', 1, 2, 3, 4)
// ‘Facebook’
// [1, 2, 3, 4]

var arr1 = [4, 5, 6]
var arr2 = [1, 2, 3, ...arr1]
console.log(arr2) //  [1, 2, 3, 4, 5, 6]


var a = 'hello'
typeof(a) // string
a = 1
typeof(a) // number


//block level
{
  let a = 'block'
  {
    console.log(a) // block
  }
}
console.log(a) // a is not defined
