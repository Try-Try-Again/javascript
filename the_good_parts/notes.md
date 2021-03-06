STUFF TO RESEARCH ONLINE
========================
* prototype
* languages that use prototypal inheritance (the right way)


SIDENOTES:
==========
You should always use const insteand of let or other declarations if you're sure you don't need
mutability


COMMENTS
========

block comments are not safe for commenting out blocks of code XD

```
/*
	var rm_a = /a*/.match(s);
*/		   //^ this shit dont work lol
```
use // comments exclusively


WORDS
=====

You cant use the following as words:
* else
* enum
* export
* extends
* false
* final
* finally
* float
* for
* function
* goto
* if
* implements
* import
* in
* instanceof
* int
* interface
* long
* native
* new
* null
* package
* private
* protected
* public
* return
* short
* static
* super
* switch
* synchronized
* this
* throw
* throws
* transient
* true
* try
* typeof
* var
* volitile
* void
* while
* with

don't use 'undefined', 'NaN', or Infinity either

it seems that you cant use these words for what we call methods, or attributes either :/

names must start with a letter and can only contain letters, digits, or underbars


NUMBERS
=======

ints must start with any digit besides 0 and only contain digits after that

fraction start with a '.'

you can do exponents by starting the number with an 'e' or an 'E',
after which, you can state an negative number with a '-' and the the digit like this:

1e-2 (-100)
1e2 (100)

negative numbers are prefixed with '-'

NaN represents a number that is the result of an operation that cannot produce a normal result.'
NaN is not equal to any value - not even itself.

you can detect a NaN with isNaN(number) function

Infinity represents all values greater than 1.79769313486231570e+308

Numbers have methods that act on the numbers. For example:
Math.floor(number) converts a number into an int

STRINGS
=======

String literals can be wrapped in single quotes or double quotes.
'\' is the escape character
You can represent a single character by making a string with 1 character

escaped characters:
* " (double quote)
* ' (single quote)
* \ (backslash)
* / (slash)
* b (backspace)
* f (formfeed)
* n (newline)
* r (carriage return)
* t (tab)
* u (4 hex digits)

the \u allows to specify a character numerically like this:
"\u0041" (represents an "A")

strings have a length property:
"seven".length returns a 5

two strings with the same characters in the same order are considered to be the same string:
'c' + 'a' + 't' === 'cat'

strings have methods too:
'cat'.toUpperCase() === 'CAT'


STATEMENTS
==========

You can declare a var statement like this:
`var name = expression ;`

When inside a function, the var statement defines the function's private variables

statements can be prefixed with a label ie. `name:`

types of statements:
* expression
* disruptive
* try
* if
* switch
* while
* for
* do

disruptive statements:
* break
* return
* throw

you can put statements in blocks to describe lexical scope but putting statements between '{' and '}'

if-statements look like this:
```
if ( expression ) { block } else { block };
```

