const palindromes = function (A) {
    newString=''
    A=A.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    A=A.replaceAll(' ','');
    A=A.toLowerCase();
    // console.log(A)
    for (let i = 0; i < A.length; i++) {
        if (A[i]!=A[A.length-1-i]){
            return false
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
