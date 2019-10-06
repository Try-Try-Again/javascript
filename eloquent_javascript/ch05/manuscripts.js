// import our array of objects
require('./scripts.js');

// make a function called filter that take two parameters
function filter(array, test) {
  // make an array called passed
  let passed = [];
  // for every element in the imported array...
  for (let element of array) {
    // if calling calling test with element as parameter returns true...
    if (test(element)) {
      // add the element to passed
      passed.push(element);
    }
  }
  return passed;
}

// call filter with our script file as first parameter and an arrow function as it's second.
// since test is essentially an anonymous function, when it is called above with "test(element)",
// element is passed as script to return script.living (element.living)
console.log(filter(SCRIPTS, script => script.living)); //using our function
// [{name: "Adlam", ...}, ...]
console.log(SCRIPTS.filter(s => s.direction == "ttb")); //using array.filter
// [{name: "Mongolian", ...}, ...]
