/*
write a function to sort an array of numbers in an ascending order
*/

function sortAscending(nums) {
 let numsArr = nums.sort((a,b)=>a-b)
 console.log(numsArr);
}

console.log(sortAscending([5, 3, 10, 8]));
console.log(sortAscending([5, 3, 1, 8]));
