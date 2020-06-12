// Given five positive integers, find the minimum and maximum values that can be calculated
// by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line of
// two space-separated long integers.
// For example, . Our minimum sum is  and our maximum sum is . We would print
// 16 24
// Function Description
// Complete the miniMaxSum function in the editor below.
// It should print two space-separated integers on one line:
// the minimum sum and the maximum sum of  of  elements.
// miniMaxSum has the following parameter(s):
// arr: an array of 5 integers
// Sample Input

// 1 2 3 4 5

// Sample Output

// 10 14

function miniMaxSum(arr) {
  let sorted = arr.sort(); //sorts smallest to largest
  let minInts = sorted.slice(0, -1); //gets all but last index
  let maxInts = sorted.slice(1); //gets all but first index
  let max = maxInts.reduce(function (a, b) {
    return a + b;
  }, 0);
  let min = minInts.reduce(function (a, b) {
    return a + b;
  }, 0);

  console.log(min, max);
}

arr = [1, 2, 3, 4, 5];
miniMaxSum(arr);
