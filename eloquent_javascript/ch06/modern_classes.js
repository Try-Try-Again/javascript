class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

killerRabbit.speak("Reeeeeee!");
blackRabbit.speak("I'll get you bitch!");


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
