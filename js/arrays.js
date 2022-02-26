console.log(
  "Arrays are ordered collection of items.\nArray is a Reference Data Type."
);

var myArr1 = ["Jashan", "deep", "Kaur"];
var word = "Morning";

console.log(`Proper way to ensure typeof an Array: ${Array.isArray(myArr1)}`);
console.log(typeof word);

let fruits = ["fru:", "mango", "apple", "grapes"];
let vegetables = ["veg:", "carrot", "peas", "potatoes", "onions"];
console.log("Fruits:", fruits);
console.log("vegetables:", vegetables);
fruits.push("guava");
console.log("After a push:", fruits);
var popedvegetable = vegetables.pop();
console.log("After a pop:", vegetables);
// As you can store poped value in an variable
console.log("Poped value is:", popedvegetable);
fruits.unshift("pineapple");
console.log("Add value in the starting:", fruits);
fruits.shift();
console.log("Remove value from starting", fruits);

// clone OR copy an array
// you can clone an array with 2-3 ways:
// 1. Slice method
// 2. concat
// 3. spread operator

console.log("clone OR copy an array:");
console.log(fruits);
console.log(vegetables);

let cloneingArray;
console.log("clone with slice:");
cloneingArray = vegetables.slice(0);
console.log(cloneingArray);

console.log("clone with concat:");
cloneingArray = [].concat(fruits);
console.log(cloneingArray);

console.log("clone with spread operator:");
cloneingArray = [...vegetables];
console.log(cloneingArray);

console.log("Loops with Array:");
console.log("Simple Loops:");
for (let a = 0; a < vegetables.length; a++) {
  const element = vegetables[a];
  console.log(element);
}

for (let a = 1; a <= 6; a++) {
  console.log("count with me:", a);
}

a = 1;
while (a <= 6) {
  console.log(a);
  a++;
}

a = 1;
do {
  console.log(a);
  a++;
} while (a <= 0);

console.log("for of loop:");
for (const myLoopArray of vegetables) {
  console.log(myLoopArray);
}

console.log("for in loop:");
for (const myLoopArray in vegetables) {
  console.log(myLoopArray);
}

console.log("Array Destructing:");
console.log(fruits);
let [fruit1, , fruit3, ...restItems] = fruits;

console.log("fruits array listing:");
console.log(fruit1);
// console.log(fruit2);
console.log(fruit3);
console.log("reset items are:", restItems);

console.log("Some Array Important Methods:");
console.log(
  "forEach():\nIt lead to for each element perform a function.\nIts take a callback function as Input.\nIt will call its callback function again and again till traverse all elements defined.\nIt will took first element process it as define in its callback function then took 2nd element. so on so fourth."
);

let myarr = [9, 8, 7, 6];
// Way-1 to use forEach
function forEach1(number, index) {
  console.log(index, number);
}
myarr.forEach(forEach1);
// Way-2 to use forEach
myarr.forEach((number, index) => {
  console.log(index, number);
});
// forEach with objects
const users = [
  { userId: "1", userName: "Jashan", gender: "Female" },
  { userId: "2", userName: "Maninder", gender: "Male" },
  { userId: "3", userName: "Arsh", gender: "Female" },
  { userId: "4", userName: "John", gender: "Male" },
];
users.forEach((users) => {
  console.log(users.userId, users.userName, users.gender);
});

console.log(
  "map Array Method:\nIt take a callback function as Input.\nMap function always lead to create a new array as Output.\nYou can also store that O/P in an variable.\nIt is required to use return as O/P, else O/P will be undefined."
);
// square
const square = myarr.map((num) => {
  // need return in this case
  num * num;
});
console.log(square);
// no need in this case
myarr.map((num) => {
  console.log(num * num);
});

const printValue = users.map((user) => {
  // need return in this case
  user.userId;
});
console.log(printValue);
users.map((user) => {
  // no need in this case
  console.log(user.userId);
});
console.log(
  "fliter:\nIt takes callback function as I/P.\nfliter callback function always return a boolean value.\nIt always create a new array as O/P."
);
let myarr2 = [1, 2, 3, 42, 2, 6, 7, 8, 9, 4, 6, 4];
const evenValues = myarr2.filter((val) => {
  return val % 2 === 0;
  // for odd
  // return val % 2!== 0;
});
console.log(evenValues);
console.log(
  "reduce:\nReduce take callback function as I/P and By reducing it will give one value as O/P."
);

const myans = myarr2.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(myans);

