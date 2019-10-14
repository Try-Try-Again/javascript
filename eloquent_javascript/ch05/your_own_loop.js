function loop(start, test, update, body) {
  // start: the counter you start with
  // test: needs to return true to continue
  // update: updates start on every pass
  // body: intructions to do every pass
  // yeah they used a for loop :P
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

// start = 3
// test = n => n > 0
// update = n => n - 1
// body = console.log
loop(3, n => n > 0, n => n - 1, console.log);
// 3
// 2
// 1
