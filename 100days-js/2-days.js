/* 
write a funcyion that generate a hash tag from a given input string in following way

- the input string should be converted to a hash tag format and concatenated together without spaces
*/

function generateHashtag(str) {
  let strArray = str.split(" ");
  let result = strArray
    .map((str) => str.replace(str[0], str[0].toUpperCase()))
    .join("");

  let finalResult = `#${result}`;
  return finalResult;
}

console.log(generateHashtag("my name is hanzala tanveer"));
