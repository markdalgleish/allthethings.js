(function(exports) {

	var rules = {
			filter: /^(filter|is)/,
			reduce: /^(reduce|add|calculate)/,
			reduceRight: /^(reduce|add|calculate)Right/,
			some: /^(some|contains|has)/,
			every: /^(every|all)/
		},
		cachedFuncKey = '_allthethings_func',
		cacheMetaData = '_allthethings_cachemetadata',
		defaultFunc = 'map',

		resolveFunc = function(caller, things) {
			if (!!caller[cachedFuncKey]) {
				if ((caller[cacheMetaData].defaultTaken && generateRegExpHash(rules) !== caller[cacheMetaData].meta) || 
					(!caller[cacheMetaData].defaultTaken && rules[functionName(caller[cachedFuncKey])] !== caller[cacheMetaData].meta)) {
					generateCache(caller, things);
				}
			} else {
				generateCache(caller, things);
			}
			return caller[cachedFuncKey];
		},

		allthethings = function(things) {
			return resolveFunc(this, things).call(things, this);
		},

		functionName = function(fun) {
			var ret;
			return ret = fun.toString().substr('function '.length), ret.substr(0, ret.indexOf('('));
		},

		generateCache = function(caller, things) {
			caller[cacheMetaData] = {
				defaultTaken: true,
				meta: generateRegExpHash(rules) //If default, any change in the rule would trigger a re-cache
			};
			caller[cachedFuncKey] =
				things[Object.keys(rules).reduce(function(prevKey, key) {
					return rules[key].test(functionName(caller)) ? (caller[cacheMetaData].defaultTaken = false, caller[cacheMetaData].meta = rules[key], key) : prevKey;
				}, defaultFunc)];
		},
		
		generateRegExpHash = function(obj) {
			var toRet = '';
			for(var i in obj) {
				toRet += obj[i].toString();
			}
			return toRet;
		};

	['allThe', 'fromThe', 'inThe'].forEach(function(alias) {
		Function.prototype[alias] = allthethings;
	});

	exports.rules = rules;

}(typeof exports === 'object' && exports || (this.allthethings = {})));
