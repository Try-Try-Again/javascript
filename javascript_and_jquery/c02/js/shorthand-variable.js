//Variables are declared and values assigned in the same statement
var price = 5;
var quantity = 14;
var total = price * quantity;
//Three variables are declared on the same line, then values assigned to each
var price, quantity, total;
price = 5;
quantity = 14;
total = price * quantity;
//Two variables are declared and assigned values on the same
//line. Then one is declared and assigned a value on the next line.
var price = 5, quantity = 14;
var total = price * quantity;
// Write total into the element with id of cost
var el = document.getElementById('cost');
el.textContent = '$' + total;
