// Calculate average

// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

// Solution:

function findAverage(array) {
    const sum = array.reduce((acc, number) => acc + number, 0);
    const length = array.length;
    return sum / length || 0;
  }