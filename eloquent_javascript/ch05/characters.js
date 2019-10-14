// create a function called countBy that takes args for items and group name
function countBy (items, groupName) {
  // create an array called counts
  let counts = [];
  // for every item in items (must be an array)...
  for (let item of items) {
    // create a var called group with the result of running the second argument
    // with the item as an argument
    let name = groupName(item);
    // create a var called known and assign it the result of the location
    // of any item inside the array (-1 for none).
    let known = counts.findIndex(c => c.name == name);
    //...
    if (known == -1) {
      // add an element to counts with an object containing the items name and count
      counts.push({name, count: 1});
    } else {
      // otherwise increment the 'known' attribute by  1
      counts[known].count++;
    }
  }
  return counts;
}

//console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
// [{name: false, count: 2}, {name: true, count: 3}]

function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({name}) => name != "none");

  let total = scripts.reduce((n, {count}) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts.map(({name, count}) => {
    return `${Math.round(count * 100 / total)}% ${name}`;
  }).join(", ");
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
// 61% Han, 22% Latin, 17% Cyrillic
