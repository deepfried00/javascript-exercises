const sumAll = function(num1, num2) {
    let sum = 0;
    if ( num1 > num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
    if ( num1 < 0 || num2 < 0 || num1 % 1 !== 0 || num2 % 1 !== 0 || typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    }
    for (let i = num1; i <= num2; i++) {
        sum += i;
    };
    return sum;
};
console.log(sumAll(2.5, 4));

// Do not edit below this line
module.exports = sumAll;
