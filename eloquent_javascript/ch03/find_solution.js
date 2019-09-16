//define function findSolution with 1 argument target
function findSolution(target) {
  //define local function find that takes two args start, history
  function find(start, history) {
    //if the start arg is equal to target...
    if (start == target)
      //return 2nd arg (history)
      return history;
    //if start ends up being larger than target...
    else if (start > target)
      // return null
      return null;
    //otherwise...
    else
      //either return what comes back from find (this function we're in)
      //when called with start + 5 and a concatination of the previous
      //equation (history) and " + 5"
      return find(start + 5, "(" + history + " + 5)") || //or...
        // do the same but with + 3 instead of + 5
        find(start * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}

console.log(findSolution(24));
// (((1 * 3) + 5) * 3)
