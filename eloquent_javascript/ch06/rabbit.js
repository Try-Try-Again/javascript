//function makeRabbit(type) {
//  let rabbit = Object.create(protoRabbit);
//  rabbit.type = type;
//  return rabbit;
//}

function Rabbit(type) {
  this.type = type;
}
Rabbit.prototype.speak = function(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("weird");

weirdRabbit.speak("Ayyy Lmao");

Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
// small
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
// long, sharp, and bloody
console.log(blackRabbit.teeth);
// small
console.log(Rabbit.prototype.teeth);
// small

let sym = Symbol("name");
console.log(sym == Symbol("name"));
// false
Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);
// 55
