/*global require:true */
require('../lib/allthethings.js');

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
	}
};
