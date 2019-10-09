LEARN MORE
==========

read more setting up optional arguments that depend on a conditional statment (?)

check out how those 3 challenges were solved and take notes on the math methods
used


'%' does the same thing that it does in python (modulo)

strings work just like in python

you cant put a newline in between strings

escape characters work like in python

not is written with '!' symbol

'?' is the conditional operator.

```
console.log(true ? 1 : 2);
// 1
console.log(false ? 1 : 2);
// 2
```
true returns the first value (in front of ':')
false returns the second value (after the ':')

if you want to check if something has a real value instead of null or undefined,
you can compare it with null with the == or != operators

when you don't want any automatic type conversions, you use === and !==

|| returns value to the left if that value is true, otherwise it returns the value
to the right

remember to declare your variables with var inside functions - otherwise you'll reassign a global var

you can start a statement with 'function' just like 'def' in python

dont define functions inside functions - try to keep functions global

If you have to define them only on the outermost program

pro-tip:
	How difficult it is to find a good name for a function is a good indicaton of how clear
	a concept it is that you're trying to wrap.


the thing to know about recursion is that you can make large branching decision trees very little code
It's never faster than imperative programming?

Functions can be divided into two groups: those that are called for their return value and those that are
called for side effects.

side effects are basically anything a function can do besides return a value

a function can have both return values and side effects

a pure function only uses arguments, no global variables, etc. and only has return values - no side effects

pure functions are the easiest to write tests for, but they might not be the easiest route so solving your
problem.


LISTS
=====

lists seem to work just like the ones in python

you can refer to a specific position in a list just like in

PROPERTIES
==========

When using a dot, the part after the dot must be a valid variable name,
and it directly names the property. When using square brackets, the
expression between the brackets is evaluated to get the property name.

(think of it like a list comprehension but just for the value you're
referencing)

you can also reference the array with strings that cannot be variable names
such as '0' or "John Doe"

properties whose names arent valid binding names or valid numbers have to be
quoted

METHODS
=======

pro tip:
```
console.log(typeof foo.toUpperCase);
// function
// typeof has a funny way of being called
```

.push() and .pop() work on arrays just like lists with python

OBJECTS
=======

braces have two meanings in javascript.
At the start of the statement, they start a block of statements.

In any other position, they describe an object.

'in' returns a boolean if an object has a keyword matching the prefix argument
```
console.log("right" in anObject);
// false
```

you can get a list of keys with Object.keys:
```
console.log(Object.keys({x: 0, y: 0, z: 2}));
// ["x", "y", "z"]
```
objects have an 'identity':
```
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
// true
console.log(object1 == object3);
// false

object.value = 15;
console.log(object2.value);
// 15
console.log(object3.value);
// 10
```

PHI COEFFICIENT
===============

our phi function return the phi coefficient to measure correlation.
the formula is written out on page 67

ARRAY LOOPS
===========

there is a simpler way to write loops:
```
for (let entry of JOURNAL) {
	console.log(`{entry.events.length} events.`);
}
```

FURTHER ARRAYOLOGY
==================

array.shift is like pop but from the front

array.unshift is like push but to the front

array.indexOf() gets the location of the first element that matches the argument

array.lastIndexOf() gets the location of the last element that matches the argument

both indexOf and lastIndexOf can take an optional argument to pick where in the list to start from

array.slice() takes all of the elements after the start of the index

array.concat() concatinates two lists together

if you try to add an attribute to a string, number, or boolean variable, javascript wont complain,
but nothing will happen because you gotta assign attibutes of objects

strings do have methods like arrays tho, you can do .slice(), .indexOf(), etc

the string.indexOf() can take a string arg of multiple characters so you can find words in strings

string.trim() removes whitespace from a string

string.padStart adds "padding" to the begining of a string (only works in the example so
figure this out later)

seems like split and join are both similar to python

string.repeat(n) repeats a string n amount of times

since strings are just fancy arrays, you can address characters in string just like you do in a list
```
let string = "abc";
console.log(string[1]);
// b
```

for python style args we use '...'
```
function max(...numbers) {
// etc...
```
this is caled a rest parameter in javascript

you can call functions with rest parameters too

```
console.log(max(...numbers));
```

calling a function with an array as a rest parameter 'spreads' the contents of the array
over as indivitual arguments. like args & kwargs in python, this probably need to be put at the end
of the arguments

A LIST
======

lists are different in javascript! but they exist! :O


```
let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value 3,
      rest: null
    }
  }
};
```
not sure whats up with .pop() didnt work in the for loop as a list time.
intead we use a loop that counted down to iterate through the array from back to front
we should try that when ever pop doesnt behave right :/

BACKTICK STRINGS
================

backtick strings have added functionality.

one extra thing they can do is formating like in python:

```
var foo = "World";
console.log(`Hello, ${foo}`);
// Hello, World
```

ARROW FUNCTIONS
===============

arrow functions either take 1 naked arg:
```
i => {
	// your function here
}
```

... or a group in parenthesis:
```
(base, exponenet) => {
	// your function here
}
```

ON FOR LOOPS AND ARROW FUNCTIONS:
=================================

the 'i' (incrementer) in a for loop can be used

when a function is passed as an argument, the function will lookup variables
from where ever it was passed into...? :/

DOUBLE PARENTHESIS
==================

you'll sometimes find something like this:
```
noisy(Math.min)(3, 2, 1);
```
this means that calling noisy with Math.min as it's arg
is expected to return some kind of function. (3, 2, 1) are the
arguments for whatever function is returned from noisy

HIGHER ORDER FUNCTIONS
======================

# nifty list methods
array.filter(): create a new array with elements that fall under the given criteria from an existing
		array.

array.map(): iterate over an array and creates a new array that has each had each item passed through
	     a function.

array.reduce(): perform ANY list transformation

array.some(): takes a test function and returns true if test returns true on any element

countBy(): is a higher order function that kind of works like pythons ennumerate
```
countBy(1, 2, 3, 4, 5], n => n > 2);
// [{name: false, count: 2}, {name: true, count: 3}]
```

CHAR CODE AT
============

string.charCodeAt just gives you the first have of a unicode16 ( :| )
string.codePointAt give you the whole unicode value.

if you use .codePointAt on a character that uses half the code, .codePointAt will
return the the character, and whatever comes after it in the string

array.findIndex.():
	take a function and return the first index where the function
	returns true


