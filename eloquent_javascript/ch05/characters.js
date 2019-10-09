// create a function called countBy that takes args for items and group name
function countBy (items, groupName) {
  // create an array called counts
  let counts = [];
  // for every item in items (must be an array)...
  for (let item of items) {
    // create a var called group with the result of running the second argument
    // with the item as an argument
    let name = groupName(item);
    // create a var called known
    // assign it the result of the following...
      // still dont know what the fuck this is aboue :/
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
// [{name: false, count: 2}, {name: true, count: 3}]
