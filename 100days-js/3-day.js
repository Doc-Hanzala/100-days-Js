/* question

Write a function called countChar that takes 2 parameters ( string and a character to count). The funcion should return the number of time the specified character appears in the string
*/

function countChar(str, char) {
  let num = 0;
  let strArr = str.split("").forEach((curChar) => {
    if (curChar === char) {
      return num++;
    }
  });

  return num;
}

console.log(countChar("hanzala", "a"));
