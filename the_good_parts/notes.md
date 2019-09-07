STUFF TO RESEARCH ONLINE
========================
* prototype


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
