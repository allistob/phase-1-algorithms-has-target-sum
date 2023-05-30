function hasTargetSum(array, target) {
 for(let i = 0; i < array.length; i++){
  const complement = target - array[i]
  for (let j = i + 1; j < array.length; j++ ){
  if (array[j] === complement) return true
  }}
  
//if i reach the end of the array, return false
return false;
}

/*create an object to keep track of numbers we've already seen
iterate through the array 
for the current num, identify a complement that adds to the target (comp = target - num)
iterate through the rest of the array
check if any key on our object  is the complement 
  check if any number is our complement 
  if so, return true
otherwise, add that number to the object 



  if i reach the end of the array, return false */
   
  
  
  


//O(n) runtime (if we have to iterate through every element to find an element that has an O(n) runtime)
function findSock(array) {
  for (const item of array) {
    if (item === "sock") return "sock";
  }
}

//O(1) runtime
function findSock(object){
  if(object.sock) return "sock"
}

/* 
  Write the Big O time complexity of your function here
  runtime :O(n^2)
  space: O(n)

/*
example - 
hasTargetSum([1,2,3,4], 6)
seenNumber = {
  1: true,
  2: true,
  3: true,
  4: false
}




  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
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
