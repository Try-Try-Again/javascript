var x = "outside";

var f1 = function() {
  var x = "inside f1";
};
f1();
console.log(x)
//outside


var f2 = function() {
  x = "inside f2";
  //sooo this is fun. if you dont delcare the value inside your function with 'var',
  //it will reach out and reassign a global variable instead :o
};
f2();
console.log(x);
// inside f2
