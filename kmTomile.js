const prompt = require("prompt-sync")();

const killoM = prompt('enter the kilometer: ')
// convert into factor
const factor = 0.621371

const miles = killoM * factor;

console.log(`${killoM} killometer is equle to ${miles} miles.`);