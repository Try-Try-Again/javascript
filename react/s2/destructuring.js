// you can unpack a list into a group of variables like this:
[a, b] = ['Hello', 'Max']
console.log(a); // Hello
console.log(b); // Max

// you can skip over elements like this:
[x, , y] = ['red', 'white', 'blue']
console.log(x); // red
console.log(y); // blue

// you can destructure objects too:
{name}={name: 'Max', age: 28}
console.log(name) // Max
console.log(age) // undefined
// Note: destructuring objects isnt supported in nodejs
