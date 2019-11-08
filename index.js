// Your code here

function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

//roller-skate skate is the default 

let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}
// mondayWork is variable that holds an unexuted function(anonymous). 

// (function(baseNumber){ return baseNumber + 3 })(2)
//IIFE: Instantly-Invoked Function Expression
//any variables, functions, Arrays, etc. that are defined inside of the function expression's body can't be seen outside of the IIFE


// function outer(greeting, msg="It's a fine day to learn") {
//   return function(name, lang="Python") {
//     return `${greeting}, ${name}! ${msg} ${lang}`
//   }
// }
 
// outer("Hello")("student", "JavaScript")


let wrapAdjective = function(visual ="*") {
  return function(adjective="special") {
    return `You are ${visual}${adjective}${visual}!`
  }
}

const Calculator = {
  add: function(a,b) {
    return a + b;
  },
  subtract: function(a,b) {
    return a - b
  },
  multiply: function(a,b) {
    return a * b
  },
  divide: function(a,b) {
    return a / b;
  }
}

let actionApplyer = function(start, ray) {
  let a = start

  for (let i = 0; i < ray.length; i++ ){
    a = ray[i](a)
  }

  return a
}
