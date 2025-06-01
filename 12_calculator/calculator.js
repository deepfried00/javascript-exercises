const add = function(num1 , num2) {
	return num1 + num2;
};

const subtract = function(num1 , num2) {
	return num1 - num2;
};

const sum = function(array) {
  return array.reduce((acc, item) => {
    return acc + item; 
  }, 0);
};

const multiply = function(array) {
return array.reduce((acc, item) => {
  return acc * item;
}, 1)

};

const power = function(num1 , num2) {
  return Math.pow(num1, num2);
	
};

const factorial = function(num) {
  let fact = num;
  if (num == 0){
    return 1;
  }
  else {
    for (let i = 1; i < num; i++){
      fact *= i;
    }
    return fact;
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
