const fibonacci = function(n) {
    if (n == 1 || n == 0){
        return parseInt(n);
    }
    if (n < 0){
        return "OOPS";
    }
    return fibonacci(n - 2) + fibonacci(n - 1);

};

// Do not edit below this line
module.exports = fibonacci;
