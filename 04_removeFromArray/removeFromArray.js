const removeFromArray = function(initArray,...delArray) {
    for (i=0;i<=initArray.length-1;i++){
        for (j=0;j<=delArray.length-1;j++){
            if(initArray[i]===delArray[j]){
                initArray.splice(i,1);
                i-=1;
            }
        }
    }
    return initArray;

    // var removeFromArray = function(...args) {
    //   const array = args[0]
    //   return array.filter(val => !args.includes(val))
    // }
    //
};

// Do not edit below this line
module.exports = removeFromArray;