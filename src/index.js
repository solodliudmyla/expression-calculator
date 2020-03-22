function expressionCalculator(expr) {
	if (/\/ 0/.test(expr)) {
		throw new Error('TypeError: Division by zero.');
	}
	let bracketsLeft = expr.split('').filter(x => x === '(').join('');
	let bracketsRight = expr.split('').filter(x => x === ')').join('');
	if (bracketsLeft.length !== bracketsRight.length) {
		throw new Error('ExpressionError: Brackets must be paired')
	}
	let calculator = new Function("return " + expr);
	return calculator();
}

module.exports = {
	expressionCalculator
};