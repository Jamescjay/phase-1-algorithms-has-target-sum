function hasTargetSum(array, target) {
  const Numbers =  new Set();
  
  for (const num of array) {
    const difference = target - num;
    if (Numbers.has(difference)) {
      return true;
    }
    Numbers.add(num);
  }
  return false;
}



/* 
  O(n)
*/

/* 
   Create a set to store numbers in the array
   Iterate through the array
   Calculate the difference between the target and the current number
   If the difference is in the set, we've found a pair that adds up to the target, return true
   Otherwise, add the current number to the set
   If we finish iterating through the array without finding a pair, return false
*/

/*
  The hasTargetSum function uses a set to keep track of the numbers encountered while iterating through the array. If the difference between the target and the current number is found in the set, it means there is a pair that adds up to the target, and the function returns true. If no such pair is found in the set, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([9, 4, 18, 2, 14, 5], 30));
  
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
