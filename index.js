// Your code here


function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
};

let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
};

function wrapAdjective(emphasis="*") {
  return function(status="special") {
    return `You are ${emphasis}${status}${emphasis}!`
  };
  let encouragingPromptFunction = wrapAdjective(emphasis="!!!");
};

let Calculator = {
  add : function(){ return 1+3 },

  subtract : function(){ return 1-3 },

  multiply : function(){ return 1*3 },

  divide : function(){ return 10/5 } //
  // function subtract(){
  //   return 1-3
  // };
};

function actionApplyer(startingInteger, arrayOfFunctions) {
  if (arrayOfFunctions = []) {
    return startingInteger
  } else {
    let arrayOfFunctions = [
      (function(){ return 13 * 2})
      (function(){ return 13 + 1000})
      (function(startingInteger){ return 13 % 7})
    ]
    return actionApplyer(13, arrayOfFunctions);
  }
};


// function demoChain(name) {
//   let part1 = 'hi'
//   return function() {
//     let part2 = 'there'
//     return function() { // Innermost
//       console.log(`${part1.toUpperCase()} ${part2} ${name}`);
//     }
//   }
// }
