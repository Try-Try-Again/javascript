// Zero is even
// One is odd
// For any other number N, its evenness is the same as N - 2

function isEven(n) {
  if (n === 0) {
    return true;
  }
  else if (n === 1) {
    return false
  }
  else {
    return isEven(n - 2)
  }
}

console.log(isEven(50));
console.log(isEven(75));
