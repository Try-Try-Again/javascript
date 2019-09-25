var day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running",
   "television"]
};

var journal = [];

function addEntry(events, didITurnIntoASquirrel) {
  journal.push({
    events: events,
    squirrel: didITurnIntoASquirrel
  });
}


function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

function hasEvent(event, entry) {
  return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
  var table = [0, 0, 0, 0];
  for (var i = 0; i < journal.length; i++) {
    var entry = journal[i], index = 0;
    if (hasEvent(event, entry)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

console.log(tableFor("pizza", JOURNAL));


//addEntry(["work", "touched tree", "pizza", "running",
//  "television"], false);
//
//addEntry["work", "ice cream", "cauliflower", "lasagna",
//  "touched tree", "brushed teeth"], false);
//
//addEntry(["weekend", "cycling", "break", "peanuts",
//  "beer"], true);
