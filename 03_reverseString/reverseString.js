const reverseString = function(string) {
    let revstring='';
    for (i=string.length-1;i>=0;i--){
        revstring+=string[i];
    }
    return revstring;

    //return string.split('').reverse().join('');
};

// reverseString('')

// Do not edit below this line
module.exports = reverseString;
