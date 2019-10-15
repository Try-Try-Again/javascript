let rabbit = {};
rabbit.speak = function(line) {
  console.log(`The rabbit says '${line}'`);
};

//rabbit.speak("I'm alive");
// The rabbit says 'I'm alive.'

function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my ears and whiskers, " +
  "how late it's getting!");
// The white rabbit says 'Oh my ears and whiskers, how
// late it's getting!'

hungryRabbit.speak("I could sure use a carrot right now.");
// The white rabbit says 'I could sure use a carrot right now.'

speak.call(hungryRabbit, "Burp!");

let dumbRabbit = {type: "dumb"}
speak.call(dumbRabbit, "AYYLMAO!");
