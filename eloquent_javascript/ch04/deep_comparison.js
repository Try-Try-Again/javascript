// Note:
//  this is actually really fucking cool. it shows how === works. just
//  because two objects have the same contents does not mean ===
//  You gotta be the same variable to be === i guess...
// take two arguments and return true only when the values of the
// properties are equal when compared with a recursive call to
function deepEqual (a, b) {
  console.log("######################")
  //if a is 'exactly' equal to b, return true
  if (a === b){
    console.log("Here's a and b");
    console.log(a);
    console.log(b);
    console.log("a === b :D EZ");
    return true;
  };

  // if a is equal to null or a is not an object...
  // or b equals null, or b is not an object, return false.

  // the reason we check both is because typeof null returns an object:D
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") {
    console.log("Something is null or not object");
    console.log("Here's a and b");
    console.log(a);
    console.log(b);
    return false;
  };

  //assign the keys a to keys a, same for b
  let keysA = Object.keys(a), keysB = Object.keys(b)
  console.log("Here's a and b:")
  console.log(keysA)
  console.log(keysB)

  // if both lists are not the same length, return false
  if (keysA.length != keysB.length) {
    console.log("Looks like they arenet the same length");
    return false;
  }

  // for every key listed in keysA...
  for (let key of keysA) {
    // if key has no counterpart in keysB or...
    // a.key or b.key is a list that has no counterpart, return false
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log("STARTING TEST 1");
console.log(deepEqual(obj, obj));
// true
console.log("STARTING TEST 2");
console.log(deepEqual(obj, {here: 1, object: 2}));
// false
console.log("STARTING TEST 3");
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// true
