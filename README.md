[![Build Status](https://secure.travis-ci.org/markdalgleish/allthethings.js.png)](http://travis-ci.org/markdalgleish/allthethings.js)

# ALLTHETHINGS.JS

![ALLTHETHINGS.JS](https://raw.github.com/markdalgleish/allthethings.js/master/img/logo.png)

### Let your array iterations read like actual sentences:

``` js
var things = ['all', 'the', 'things'];

function log(thing) {
	console.log(thing);
}

log.allThe(things);
```

For no extra cost, you also get the 'fromThe' and 'inThe' aliases, for your grammatical needs:

``` js
var proHackers = filterNoobs.fromThe(hackers);
```

``` js
containsProHackers.inThe(hackers); // true
```

And all for less than 1KB, with no dependencies*. Delicious.

*Unless your browser is an antique. Then you need [es5-shim](https://github.com/kriskowal/es5-shim).

ALLTHETHINGS.JS allows you to *sentencify* the following array methods:

 - [forEach](#foreach--map)
 - [map](#foreach--map)
 - [filter](#filter)
 - [reduce](#reduce--reduceright)
 - [reduceRight](#reduce--reduceright)
 - [some](#some)
 - [every](#every)

### Gimme gimme

#### Node.js

Install with: `npm install allthethings`

```javascript
require('allthethings');
```

#### Browser

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/markdalgleish/allthethings.js/master/dist/allthethings.min.js
[max]: https://raw.github.com/markdalgleish/allthethings.js/master/dist/allthethings.js

## forEach / map

By default, 'allThe' performs a [*map*](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/map) on the array, which doubles as a [*forEach*](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/forEach):

### forEach

```js
var things = ['all', 'the', 'things'];

function log(thing) {
	console.log(thing);
}

log.allThe(things);
```

### map

```js
var numbers = [1,2,3];

function triple(number) {
	return number * 3;
}

var multiplesOfThree = triple.allThe(numbers); // [3,6,9]
```

## filter

If your named function starts with 'filter' or 'is', then a [*filter*](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/filter) is performed.

When filtering, it's idiomatic to use 'fromThe' instead of 'allThe':

```js
var numbers = [-2,-1,0,1,2];

function filterNegatives(number) {
	return number >= 0;
}

filterNegatives.fromThe(numbers); // [0,1,2]
```

```js
var numbers = [-2,-1,0,1,2];

function isPositive(number) {
	return number > 0;
}

isPositive.fromThe(numbers); // [1,2]
```

## reduce / reduceRight

If your named function starts with 'reduce', 'calculate' or 'add', then a [*reduce*](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/Reduce) is performed.

If you add 'Right' to any of these, then a [*reduceRight*](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/ReduceRight) is performed instead.

When reducing, it's idiomatic to use 'fromThe' instead of 'allThe':

Given the 'numbers' array:

``` js
var numbers = [1,2,3];
```

Any of these will work identically:

```js
function reduceTotal(a, b) {
	return a + b;
}

var total = reduceTotal.fromThe(numbers); // 6
```

```js
function calculateTotal(a, b) {
	return a + b;
}

var total = calculateTotal.fromThe(numbers); // 6
```

```js
function addTotal(a, b) {
	return a + b;
}

var total = addTotal.fromThe(numbers); // 6
```

## some

If your named function starts with 'some', 'contains' or 'has', then a [*some*](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/some) is performed.

When using 'some', it's idiomatic to use 'inThe' instead of 'allThe':

```js
var numbers = [-2,-1,0,1,2];

function someNegatives(number) {
	return number < 0;
}

someNegatives.inThe(numbers); // true
```

```js
var numbers = [-2,-1,0,1,2];

function containsNegatives(number) {
	return number < 0;
}

containsNegatives.inThe(numbers); // true
```

```js
var numbers = [-2,-1,0,1,2];

function hasNegatives(number) {
	return number < 0;
}

hasNegatives.inThe(numbers); // true
```

## every

If your named function starts with 'every' or 'all', then an [*every*](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/every) is performed.

When using 'every', it's idiomatic to use 'inThe' instead of 'allThe':

```js
var numbers = [1,2,3,4,5];

function everyNumberIsPositive(number) {
	return number > 0;
}

everyNumberIsPositive.inThe(numbers); // true
```

```js
var numbers = [1,2,3,4,5];

function allPositive(number) {
	return number > 0;
}

allPositive.inThe(numbers); // true
```

## Elite hacker tips

### Aliased functions

Assign a named function expression to a variable of a different name:

``` js
var things = [false, true, false];

var myAliasedFunction = function filter(thing) {
	return thing === true;
};

myAliasedFunction.allThe(things); // [true]
```

### Custom function name rules

You can create new rules or override existing ones:

#### In Node.js

``` js
var allthethings = require('allthethings');

allthethings.rules.filter = /foobar/;
```

#### In the browser

``` js
window.allthethings.rules.filter = /foobar/;
```

#### Which allows:

``` js
var numbers = [1,2,3,4];

function foobar(number) {
	return number % 2 === 0;
}

// This now performs a filter:
foobar.allThe(numbers); // [2,4]
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](http://gruntjs.com/).

## License
Copyright (c) 2012 Mark Dalgleish  
Licensed under the MIT license.
