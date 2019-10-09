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

//// call filter with our script file as first parameter and an arrow function as it's second.
//// since test is essentially an anonymous function, when it is called above with "test(element)",
//// element is passed as script to return script.living (element.living)
//console.log(filter(SCRIPTS, script => script.living)); //using our function
//// [{name: "Adlam", ...}, ...]
//console.log(SCRIPTS.filter(s => s.direction == "ttb")); //using array.filter
//// [{name: "Mongolian", ...}, ...]

function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}

//let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
//console.log(map(rtlScripts, s => s.name));
//// ["Adlam", "Arabic", "Imperial Aramaic", ...]

function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

//console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
//// 10

// define a function called characterCount that takes an arg called script
function characterCount(script) {
  // return the following:
    // from whatever script is, get ranges
    // (ranges has got to be a list sine next we reduce ranges
    // looks like ranges is a list that each object in the scripts list has.)
    // reduce with an accumulator called count, and a current value which is an
    // array with the first element being assigned to 'from' and the second to 'to'
  return script.ranges.reduce((count, [from, to]) => {
    // return: increment the count by the difference of 'two' and 'from'
    return count + (to - from);
  }, 0);
}

//// run reduce on SCRIPTS to find which characterCount(element) scores the highest
//console.log(SCRIPTS.reduce((a, b) => {
//  return characterCount(a) < characterCount(b) ? b : a;
//}));
//// {name: "Han", ...}

function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

//console.log(Math.round(average(
//  SCRIPTS.filter(s => s.living).map(s => s.year))));
//// 1165
//
//console.log(Math.round(average(
//  SCRIPTS.filter(s => !s.living).map(s => s.year))));
//// 204

// function takes a utf code
function characterScript(code) {
  // for script object in SCRIPTS list...
  for (let script of SCRIPTS) {
    // if the value of the character is within
    // a particular range...
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      // return that script
      return script;
      //... otherwise return null (.some will continue untill it returns true
    }
  }
  return null;
}

console.log(characterScript(121));
// {name: "Latin", ...}
