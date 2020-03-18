// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers
let arr = numbers.reduce((a, b) => (a > b) ? a : b );

// Find longest string in strings
let longest = strings.reduce((acc, cv) => { 
  return acc.length > cv.length ? acc : cv; 
});

// Find all the even numbers
let evenNumber = numbers.filter((x) => (x % 2 === 0) ? x : '');

// Find all the odd numbers
let oddNumber = numbers.filter((x) => (x % 2 === 1) ? x : '');

// Find all the words that contain 'is' use string method 'includes'
let wordInclude = strings.filter(x => (x.includes("is") ? x : ''));

// Find all the words that contain 'is' use string method 'indexOf'
let wordContain = strings.filter(x => (x.indexOf("is") !== -1) ? x : '');

// Check if all the numbers in numbers array are divisible by three use array method (every)
let everyNumber = numbers.every((a) => (a % 3 === 0) ? a : '');

//  Sort Array from smallest to largest
let smallLarge = numbers.sort((a, b) => a - b);

// Remove the last word in strings
let lastWord = strings.pop();

// Add a new word in the array
let newWord = strings.push("array");

// Remove the first word in the array
let removeFirstWord = strings.shift();

// Place a new word at the start of the array use (upshift)
let newWordAtStart = strings.unshift("so");

// Make a subset of numbers array [18,9,7,11]
let subsetNumbers = numbers.splice(3, 4);

// Make a subset of strings array ['a','collection']
let subsetString = strings.splice(2, 2);

// Replace 12 & 18 with 1221 and 1881
let numReplace = numbers.splice(1, 1, 1221);
let numReplace2 = numbers.splice(3, 1, 1881);

// Replace words with string in strings array
let replaceWords = strings.splice(5, 1, "string");

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'
let nameStartsWith = objArr => {
  let ans = [];
  for (let item of objArr) {
    if (item.firstname.startsWith("J")) {
      ans.push(item);
    }
  }
  return ans;
}

// Create new array with firstname and lastname
let newArr = customers.map(x => x.firstname + " " + x.lastname);

// Sort the array created above alphabetically
let sortedFullName = objArr => objArr.map(el => `${el.firstname} ${el.lastname}`).sort();