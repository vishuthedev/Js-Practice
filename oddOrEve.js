const prompt = require("prompt-sync")();

const number = parseInt(prompt('enter the number: '));

if(number % 2 == 0){
    console.log('the number is even');
}
else{
console.log('the number is odd');
}