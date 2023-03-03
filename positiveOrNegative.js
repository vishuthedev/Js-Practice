const prompt = require("prompt-sync")();

const number = parseInt(prompt('enter the number: '));

if(number > 0){
    console.log('the number is positive');
}
else if(number < 0){
    console.log('the number is negative');
}
else{
console.log('the number is zero');
}