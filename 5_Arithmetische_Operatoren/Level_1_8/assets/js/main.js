let x = 20;
let y = 30;
console.log(x + y);
console.log(x - y);
console.log(y - x);
console.log(x * y);
console.log(x / y);

let z = 10;
x *= y;
console.log(x);
let resultOne = x / z;
console.log(resultOne + " resultOne");

let a = 15;
let b = 9;
console.log(a % b);

let c = 20;
let resultTwo = (a + b) * c;
console.log(resultTwo + " resultTwo");

a++;
console.log(a);

b++;
console.log(b);

let resultThree = a - b;
console.log(resultThree + " resultThree");

console.log(resultOne % resultTwo);