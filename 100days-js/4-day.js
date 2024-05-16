/*
write a function calld checkTriangleType that takes 3 parameters representing the lengths of the sides of a trianlge.The function should return a string indicating the type of triangle as follows

-> if all 3 sides are of equal length, return equilateral

-> if  2 sides are of equal length, return isosceles

-> if all 3  sides are of un-equal length, return scalene

*/

function checkTrianlgeType(a=1, b=1, c=1) {
  if (a === b && b === c) {
    return "equilateral";
  }
  if(a===b | b==c | a==c){
    return 'isosceles'
  }
  return "scalene"
}

console.log(checkTrianlgeType(3, 3, 3));
console.log(checkTrianlgeType(3, 4, 3));
console.log(checkTrianlgeType(3, 4, 6));
