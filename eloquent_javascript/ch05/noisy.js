function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeatLog(3);
// 0
// 1
// 2

repeat(3, console.log);
// 0
// 1
// 2

let labels = [];
repeat(5, i => {
  labels.push(`Unit ${i + 1}`);
});

console.log(labels);
// ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]

repeat(6, i => console.log(i + 1));
// make a function called noisy that takes a argument 'f'


function noisy(f) {
  // return the result of an arrow function that takes
  // unspecified number of args (3, 2, 1) from outside
  // I have no idea how args gets in here. not reproducable
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}



noisy(Math.min)(3, 2, 1);
// calling with [3, 2, 1]
// called with [3, 2, 1] , returned 1

function unless(test, then) {
  if (!test) then();
}

repeat(3, n => {
  // when you have no parameters, you prefix an => function with ()
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});

// 0 is even
// 2 is even
