const fibonacci = function(a) {
    fib=[1,1]
    if (a==1 || a==2){
        return 1
    }
    if (a<=0){
        return 'OOPS'
    }
    for (let i = 2; i <= a-1; i++) {
        fib[i]=fib[i-1]+fib[i-2];
    }
    return fib[a-1]
};

// Do not edit below this line
module.exports = fibonacci;
