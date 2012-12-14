/*! allthethings v0.0.1-alpha-3
 *  https://github.com/markdalgleish/allthethings.js
 *  Copyright (c) 2012 Mark Dalgleish; Licensed MIT */

(function(exports) {

	var rules = {
			reduce: /^(reduce|add|calculate)/,
			filter: /^(filter|is)/
		},

		resolveFunc = function(caller, things) {
			var cachedFuncKey = '_allthethings_func';
			return caller[cachedFuncKey] || (caller[cachedFuncKey] =
				things[Object.keys(rules).reduce(function(prevKey, key) {
					return rules[key].test(caller.name) ? key : prevKey;
				}, 'map')]
			);
		};

	Function.prototype.allThe = Function.prototype.fromThe = function(things) {
		return resolveFunc(this, things).call(things, this);
	};

	exports.rules = rules;

}(typeof exports === 'object' && exports || (this.allthethings = {})));
