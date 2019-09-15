// print all the numbers from 1 to 100
// with two exceptions:
// For numbers divisible by 3 print Fizz
// For numbers divisible by 5 (and not 3) print Buzz instead
for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  }
  else if (i % 5 === 0) {
    console.log("Buzz");
  }
  else {
    console.log(i)
  }
}
