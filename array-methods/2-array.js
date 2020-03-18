var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.

let longWord = [];
function findLongestWord(words) {
  for (let i = 0; i < words.length; i++) {
    if (longWord.length < words[i].length) {
      longWord = words[i];
    }
  }
  console.log(longWord);
}

findLongestWord(words);


var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
// Use reduce method of array
// Use the above sum and calculate the average.

function sumArray(numbers1) {
  return numbers1.reduce((a,b) => a + b);
}

sumArray(numbers1) / numbers1.length;

var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers

function averageNumbers(numbers2) {
  return numbers2.reduce((a, b) => a + b);

}
sumArray(numbers2) / numbers2.length;


var words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];
//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

function averageWordLength(words2){
  return words2.join("");
}

console.log(averageWordLength(words2));

let wordAvg = averageWordLength(words2).length/words2.length;

console.log(wordAvg);