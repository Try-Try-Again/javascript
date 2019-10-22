// spread and rest both use the same operator:
// '...' (three dots)

//spread is used to split up array elements OR object properties

let old_array = ['a', 'b', 'c'];
let new_array = [...old_array, '1', '2', '3']
console.log(new_array);
// [ 'a', 'b', 'c', '1', '2', '3' ]

// when it is used in function declaration, it works like **args in
// python

// function sortArgs(...args) {
// this will pass any and all args into the function
