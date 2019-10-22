// Your code here
function saturdayFun(activity="roller-skate") {
  return(`This Saturday, I want to ${activity}!`);
}

function mondayWork(activity='go to the office'){
  return(`This Monday, I will ${activity}.`);
}

function wrapAdjective(flash='*'){
  return function(word='special'){
    return(`You are ${flash}${word}${flash}!`)
  };
}

const Calculator = {
  add: function(x,y){return x+y},
  subtract: function(x,y){return x-y},
  multiply: function(x,y){return x*y},
  divide: function(x,y){return x/y}
}

function actionApplyer(integer, array){
  if(array.length === 0){
    return integer
  }else{
    var result1 = array[0](integer);
    var result2 = array[1](result1);
    var final = array[2](result2);
    return final
  };
}