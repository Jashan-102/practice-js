console.log("How JS Work and JS code execute?");
console.log(
  "Their are 2 phases to execute JS code:\n1. Creation Phase or Compilation Phase \n2. Code execution Phase"
);
console.log(
  "In first Phase:\nOne by One Memory will be allocate to all the var and functions. Because of this hoisting supports as memory is already allocated and that var and functions are present in memory. In this phase memory is allocated in Global Memory where window object is already present by default, provided by browser."
);

console.log("window and this is same:\nwindow:{}\nthis:{window}");
console.log(
  "In case of function declaration:\nWhole function is going to place in global memory by Creation Phase."
);
console.log(
  "In case of function expression:\nThe function is going to treat as variable in global memory. So, it will set as undefined. just like any other variable."
);

console.log(
  "Are let and const Hoisted?\nIn case of let and const while Creation Phase, the memory allocation will be:\nunitalized\nYou can only use let and const when they are initalized else Throw Reference error.\nNow, question is are let and const hoisted? Ans is Yes, Memory is allocated to them but you can't use them till you initalized them."
);

console.log(
  "Function Execution Context:\nWhenever the function is called an FEC is created for Function Execution inside Creation Phase.\nThis also have Two phases:\n1. Creation Phase [allocate memory in Local Memory Creation]\n2. Code Execution"
);

function getName(a, b) {
  console.log("arguments are array like object.\n", arguments);
  console.log(a + b);
  console.log(
    "While FEC firstly an array like object is created to which values are assigned at the time of function invocation. It lead yto store our arguments inside arugment Array like object.\nIt exists inside function's local memory.\nFirst Parameter Value = First arugment Value."
  );
}
getName(2, 4);

console.log(
  "Scope Chain and Lexical Environment:\nIf a variable is not present in a local memory, then JS will look for it, in its lexical environment or you can say in its parent scope.\nWhenever a GEC is created, Lexical Environment is also created. Lexical Environment is a local memory along with the lexical environment of its parent.\nWhenever EC is created their is also an reference to the lexical environment of its parent (inside memory). GEC has not parent, so it is null"
);

console.log("Closures in JS:\nFunctions can return a function.");

function printFullName(fname, lname) {
  console.log("fname and lname are printFullName's local memory variables");
  console.log(
    "Whenever a function is returned from a function. It always returned with its local memory variable.\nMean printName will return with prinFullName's local memory variables.\nWhich means printName has access of fname and lname variables."
  );
  function printName() {
    console.log(fname, lname);
  }
  return printName();
}
printFullName("Jashandeep", "Kaur");

function runOnceOnly() {
  let counter = 0;
  return function () {
    if (counter < 1) {
      console.log("Hii");
      counter++;
    } else {
      console.log("Ik baar hi chaluga mai.");
    }
  };
}
const myFunc = runOnceOnly();

myFunc();
myFunc();
myFunc();
myFunc();
