// Find duplicate number in an array from 1 to number

// [1,2,3,4]
// [2,1,4,4]
let hash = {};
let totalSum = 0;
let expectedSum = 0;
function duplicate(arr) {
  for(let i = 0; i<arr.length; i++) {
    totalSum = totalSum + arr[i];
    expectedSum = expectedSum + i + 1;
    if(hash[arr[i]]) {
      hash[arr[i]]++;
      duplicate = arr[i];
    } else {
      hash[arr[i]] = 1;
    }
  }
  let diff = totalSum - expectedSum;
  missing = duplicate - diff;
  console.log('Missing, duplicate', missing, duplicate);
}


duplicate([1,2,3,3,5]);
