(function(exports) {

	var rules = {
			reduce: /^(reduce|add|calculate)/,
			filter: /^(filter|is)/,
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

}(typeof exports === 'object' && exports || (this.allthethings = {})));
