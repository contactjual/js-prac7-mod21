// exchange value of a, b 


let a = 5;
let b = 7;
console.log(a, b);

// a = b;
// b = a;           // wrong, check solution below
// console.log(a, b); 


let temp = a;
a = b;
b = temp;

console.log(a, b);         // solved



// others solution-----------------------
let x = 5;
let y = 7;
console.log(x, y);

[x, y] = [y, x];
console.log(x, y);