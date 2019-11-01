// Your code here
function saturdayFun(activity = "roller-skate"){
return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*"){
    return function (parameter = "special") {
        return `You are ${flair}${parameter}${flair}!`
    }
}

let Calculator = {add(){
 return 1 + 3
}, subtract(){
  return 1 - 3
}, multiply(){
  return 1 * 3
}, divide(){
  return 10 / 5
}}

function actionApplyer(integer, array){
if (array === undefined || array.length == 0){
  return integer
} else{
  integer = integer * 2
  integer += 1000
  return integer % 7
}
}