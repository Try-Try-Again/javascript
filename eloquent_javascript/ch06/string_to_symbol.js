// create a contant (unchangable) called toStringSymbol
const toStringSymbol = Symbol("toString");
// add a method to the array prototype
// the toStringSymbol is going to evaluate to that
// unique value - which is the 'name' of the method?
Array.prototype[toStringSymbol] = function() {
  return `${this.length} cm of blue yarn`;
};
console.log([1, 2].toString());
// 1,2
// since string to symbol isnt in the list its looked up in
// the prototype where it equals the function
// its then called with the ()
console.log([1, 2][toStringSymbol]());
// 2 cm of blue yarn
