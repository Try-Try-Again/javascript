// Range function that takes two arguments, start and end, and returns an
// array containing all the numbers from start up to (and including) end.

//this loop wont end if it gets a negative step argument :(
//function range(start, end, step) {
//  //lets use the recursion thingy to solve this :D
//  sum_list = [];
//  if (step === undefined) {
//    step = 1;
//  } else if (step < 0) {
//    for (var count = start; count < end; count += step) {
//      sum_list.push(start);
//      start += step;
//  }
//  return sum_list;
//}
//
//function sum(number_list) {
//  var total = 0;
//  for (var count = 0; count < number_list.length; count += 1) {
//    total += number_list[count];
//  }
//  return total;
//}
//
//console.log(range(1, 10, -1));
//console.log(sum(range(1, 10)));

function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}

console.log(range(1, 10))
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// 55
