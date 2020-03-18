var data = [
  {
    name: "Butters",
    age: 3,
    type: "dog"
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog"
  },
  {
    name: "Red",
    age: 1,
    type: "cat"
  },
  {
    name: "Joey",
    age: 3,
    type: "dog"
  },
  {
    name: "Pochi",
    age: 3,
    type: "dog"
  }
];

// write a function that will sum all of the dogs ages in dog years using for loop.
// 1 human year = 7 dog year

// your code goes here
function dogAges(data){
  return data.reduce((acc,cv) => {
    if(cv.type === 'dog'){
      acc += cv.age * 7
    }
    return acc;
  }, 0)
}

// Solution is 105

// Write the same function using
// 1. filter - for filtering the cat or dog
function filterDogCat(data){
  let sumOfAges = 0;
  data.filter(x => (x.type === 'dog') && (sumOfAges += x.age * 7));
  return sumOfAges;
}

// 2. map - to multiply human year to dog year
function multiplyHumanYear(data){
  let sumMap = 0;
  data.map(x => (x.type === 'dog') ? (sumMap += x.age * 7) : sum += 0);
}

// 3. reduce - to accumulate total age.
function accumulateAge(data){
  return data.reduce((acc, cv) => (cv.type === 'dog') ? acc + (cv.age * 7) : acc, 0);
}

// Solution 105
