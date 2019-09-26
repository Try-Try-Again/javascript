#sidenote:
All of this shit happening around you is part of the deal. Stop complaining
and just relax. Your only objective is to presevere. No deadlines, no promises
except for 1. you will get there. eyes foreward.
breathe in and out.

ps. dont worry about not getting it. You only need to know a demons name to have
power over him

#idea
forth optimized for working with and optimizing assembly code.
should have eval keyworld which interprets 1 lisp program.
this lisp should use brackets to make it cool :D

programs can have an fpga pattern attached to them.
this pattern would be an optimized compiler custom designed
for that specific language.

#take care of yourself.
find out how to connect your computer to dads printers.
from there you can print out your tax stuff to mail it.

the you can contact the irs and get instructions on how to continue

LEARN MORE
==========

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

