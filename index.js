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

let actionApplyer = function(startingInteger, array) {
  let a = startingInteger;

  for (let i = 0; i < array.length; i++){
    a = array[i](a)
  }

  return a
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
