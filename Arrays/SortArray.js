/**
LEETCODE: 912 - Sort an Array

Given an array of integers nums, sort the array in ascending order and return it.
You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

 
EXAMPLE 1:
Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).

EXAMPLE 2:
Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessairly unique.
 
Constraints:
1 <= nums.length <= 5 * 104
-5 * 104 <= nums[i] <= 5 * 104

*/
// ------------------------------------------------------------------------


// USING BUILT IN FUNCTIONS

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */

// var sortArray = function(nums) {
//     nums.sort(function(a, b){return a - b});
//     return nums;
// };

// console.log(sortArray([5,1,1,2,0,0]));




// ------------------------------------------------------------------------




// MERGE SORT ALGORITHM

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortArray = function(nums) {
    // base condition that allows the function to exit (if there's only one thing in the array, just return it).
    if (nums.length < 2) {
        return nums;
    }
    // initiate sort: find midpoint.
    let mid = Math.floor(nums.length/2);
    // goes until right BEFORE midpoint. slice is not inclusive.
    let left = nums.slice(0, mid);
    // slice will start at defined point, and go until the end of the array by default (if not given a second one).
    let right = nums.slice(mid);
    return merge(sortArray(left), sortArray(right));
};

var merge = function(left, right) {
    let sortedArray = [];
    while(left.length && right.length) {
        if(left[0] <= right[0]){
            sortedArray.push(left.shift())
        } else {
            sortedArray.push(right.shift())
        }
    }
    return [...sortedArray, ...left, ...right]
};

console.log(sortArray([5, 3, 7, 1, 7]));