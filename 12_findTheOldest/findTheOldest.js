const findTheOldest = function(A) {
    const oldest=A.sort((a,b)=>{
        if (!b.yearOfDeath){
            b.yearOfDeath=(new Date).getFullYear();
        }
        if (!a.yearOfDeath){
            a.yearOfDeath=(new Date).getFullYear();
        }
        aAge=a.yearOfDeath-a.yearOfBirth;
        bAge=b.yearOfDeath-b.yearOfBirth
        return aAge<bAge?1:-1
    })
    return oldest[0]
};

// Do not edit below this line
module.exports = findTheOldest;
