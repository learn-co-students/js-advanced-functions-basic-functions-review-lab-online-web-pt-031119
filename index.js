function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(visualFlair='*') {
    return function(arg='special') {
        return `You are ${visualFlair}${arg}${visualFlair}!`
    }
}

const Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
}

// arrayOfTransforms = [
//     function(a){ return a * 2 },
//     function(a){ return a + 1000},
//     function(a){ return a % 7 }
//   ]

let actionApplyer = function(int, arr) {
    if (arr.length === 0) {
        return int
    } else {
        let value = int
        arr.forEach(fn => value = fn(value))
        return value
    }
}

