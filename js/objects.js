console.log("Learning about Objects in JS:");
console.log("Objects store data in 'key : value' Pairs");
console.log("Objects don't have index");
console.log("Object can also be called as instance.");
console.log(
  "Creating objects way also know as Object Literals i.e by using {}-currly braces"
);
console.log(
  "In a object you can't use same name of key again. If you do so that key value will override.(last mein key hogi jo woh overide kar degi pehli vali ko) "
);

let hobbies = ["Singing", "Dancing", "Listening Music"];
console.log(
  "If you use any value inside {currly braces} That will act like a child of that object. Like:"
);
const person = {
  name: "Jashandeep Kaur",
  age: "22",
  // hobbies: ["Singing", "Dancing", "Listening Music"],
  hobbies: { ...hobbies },
  // mynameDestruct: { ..."Jashandeep" }, //This will make array inside object
  mynameDestruct: [..."Jashandeep"], //This will make list of array
  "person languages": ["English", "Punjabi", "Hindi"],
};
console.log(person.hobbies);
const mydest = person.mynameDestruct;
// console.log(typeof mydest);
console.log(Array.isArray(mydest));
console.log(mydest);
console.log("Adding new pair of object:");
person.gender = "female";
console.log(person);
console.log("Difference between dot notation and Bracket notation:");
// console.log(person.hobbies[0]);
// console.log(person.person languages); // In this dot notation will throw error
console.log(person["person languages"]); // So,we will use Bracket Notation for this type of objects
// Another use of bracket notation

const key = "email";
console.log(
  "This is not proper way to add a 'key: value' pair. As you can check by console person object"
);
// person.key = "jashandeep@gmail.com";
// console.log(key, ":", person.key);
// console.log(person);
console.log(
  "This is proper way to add a 'key: value' pair. As you can check by console person object"
);
// Need to comment this for uupr vala result ane ko
person[key] = "jashandeep@gmail.com";
console.log(key, ":", person[key]);
console.log(person);
console.log("Iterate an Object's Values:");
// Mainly Two ways:
// for in loop OR for of loop
// object.keys

for (let keys in person) {
  console.log(keys, ":", person[keys]);
}

console.log("Object.keys returns an array:");
for (let keyss of Object.keys(person)) {
  console.log(keyss, ":", person[keyss]);
}

console.log(
  "Computed properties in objects:\n'[property]'-This is computed property"
);

const key1 = "obbj1";
const key2 = "obbj2";
const value1 = "myvalue1";
const value2 = "myvalue2";
console.log("Compute const value in one object:");
// Way-1
const obj = {
  [key1]: "value1",
  [key2]: value2,
  key7: "valueee",
};
console.log(obj);
// Way-2
const obj2 = {};
obj2[key1] = value1;
obj2[key2] = value2;
obj2.key3 = "myval";
console.log(obj2);
console.log(
  "Spread operators:\nThis is '...name' speard op. This lead to spread elements."
);
// You will see in this O/P obbj1 and objj2 is one time happening only because thir value is being overridden by obj2
const newobjs = { ...obj, ...obj2 };
console.log(newobjs);

console.log("Object Destrutuction");
console.log(person);

// using default variable name (as key)
// let { name, age } = person;
// console.log(name);
// console.log(age);
// using different variable name
let { name: personName, age: personAge, ...restItems } = person;
console.log(personName);
console.log(personAge);
// It will return rest element which we didn't destruct
console.log(restItems);

console.log("Objects Inside an array:");
const users = [
  { userId: "1", userName: "Jashan", gender: "Female" },
  { userId: "2", userName: "Maninder", gender: "Male" },
  { userId: "3", userName: "Arsh", gender: "Female" },
  { userId: "4", userName: "John", gender: "Male" },
];

const [user1, user2, user3, user4] = users;
console.log(user2.userName);
// Nested Destructuring
// Take out an particular value of any user
const [
  // extracting 2 props from an object
  { userName: user1Name, userId },
  { userName: user2Name },
  ,
  { gender: user3Gender },
] = users;
console.log(user1Name, ",", userId);
console.log(user2Name);
console.log(user3Gender);
