// LIST PARAMETERS: num
/**
 * @param {integer} num
 */


const sumNums = function(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++){
        sum +=i;
    }
    return sum;
};

// TESTING IT OUT:
console.log(sumNums(3)); // equals 6