/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function(s) {
    // split() to return a new array from original string.
    let splitString = s.split("");

    // reverse() to reverse the new array.
    splitString.reverse();

    // join() to join the array back into a string.
    return splitString;
    
};

// TESTING IT OUT:
console.log(reverseString("hello"));