// 1. Write a JavaScript program to list the properties and values of a JavaScript object. (Object.keys)

let keyString = obj => {
  let objectKeys = Object.keys(obj);
  objectKeys.forEach(getKey => `${getKey} : ${obj(objectKeys)}`);
}

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
var student = { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12
};

console.log(student);
delete student.rollno;


// 3. Write a function to get the length of an object.

function getLength (obj){
  return obj.length;
}