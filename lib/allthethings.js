(function(exports) {

	exports.allTheThings = Function.prototype.allThe = Function.prototype.fromThe = function(things) {
			this._allTheThings_func = this._allTheThings_func || (/^reduce|add|calculate/).test(this.name) ? things.reduce : (/^(filter|is)/).test(this.name) ? things.filter : things.map;
			return this._allTheThings_func.call(things, this);
	};

}(typeof exports === 'object' && exports || this));
