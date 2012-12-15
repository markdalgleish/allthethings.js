/*global require:true */
var ALLTHETHINGS = require('../lib/allthethings.js');

exports['ALL THE THINGS'] = {
	'forEach': function(test) {
		var total = 0,
			numbers = [1,2,3];

		function incrementTotalWith(number) {
			total += number;
		}

		incrementTotalWith.allThe(numbers);

		test.deepEqual(total, 6);
		test.done();
	},

	'map': function(test) {
		var numbers = [1,2,3];

		function double (number) {
			return number * 2;
		}

		test.deepEqual(double.allThe(numbers), [2,4,6]);
		test.done();
	},

	'filter': function(test) {
		var numbers = [1,2,3,4];

		function filterOddNumbers(number) {
			return number % 2 === 0;
		}

		function isEven(number) {
			return number % 2 === 0;
		}

		test.deepEqual(filterOddNumbers.fromThe(numbers), [2,4]);
		test.deepEqual(isEven.fromThe(numbers), [2,4]);
		test.done();
	},

	'reduce': function(test) {
		var numbers = [1,2,3];

		function reduceTotal(a, b) {
			return a + b;
		}

		function calculateTotal(a, b) {
			return a + b;
		}

		function addTotal(a, b) {
			return a + b;
		}

		test.equal(reduceTotal.fromThe(numbers), 6);
		test.equal(calculateTotal.fromThe(numbers), 6);
		test.equal(addTotal.fromThe(numbers), 6);
		test.done();
	},

	'reduceRight': function(test) {
		var numbers = [1,2,3];

		function reduceRightTest(a, b) {
			return b;
		}

		function calculateRightTest(a, b) {
			return b;
		}

		function addRightTest(a, b) {
			return b;
		}

		test.equal(reduceRightTest.fromThe(numbers), 1);
		test.equal(calculateRightTest.fromThe(numbers), 1);
		test.equal(addRightTest.fromThe(numbers), 1);
		test.done();
	},

	'some': function(test) {
		var numbers = [-1,0,1],
			positiveNumbers = [1,2,3];

		function someNegatives(number) {
			return number < 0;
		}

		function containsNegatives(number) {
			return number < 0;
		}

		function hasNegatives(number) {
			return number < 0;
		}

		test.strictEqual(someNegatives.inThe(numbers), true);
		test.strictEqual(someNegatives.inThe(positiveNumbers), false);

		test.strictEqual(containsNegatives.inThe(numbers), true);
		test.strictEqual(containsNegatives.inThe(positiveNumbers), false);

		test.strictEqual(hasNegatives.inThe(numbers), true);
		test.strictEqual(hasNegatives.inThe(positiveNumbers), false);

		test.done();
	},

	'every': function(test) {
		var numbers = [-1,0,1],
			negativeNumbers = [-1,-2,-3];

		function everyNumberIsNegative(number) {
			return number < 0;
		}

		function allNegatives(number) {
			return number < 0;
		}

		test.strictEqual(everyNumberIsNegative.inThe(negativeNumbers), true);
		test.strictEqual(everyNumberIsNegative.inThe(numbers), false);

		test.strictEqual(allNegatives.inThe(negativeNumbers), true);
		test.strictEqual(allNegatives.inThe(numbers), false);
		
		test.done();
	},

	'custom rules': function(test) {
		ALLTHETHINGS.rules.filter = /foobar/;

		var numbers = [1,2,3,4];

		function foobar(number) {
			return number % 2 === 0;
		}

		test.deepEqual(foobar.fromThe(numbers), [2,4]);
		test.done();
	}
};
