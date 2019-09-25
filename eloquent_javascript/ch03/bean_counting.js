function countBs(input_string) {
  var bees = 0
  for (var i=0; i < input_string.length; i++) {
    if (input_string.charAt(i) === "B") {
      bees ++;
    }
  }
  return bees
}

function countChar(input_string, character) {
  var char_count = 0
  for (var i=0; i < input_string.length; i++) {
    if (input_string.charAt(i) === character) {
      char_count ++;
    }
  }
  return char_count
}


console.log(countBs("Benis"));
console.log(countBs("Bounce your B's"));

console.log(countChar("ScoobyDoobyDoo", "o"));
console.log(countChar("Where are U", "U"));
