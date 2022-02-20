console.log("Function in JS:");
console.log("Function Declaration/Definition:");
function sumOfTwo(n1, n2) {
  return n1 + n2;
}
const sumOfTwoAns = sumOfTwo(2, 6);
// This will return full function
// console.log(sumOfTwo);
// This will provide O/P
console.log(sumOfTwoAns);
console.log("Function Expression:\nAssign function to a variable.");
const sumOfThree = function (n1, n2, n3) {
  return n1 + n2 + n3;
};
console.log(sumOfThree(2, 2, 2));
console.log(
  "Arrow Function:\nFunctions without name. Its a simple and short way of using functions."
);

const doubleNumber = (n1) => {
  return n1 * 2;
};
console.log(doubleNumber(11));
// If having only one parameter and only one line of execution then you can do:
const doubleNumber2 = (n1) => n1 * 2;
console.log(doubleNumber2(11));
console.log(
  "Hoisting in JS:\nIn case of:\n1.function declartion,\n2.var\nonly you can accsess a function or value even before declare it."
);
console.log("Try Hoisting in JS for variables:");
// This will work fine as we are using var for name
console.log(name);
// In this case it will throw error as we are using const for fullname
// console.log(fullname);
var name = "Jashandeep";
const fullname = "Jashandeep Kaur";
console.log("Try Hoisting in JS for functions:");
// This will work fine as we are using function declartion/defination
console.log(myname());
// This will work fine as we are using function expression
// console.log(fullnameFunc());
function myname() {
  return "Jashandeep";
}
const fullnameFunc = function fullnameFunc() {
  return "Jashandeep Kaur";
};
console.log(
  "Function inside Function:\nYou can use a function inside a function."
);
function MathOpertions() {
  const addTwo = (n1, n2) => n1 + n2;
  const SubTwo = (n1, n2) => n1 - n2;
  const MultiplyTwo = (n1, n2) => n1 * n2;
  console.log(addTwo(2, 4));
  console.log(SubTwo(2, 4));
  console.log(MultiplyTwo(2, 4));
}
MathOpertions();

console.log(
  "Lexical Scope:\nWhen a variable didn't find inside function then it will check in its Lexical Scope. i.e, Parent Scope"
);

function LexicalScopp() {
  const myVar = "Hi";
  function childfunc() {
    const myVar2 = "Hi2";
    console.log(myVar);
    console.log(myVar2);
  }
  childfunc();
  // This will not accessible
  // console.log(myVar2);
}
LexicalScopp();
console.log(
  "Block Scope and Function Scope:\n1. Let and Const are Block Scope\n2. var is function Scope."
);
console.log(
  "Block Scope:\n{} -> This is a Block\nYou can use same variable name in 2 d/f blocks. As out of one block their is d/f block scope."
);
{
  const fname = "const-Jashan";
  console.log(fname);
}
{
  let fname = "let-Jashan";
  console.log(fname);
}
console.log(
  "Function Scope:\nConsider a JS as a function(even if nothing is written their). So, 'var' have full access in this function Scope, inside or outside a block."
);
var fname = "var-Jashan";
console.log(fname);
console.log(
  "Default Parameter:\nYou can pass a Default value to the function parameters.\nUseful in case when arguments are not passed, and will not return undefined"
);

function passvalue(n1, n2, n3, n4 = 0) {
  console.log(n1, n2, n3, n4);
}
passvalue(1, 2);
console.log(
  "Rest Parameters/Spread:\nLet the rest of the parameters value  store in single parameter which gonna be add  in the form of array.\nThis lead to be use n numbers of params in functions."
);
function restparams(a, b, ...c) {
  let tootal1 = a + b;
  // console.log(tootal1);
  let total = tootal1 + 0;
  for (const restparam of c) {
    total = restparam + total;
  }
  console.log(total);
}
restparams(2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
console.log(
  "Param Destructuring:\nWe mainly use this with objects.\nIt lead to create variable for that particular block scope."
);

const person1 = {
  firstname: "Jashan",
  age: 21,
  gender: "female",
};

function printDetails({ firstname, age, gender }) {
  console.log(firstname);
  console.log(age);
  console.log(gender);
}

printDetails(person1);
console.log(
  "Callback Functions:\nAs in a function parameter, you can pass anything. i.e, string, array, object.\nBut you can also pass function as parameter in another function.\nThis is called Callback Function.\nWe mainly use this when we fetch data from DB and want to process in another function."
);

function getperson2(firstname) {
  console.log("Inside Callback.");
  console.log("My Name is", firstname);
}

function printUserData(callback) {
  console.log("I am main function having Callback to process.");
  // Call your param function
  callback("Jashandeep Kaur");
}
// Passes callback to the main function
printUserData(getperson2);

console.log(
  "Function returning Function:\nReturn a function inside function's return."
);

function myFunc() {
  function hello() {
    return "Hii";
  }
  return hello();
}
console.log(myFunc());
// OR in more optimized way:
function myFunc2() {
  return function () {
    return "Hii2";
  };
}
console.log("Now myFun2 have a returned function:");
console.log(myFunc2());
console.log(
  "It will execute that returned function. So, we getting desired O/P."
);
const ans = myFunc2();
console.log(ans());
console.log(
  "High Order Functions:\nHOF are:\n1. Function returning Function\n2. Callback Function\n3. Function do both FRF and Callback"
);

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
  "sort:\nSort method change original array.\nJS firstly convert your given array into string, then just look on only first digit of all the elements and assign ASCII value to all of them and then sort it according to its ASCII value."
);
