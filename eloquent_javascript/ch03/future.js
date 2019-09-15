//This works - even though the function call is BEFORE the functions declaration
//Function Declarations are always done first - no matter where they are in the file
console.log("The future says:", future());

function future() {
  return "We STILL have no flying cars.";
}