falsy values:
* false
* null
* undefined
* '' (an empty string
* 0 (zero)
* NaN

All other values are truthy - including true, the string 'false', and all objects

switch statements perform a multiway branch. think of it like an if elif? (we'll understand more later)

while loops are self explainitory

for statements are self explainitory

to check if an object has a property, use `object.hasOwnProperty(myvar)`

do while statements do something at least once and then check to see if something

try catch is JS's version of try accept

throw raises an exception

return acts like python's return

break acts like python's break


EXPRESSIONS
===========

Operator Precedence:
1. . [] () (refinement and invocation)
1. delete new typeof + - ! (Unary operators)
1. * / % (Muitplication, division, modulo)
1. + - (Addition/concatenation, subtraction)
1. >= <= > < (Inequality)
1. === !== (Equality)
1. && (Logical and)
1. || (Logical or)
1. ?: (Ternary)


OBJECT LITERALS
===============

objects are declared just like dictionarys are in python:

```
var empty_object = {};

var stooge = {
	"first-name": "Jerome",
	"last-name": "Howard"
};
```
an objects property can be named wit any string - including an empty string
you dont need quotes if you keyword syntax (letters, numbers, underscores)
but you would need quotes it you used a dash in your property name.

objects can nest:
```
var flight = {
	airline: "Oceanic",
	number: 815
	departure: {
		IATA: "SYD",
		time: "2004-09-22 14:55",
		city: "Sydney"
	},
	arrival: {
		IATA: "LAX",
		time: "2004-09-23 10:42",
		city: "Los Angeles"
	}
};
```


RETRIEVAL
=========

You can retrieve an value from an objects by wrapping a string expression in a [] or using . notation:

```
stooge["first-name"]	//"Joe"
flight.departure.IATA   // "SYD"

```

if you try to return a nonexistent value, you'll get undefined as a return value:
```
stooge["middle-name"]   //undefined
flight.status 	        //undefined
stooge["FIRST-NAME"]    //undefined
```

you can fill in default values like this:

```
var middle = stooge["middle-name"] || "(none)";
var status = flight.status || "unknown";
```

Attempting to retrieve values from undefined will throw a TypeError
this can be guarded against with the && operator

```
flight.equipment				//undefined
flight.equipment.model  			//throw "TypeError"
flight.equipment && flight.equipment.model 	//undefined
```

UPDATE
======

values can be updated by assignment. if the property name already exists, it will be overwritten:
```
stooge['first-name'] = "Jerome";
```

if the object does not already have that property name, the object is augemented:
```
stooge['middle-name'] = 'Lester';
stooge.nickname = 'Curly';
flight.equipment = {
	model: 'Boeng 777'
};
flight.status = 'overdue';
```

REFERENCE
=========
Objects are passed around by reference. They are never copied:

var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname;
	//nick is 'Curley' because x and stooge
	//are reference to the same object

var a = {}, b = {}, c = {};
	//a, b, and c each refer to a
	//different empty object
a = b = c = {};
	//a, b and c all refer to
	//the same empty object

PROTOTYPE
=========

Every object is linked to a prototype object from which it can inherit properties:
```
Object.prototype
```
prototypes are like classes but they are not the same thing - they are really messy!
In the book there is an example of adding a create method to the Object function.
The create method creates a new object that uses an old object as its prototyp. :|

```
if (typeof Object.create !== 'function'){
	Object.create = function (o) {
		var F = function () {};
		F.prototype = o;
		return new F();
	};
	}
	var another_stooge = Object.create(stooge);
```
The prototype link has no effect on updating. When we make changes to an object
the objects prototype is not touched:
```
another_stooge['first-name'] = 'Harry';
another_stooge['middle-name'] = 'Moses';
another_stooge.nickname = 'Moe';
```
protype is only used on retrieval. If an object doesnt have a referenced property,
it will be looked up in the prototype first before resorting to 'undefined'

protype can be updated after the fact and all objects linked to that protype are
updated as well

(this is sounding increasingly more like python style classes but i dont know)

REFLECTION
==========

You can return the 'type' of an object with typeof:
```
typeof flight.number	//'number'
typeof flight.status	//'string'
typeof flight.arrival	//'object'
typeof flight.manifest	//'undefined'
```
be careful - any property on the prototype chain can produce a value:
typeof flight.toString		//'function'
typeof flight.constructor	//'function'

you can deal with these 'undesired' properties a couple of ways.
Firstly, you can have your program look for and reject function values.

another way is to use the 'hasOwnProperty' method. It returns true if the object
has a particular property. hasOwnProperty does not look at the prototype chain:
```
flight.hasOwnProperty('number')		// true
flight.hasOwnProperty('constructor') 	// false
```

ENUMERATION
===========

you can loop over all the property names in an object while skipping the values you
dont want with 'hasOwnProperty':

```
var name;
for (name in another_stooge) {
	if (typeof another_stooge[name] !== 'function' {
		document.writeln(name + ': ' + another_stooge[name]);
	}
}
```
note that the order of these names will be looped through in a random order
impossible to predict. If you need to have a guarenteed order, its a good idea to
add an array of the names of your properties in the correct order:

```
var i;
var properties = [
	'first-name',
	'middle-name',
	'last-name',
	'profession'
];
for (i = 0; i < properties.length; i += 1) {
	document.writeln(properties[i] + ': ' +
		another_stooge[properties[i]]);
}
```

You can delete a property of an object with 'delete'. It removes the property
from an object, but it doesnt touch the other objects that in the prototype linkage:

```
another_stooge.nickname		// 'Moe'

// Remove the nickname from another_stooge, revealing
// the nickname of the prototype

delete another_stooge.nickname;
another_stooge.nickname		// 'Curly'
```

GLOBAL ABATEMENT
================

globals variables are easy to define in javascript, but it causes a lot of problems
you can minimize the problems by using 1 big global variable:

```
MYAPP.stooge = {
	"first-name": "Joe",
	"last-name": "Howard"
};
MYAPP.flight = {
	airline: "Oceanic",
	number: 815
	departure: {
		IATA: "SYD",
		time: "2004-09-22 14:55",
		city: "Sydney"
	},
	arrival: {
		IATA: "LAX",
		time: "2004-09-23 10:42",
		city: "Los Angeles"
	}
};
```

FUNCTION OBJECTS
================

In javascript all functions are objects.
An object is a collection of name/value pairs that have a hidden link to
Object.prototype.

Functions are linked to Function.prototype which is in turn linked to
Object.prototype.

every function is also created with a prototype property. It's value is an
object with a contructory property whose value is the function? :| wtf

FUNCTION LITERAL
================

Function objects are created with funciton literals:
```
// Create a variable called add and store a function
// in it that adds two numbers

var add = function (a, b) {
		//  ^ args go in here
	return a + b;
	//what you want to happen goes in the curly brackets
};
```

a function literal has 4 parts:
1. the word 'function'
1. an optional name
1. the arguements inside parenthesis
1. the body of the function inside curly brackets

if a function does not have the optional name, it is considered anonymous

just like lisp, functions in javascript can reference objects inside the object where
they are nested (closures)

INVOCATION
==========

Man this is cool. all our language design stuff is paying off :D
so just like in our lisp mental model, when a function is called, it suspends the
what ever higher level process that called the function. it creates a new
'environment' for the new function to do its business.

two additional parameters are passed into a function when it's called:
* this
* arguments

I think 'this' is like self in python but we'll see
'this' is dependant on the 'invocation pattern'

There a 4 different invocation patterns:
1. method
1. function
1. constructor
1. apply

these determine how 'this' is initialized

You don't get a runtime error if you give to many arguements - the extra ones
are ignored and if there are too few arguments, the remaining will be undefined XD

there is no arguement type checking

THE METHOD INVOCATION PATTERN
=============================

A function which is stored as a property of an object is called a method.

when a method is invoked, 'this' is bound to that object

```
// Create myObject. It has a value and an increment
// method. The increment method takes an optional
// parameter. If the arguement is not a number, then 1
// is used as the default.

var myObject = {
	value: 0,
	increment: function (inc) {
		this.value += typeof inc === 'number' ? inc : 1;
		// this looks like a way to set a default arg value
	}
};

myObject.increment();
document.writeln(myObject.value);	//1

myObject.increment(2);
document.writeln(myObject.value);	//3
```

I'm starting to realize that objects are somewhere between a python dict and
a class. they have a 'this' in place of 'self' like a class but the syntax
uses '{'s and ':'s just like a python dict

methods that get their object context from 'this' are called 'public methods'

THE FUNCTION INVOCATION PATTERN
===============================

when a function is not the property of an object, then it is invoked as a function.

```
var sum = add(3,4); // sum is 7
```

When a function is invoked in this way, 'this' is bound to the global object (bad)
Instead, they should have made it so that when the inner function is invoked, 'this'
would still be bound to the 'this' variable of the outer function.

This means that an inner function can use 'this' correctly - even if it's called
inside a method - all of which have a perfectly good 'this' to reference.

The workaround is to use a agreed convention called 'that' :P

```
// Augment myObject with a double method.

myObject.double = function () {
	var that = this;	// Workaround.

	var helper = function () {
		that.value = add(that.value, that.value);
	};

	helper();	// Invoke helper as a function.
};

// Invoke double as a method.

myObject.double();
document.writeln(myObject.getValue());		//6
```

THE CONSTRUCTOR INVOCATION PATTERN
==================================

javascript is a 'prototypal inheritance language' That means that objects can inherit
properties directly from other object. the language is CLASS FREE

javascript isnt 'classical' but it's syntax is designed to make classical programmers
happy - which was a stupid move.

If a function is invoked with the new prefix, then a new object will be created with
a hidden link to the value of the functions prototype memeber :/

new also changes the behavior of the return statement.

```
// Create a contructor function called Quo.
// It makes an object with a status property.

var Quo = function (string) {
	this.status = string;
};

// Give all instances of Quo a public method
// called get_status.

Quo.prototype.get_status = function () {
	return this.status;
};

// Make an instance of Quo.

var myQuo = new Quo("confused");

document.writeln(myQuo.get_status());	// confused
```
functions that are intended to be used with the new prefix are called constructors

It is convention to keep constructors in variables with a capitalized name.

Be careful to only call constructors with the 'new' prefix. otherwise, you're gonna
have a bad time :D

you really shouldnt be fucking with constructors like this. later on we'll
show the right way to do constructors

THE APPLY INVOCATION PATTERN
============================

functions can have methods :|

The apply method lets us construct an array of arguments to use to invoke a function.
It also lets us choose the value of this. The 'apply' method makes two parameters.
The first is the value that should be bound to this. The second is an array of parameters.

```
// Make an array of 2 numbers and add them.

var array = [3, 4];
var sum = add.apply(null, array);	// sum is 7

// Make an object with a status member.

var statusObject = {
	status: 'A-OK'
};

// statusObject does not inherit from Quo.prototype,
// but we can invoke the get_status method on
// statusObject even though statusObject does not have
// a get_status method.

var status = Quo.prototype.get_status.apply(statusObject);
	// status is 'A-OK'
```
continued at page 31
