const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(A) {
	total=0;
  for (let index = 0; index < A.length; index++) {
    total+=A[index];
  }
  return total;
};

const multiply = function(A) {
  total=1
  A.forEach(element => {
    total*=element
  });
  return total
};

const power = function(a,b) {
	return Math.pow(a,b)
};

const factorial = function(a) {
  total=1
	for (let i = a; i >0 ; i--){
    total*=i;   
  }
  return total
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