console.log(
  "How reduce method Work:\nStep-1:At initial step accumulator's and currentValue's value will be 1st and 2nd value as define in array respectively\nAs per myarr2->\n accumulator=1\n currentValue=2\nStep-2:We have wrote a function that will add them i.e, 1+2 and return 3.\nStep-3:Now the accumulator value will be the returned value and currentValue will move to the next value of the array.\nNow:\n accumulator=3\n currentValue=3\nStep-4:Again value add as defined in function and return value move to the accumulator and currentValue took the next value.\nStep-5:This process will keep going till reach to the last item.And in return it will provide one value as O/P only.\nUse reduce: Add to cart item (addition).\nIn reduce you can assign an initial value to the accumulator."
);
const usersCart = [
  { userId: "1", userName: "Jashan", gender: "Female", userCart: 62000 },
  { userId: "2", userName: "Maninder", gender: "Male", userCart: 22000 },
  { userId: "3", userName: "Arsh", gender: "Female", userCart: 3000 },
  { userId: "4", userName: "John", gender: "Male", userCart: 16000 },
];

const Amount = usersCart.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.userCart;
}, 0);
console.log(Amount);
console.log(
  "sort:\nSort method change original array.\nJS firstly convert your given array into string, then just look on only first digit of all the elements and assign ASCII value to all of them and then sort it according to its ASCII value.\neg:- If their is 710 -> It will only consider '7' ASCII value not of other values i.e, '1','0'\nCons: It not sort number/Sort as ASCII value\nIn case of alphabetic string. It will work fine. As we find in dictionary.['ABC','abc']\nCapital will come first after sort bcz Capital word ASCII code is lower than lowerCase word."
);
const num2 = [2, 4, 5, 6, 7, 7, 0, 6, 3, 3, 2, 22, 21, 134, 4, 643, 278];
console.log(num2.sort());
console.log(
  "Number Sort:\nIn sort method optionally you can take a callback.\nReal eg: LowToHight / HighToLow"
);
// Ascending order
const abnum = num2.sort((a, b) => {
  return a - b;
});
console.log(abnum);
// Descending order
const abnum2 = num2.sort((a, b) => {
  return b - a;
});
console.log(abnum2);

const LowToHight = usersCart.slice(0).sort((a, b) => {
  return a.userCart - b.userCart;
});
console.log(LowToHight);
console.log(
  "By default sort change our original array. If dont't want to do so, You can clone your array an work on it."
);

console.log(
  "find:\nIt takes callback function as I/P\nIt looks for first occurrence only\nThis method is useful in the case of finding unique ID.\n"
);

const animal = ["dog", "cat", "Horse", "lion"];

const ThreeDigitAnimal = animal.find((string) => {
  return string.length === 3;
});
console.log(ThreeDigitAnimal);
const findById = usersCart.find((usersCart) => {
  return usersCart.userId == 3;
});
console.log(findById);
console.log(
  "every:\nIt take Callback function as I/P.\nevery method return True/False.\nIt will return True only if its callback returns true. means, If callback condition fullfill\n[2,4,6,8,10] -> true\n[2,4,6,9,10] -> false. Because of 9 it fail."
);

const num3 = [2, 4, 8, 8, 10];
// const num3 = [2, 4, 9, 8, 10];
console.log(
  num3.every((num3) => {
    return num3 % 2 === 0;
  })
);

console.log(usersCart);
console.log(
  usersCart.every((usersCart2) => {
    return usersCart2.userCart < 2000000;
  })
);

console.log(
  "some:\nsome take an callback as I/P.\nreturn true if any of item in array fullfil the condition"
);

console.log(
  num3.some((num3) => {
    return num3 === 12;
  })
);

console.log(
  usersCart.some((usersCart) => {
    return usersCart.userCart < 200000;
  })
);

console.log(
  "fill\nWanna a Array say need to have 10 elements of same value.\nIt will change your original array.\nfill method: took three values.\n1. value -> value want to add\n2. start -> from which index to start\n3. end -> till which index need to change."
);

const myarr3 = [2, 3, 4, 5, 6, 7, 8, 9];
myarr3.fill(1, 3, 9);
console.log(myarr3);

console.log(
  "splice\nIt will change your original array\nIf you want to delete and insert values inside an array us splice method\nsplice method: took three values.\n1. start -> where to start do delete and insertion\n2. delete -> No. of items to delete\n3. insert -> new item to add\nYou can also store an deleted item into an variable. i.e, splice will return you deleted item."
);

const animal2 = ["dog", "cat", "camel", "horse", "lion"];
console.log(animal2);
// To delete only
const deleteditem = animal2.splice(1, 3);
console.log("items deleted:", deleteditem);
animal2.splice(1, 0, "newanimal");
console.log(animal2);
console.log("Flatting Array:");

const mixedArray = [
  [1, 2, 3],
  [4, 32, 13],
  [55, 292, 88],
  [67, 89, 89],
];
const mixsingleArr = mixedArray.flat();
console.log(mixsingleArr);
// Array Destructuring
const array1 = [1, 2, 3];
const array2 = [4, 32, 13];
const array3 = [55, 292, 88];
const array4 = [67, 89, 89];
const mynewarr = [...array1, ...array2, ...array3, ...array4];
console.log(mynewarr);
