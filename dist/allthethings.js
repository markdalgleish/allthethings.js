/*! allthethings v0.0.1-alpha-7
 *  https://github.com/markdalgleish/allthethings.js
 *  Copyright (c) 2012 Mark Dalgleish; Licensed MIT */

(function(exports) {

	var rules = {
			filter: /^(filter|is)/,
			reduce: /^(reduce|add|calculate)/,
			reduceRight: /^(reduce|add|calculate)Right/,
			some: /^(some|contains|has)/,
			every: /^(every|all)/
		},

		resolveFunc = function(caller, things) {
			var cachedFuncKey = '_allthethings_func';
			return caller[cachedFuncKey] || (caller[cachedFuncKey] =
				things[Object.keys(rules).reduce(function(prevKey, key) {
					return rules[key].test(caller.name) ? key : prevKey;
				}, 'map')]
			);
		},

		allthethings = function(things) {
			return resolveFunc(this, things).call(things, this);
		};

	['allThe', 'fromThe', 'inThe'].forEach(function(alias) {
		Function.prototype[alias] = allthethings;
	});

	exports.rules = rules;

}(typeof exports === 'object' && exports || (this.ALLTHETHINGS = {})));
