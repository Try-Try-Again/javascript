// numbers, strings and booleans are primitive types.
// when you assign one primitive variable to another
// variable, the primitive object is duplicated

// objects and arrays are reference types. when you assign
// a reference type to another variable, it is not copied.
// it is hard linked to the origional object

// if you want to copy a reference variable instead of referencing
// it, use the spread operator:

const second_var = {
  ...first_var
};
