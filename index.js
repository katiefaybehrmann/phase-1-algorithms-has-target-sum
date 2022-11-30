function hasTargetSum(array, target) {
  let num;
  let holder=[];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      num = array[i] + array[j]
      holder.push(num)
    }
  }
  if(holder.find(element => element == target)){
    return true;
  }
  else{
    return false;
  }

}
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here

  Array and target number are given
  Target subtracts each number and looks for its match (nested iterations)
  at first case of true, exit loop

  OR: convert array to object keys
  find object key
*/

/*
  Add written explanation of your solution here
  This function will take in two parameters: a set of numbers, and a target number.
  This function returns true if any two numbers added equal the target number
  Numbers larger than the target number should be removed
  target number subtracts first number then searches the array for that number
  returns true if it finds that number
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-1, 10, 34, 55, 4], 9))

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([3, 3, 3, 3, 3, 3], 9))

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
