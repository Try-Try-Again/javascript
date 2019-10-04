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
