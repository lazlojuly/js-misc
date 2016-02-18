// Given a string, you have to return a string in which each charcter (case-sensitive) is repeated once.


function doubleChar(str) {
  // Your code here
  return str.split('').reduce((prev,cur)=> {
    return prev += cur+cur;
  },'');
}

console.log(doubleChar("String"), "SSttrriinngg");
console.log(doubleChar("Hello World"), "HHeelllloo  WWoorrlldd");
console.log(doubleChar("1234!_ "), "11223344!!__  ");


// other way
const doubleChar = (str) => str.split("").map(c => c + c).join("");