let protoRabbit = {
  //this is a shorthand way of defining a method
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
};

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEE!");
// The killer rabbit says 'SCREEE!'
