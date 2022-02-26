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
