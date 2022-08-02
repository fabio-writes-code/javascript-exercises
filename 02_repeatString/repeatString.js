const repeatString = function(string, num) {
    let timesString='';
    
    if (num<0) return 'ERROR';
    if (string==='') return '';

    for (i=0;i<=num-1;i++){
        timesString+=string;
    }
    return timesString;
};

// Do not edit below this line
module.exports = repeatString;
