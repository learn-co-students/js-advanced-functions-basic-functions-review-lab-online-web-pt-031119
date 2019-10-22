function saturdayFun(activity="roller-skate") {
  return (`This Saturday, I want to ${activity}!`)
}

const mondayWork = (work="go to the office") => {
  return (`This Monday, I will ${work}.`)
}

function wrapAdjective(flair="*") {
  return function(param="special") {
    return (`You are ${flair}${param}${flair}!`)
  }
}

const Calculator = {
  add: function(x, y) {return x + y},
  subtract: function(x, y) {return x - y},
  multiply: function(x,y) {return x * y},
  divide: function(x, y) {return x / y}
}

function actionApplyer(int, array) {
  for (const n of array) {
    int = n(int)
  }
  return int
}
