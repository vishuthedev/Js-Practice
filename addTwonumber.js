// let a = 5;
// let b = 7;

// const sum = a + b;
// console.log("Total sum is ", sum);


// add number by user
const prompt = require("prompt-sync")();

const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));

const sum = num1 + num2;

console.log(`The sum of ${num1} and ${num2} is ${sum}`);