// Your code here.
function reverseArray(list) {
  new_list = [];
  for (var i in list) new_list.unshift(list[i]);
  return new_list
}

function reverseArrayInPlace(list) {
  for (var i in list) list.splice(i, 0, list.pop());
}


console.log(reverseArray(["A", "B", "C"]));
// ["C","B", "A"];

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// [5, 4, 3, 2, 1]
