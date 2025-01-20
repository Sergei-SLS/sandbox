// Count of positives / sum of negatives

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// Solution:

function countPositivesSumNegatives(input) {
    if(!input || input.length === 0) {
      return [];
    }
    
    return input.reduce(([countPositives, sumNegatives], num) => {
      if (num > 0) {
        countPositives += 1;
      } else if (num < 0) {
        sumNegatives += num;
      }
      return [countPositives, sumNegatives];
    },[0, 0]);
  }