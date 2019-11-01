function saturdayFun(activity="roller-skate") {
	return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
	return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
	return function(phrase) {
		return `You are ${flair}${phrase}${flair}!`
	}
}

let Calculator = {
	add: function add(num1, num2) {
		return num1 + num2
	},
	subtract: function subtract(num1, num2) {
		return num1 - num2
	},
	multiply: function multiply(num1, num2) {
		return num1 * num2
	},
	divide: function divide(num1, num2) {
		return num1 / num2
	}
}

function actionApplyer(starting_num, func_array) {
	if (func_array.length === 0) {
		return starting_num
	} else {
		const reducer = (accumulator, currentFunction) => currentFunction(accumulator)
		return func_array.reduce(reducer, starting_num)
	}
}