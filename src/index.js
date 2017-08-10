import numeral from 'numeral';

const totalWorth = numeral(10000000).format('$0,0.00');
console.log(`I am an amazing creature and my worth is at least ${totalWorth}!`);