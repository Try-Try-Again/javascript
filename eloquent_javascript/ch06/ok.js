let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());
// {value: "0", done: false}
console.log(okIterator.next());
// {value: "K", done: false}
console.log(okIterator.next());
// {value: undefined, done: true}
