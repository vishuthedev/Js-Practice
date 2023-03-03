const prompt = require("prompt-sync")();

const celsius = prompt('enter the celsius: ')
// convert into factor
const Fahrenheit = (celsius * 1.8) + 32

console.log(`${celsius} celsius is equle to ${Fahrenheit} degree Fahrenheit.`);