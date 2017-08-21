import numeral from 'numeral'; //library to handle number (from package.json)

const totalWorth = numeral(1200425).format('$0,0.00');
debugger; //creates a break point. Thanks to devtool: sourcemaps in webpack.config, I can see the un-bundled code.
console.log(`I am an amazing creature and my worth is at least ${totalWorth}!`); //using backticks (clever ES6 template string feature)