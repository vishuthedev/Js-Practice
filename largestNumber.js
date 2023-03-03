const prompt = require("prompt-sync")();

const n1 = parseInt(prompt("enter the first number: "));
const n2 = parseInt(prompt("enter the second number: "));
const n3 = parseInt(prompt("enter the third number: "));
let largest;

if (n1 === n2 && n2 === n3) {
  console.log('All three numbers are equal.');
} else if (n1 >= n2 && n1 >= n3) {
  largest = n1;
} else if (n2 >= n1 && n2 >= n3) {
  largest = n2;
} else {
  largest = n3;
}

if (largest) {
  console.log('The largest number is:'+ largest);
}
