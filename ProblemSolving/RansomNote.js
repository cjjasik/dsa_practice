/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
    // if magazine.includes(ransomNote), return true, else return false
    if (ransomNote.length === 0){
        return false;
    }
    if (magazine.includes(ransomNote)){
        return true;
    } else {
        return false;
    }
};


// TESTING TO CONFIRM IT WORKS
console.log(canConstruct("abc", "xyz"));
console.log(canConstruct("yz", "xyz"));
// edge case example.
console.log(canConstruct("", "a"));