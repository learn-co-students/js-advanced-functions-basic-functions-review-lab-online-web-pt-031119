const saturdayFun = (fun="roller-skate") => {
    return `This Saturday, I want to ${fun}!`
}

 const mondayWork = (work='go to the office') => {
    return `This Monday, I will ${work}.`
}

const wrapAdjective = (flair='*') => {
    return function(param='special') {
        return `You are ${flair}${param}${flair}!`
    }
}

const Calculator = {
    add: function(x, y) {return x + y},
    subtract: function(x, y) {return x - y},
    multiply: function(x,y) {return x * y},
    divide: function(x, y) {return x / y}  
} 

const actionApplyer = (num, array) => {    
    for (const element of array) {
        num = element(num)
    }
    return num  
}





