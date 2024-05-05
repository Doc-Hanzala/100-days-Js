// question
// write a function that takes a string as input and return the longest word in the string

function longestWord(str) {
  if (str.trim().length === 0) {
    console.log("please provide a valid string");
    return;
  }
  let longestWordArr = str.split(" ").sort((a, b) => b.length - a.length);

  console.log(longestWordArr[0]);
}

longestWord("hanzala is the student of final year medical school");
