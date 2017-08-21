import numeral from 'numeral'; //library to handle number (from package.json)

const totalWorth = numeral(1200425).format('$0,0.00');
console.log(`I am an amazing creature and my worth is at least ${totalWorth}!`); //using backticks (clever ES6 template string feature)