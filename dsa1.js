// way to record # of times an integer is recorded in an input
// compare the # of times to the other integer values
// return the unique value.

// recording each element, compare to each other => may take up time.
// operator that doesn't need to take up memory, and will instead automate it.

// JS doesnt need imports unless you're intentionally using things outside.

// loop through array
// for each element in the array, loop through the array again to keep track of the instance.
// if count is > 1, keep going. if count = 1, return.

function findUniqueValue(array){
    // loops through each element of the array.
    for (let i = 0; i < array.length; i++){
        // set up count var
        let count = 0;
        // referring to the spot in the array you're looking at
        let element = array[i];
        // so you can count the # of times an element occurs
        for (let k = 0; k < array.length; k++){
            if (array[k] === element){
                count++;
            }
        }
        if (count === 1){
            return element;
        }
    }
}

console.log(findUniqueValue([2,2,1]));