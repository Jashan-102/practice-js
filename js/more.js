console.log("Iterables & Array like Object:");
console.log(
  "Iterables are those on which we can apply 'for of' loop.\nString & array are iterables."
);

const items = ["1", "2", "3", "5", "3"];

for (const itemiterator of items) {
  console.log(itemiterator);
}

console.log(
  "Array like object are:\nWhich we can access with index.\nWho has length property\neg: String"
);

console.log(
  "Sets(it is a iterable):\nSet doesn't allow duplicate. It will ignore the duplicate value.\neg: Set([1,2,3,3])-> 2 times 3\nNo index base access: arr[1]-> This will not work return undefined\nOrder is not guaranteed.\narray[1,2,3]\nset[2,1,3]"
);
console.log("Sets declaration:");
const num = new Set();
num.add(1);
num.add(2);
num.add(3);
num.add(3); // this 3 is going to be ignored by Set
num.add(["78", "56"]);
console.log(num);
console.log(
  "Use of Set:\nUse Set when you know their will be no duplicate values. eg: [ids] Unique id"
);
console.log(
  "Length method doesn't work in case of Sets.\nWay to get length of Set:"
);
const uniqueIds = new Set(items);
for (const element of uniqueIds) {
  length++;
}
console.log(length);
console.log(
  "Maps Object:\nD/F b/w map object and object:\nIn object: Key type will be only:\nkey = string OR number\nBut in Map object Key type can be anything. Like: array, number, string, symbol Even you can use a symbol.\nMap Object are iterable.\nNeed to use its own keywords to get value and set value.\nMap object store data in ordered fashion/Guaranteed order"
);
const item1 = {
  keyss: "value1",
  1: "one",
  // -: "hypen"
};
console.log(item1);
const item2 = new Map([
  ["Hii", "There"],
  ["its", "meee"],
]);
item2.set("fname", "Jashandeep");
item2.set("1", "one");
item2.set("two", 2);
item2.set("-", "hyphen");
// Array as Key
item2.set(["1", "2"], "on-two");
// Object as Key
item2.set({ 1: "2" }, "on-two");
console.log(item2);
console.log(item2["fname"]);

for (const myitem of item2) {
  console.log(myitem, ":", typeof myitem);
}

for (let [allKey, allvalue] of item2) {
  console.log(allKey, "=", allvalue);
}

const person1 = {
  id: 1,
  name: "Jashandeep",
};

const person2 = {
  id: 2,
  name: "Maninder",
};
const addExtraInfo = new Map();
// Set the value but can only use by using "get" method of the Map
addExtraInfo.set(person1, { age: "21", gender: "Female" });
// use get method to get the values in Map
console.log(addExtraInfo.get(person1).age);
console.log(addExtraInfo.get(person1).gender);

console.log(
  "Clone using Object.assign:\nBefore spread operator for cloning we use Object.assign"
);
// By using Spread operator
const myspreadObj = { ...person1 };
console.log(myspreadObj);
// By using Object.assign
const myObjAssign = Object.assign({}, person2);
console.log(myObjAssign);
console.log(
  "optional chaining:\nWe are accessing a object inside an object.\nLike:"
);
const userInfo = {
  fname: "Jashandeep",
  address: {
    state: "Punjab",
  },
};
console.log("Person city:", userInfo.address.state);
console.log(
  "If in a case their is no address mentioned, then:\naddress = undefined\naddress.state = throw error\nWe don't want error as may be that info will be available after some time. In that case we wil use:\noptional chaining -> ?.\nLike: userInfo?.address?.state\nThis lead to make the value undefined, if it does't exist."
);
console.log(
  "How ?. Works:\nuserInfo?.address?.state\nIt will check is userInfo exists?\nIf yes then proceed to next i.e address\nIf not exist then return undefined there & will not proceed to next i.e address."
);
console.log("Methods:\nMethods are functions inside object.");
const user1 = {
  firstName: "Jashandeep",
  lastName: "Kaur",
  age: 21,
  // method start
  fullName: function (extraArgument) {
    console.log(
      `Persons FullName is: ${this.firstName} ${this.lastName}.`,
      extraArgument
    );
  },
  // method end
};
user1.fullName(); // Calling method
console.log(
  "this keywords:\nthis = whole object\nthis keywords have access to everything\nAbove in user1.fullName method, this refers to user1 i.e whole object."
);
// console.log(this);
console.log("use Strict:\nIts good to use strict mode while coding in JS.");
console.log("Call/Apply/Bind:");
console.log(
  "Call Method:\nWhen you want to use one object method inside another object, we use Call Method.\n"
);

const user2 = {
  firstName: "Arshpreet",
  lastName: "Kaur",
  age: 23,
};
console.log(user2);
console.log("Now we want to use fullName method of user1 inside user2.");
user1.fullName.call(user2, "Hii, I am extra Argument");
console.log(user2);
console.log(
  "As their going to be n number of usersObject. Better way of using Method is declared in function scope and then call inside every object.\nAs if we declare method inside every object that going to occupy alot of memory."
);
function personFullName(extraArgument) {
  console.log(
    `Persons FullName is: ${this.firstName} ${this.lastName}. ${extraArgument}`
  );
}
const user3 = {
  firstName: "Maninder",
  lastName: "Singh",
  age: 22,
  fullName: personFullName,
};
user3.fullName(); // methods call

const user4 = {
  firstName: "Manvir",
  lastName: "Singh",
  age: 13,
};
personFullName.call(user4); // call personFullName inside user4

console.log(
  "apply Method:\napply method is same as 'call method' [internally apply also use call method].\nJust the d/f is: call uses the extra Arguments in array form only."
);

const user5 = {
  firstName: "Paramvir",
  lastName: "Singh",
  age: 13,
};

personFullName.apply(user5, ["Hii, I am extra Arugment"]);

console.log(
  "bind method:\nbind method returns a function.\nbind method will not provide O/P as it return a function, we have to call it where required.\n"
);

const user6 = {
  firstName: "user6",
  lastName: "Singh",
  age: 13,
};
// we have store our method and will call where needed
const myBindMethod = personFullName.bind(user6, "Hii, I am extra Argument");
myBindMethod(); // called bind method
console.log(
  "Arrow function and this:\nAF always take 'this' from their surroundings one step up(i.e window object).\n"
);

const user7 = {
  firstName: "user7",
  lastName: "Singh",
  age: 13,
  about: () => {
    console.log(`name= ${this.firstName}, age= ${this.age}`);
  },
  about2: function () {
    console.log(`name= ${this.firstName}, age= ${this.age}`);
  },
};
user7.about();
console.log("Will work fine for normal function:");
user7.about2();
console.log("short syntax for declaring methods");
const user8 = {
  firstName: "user8",
  lastName: "Singh",
  about() {
    console.log(
      `Hii ${this.firstName}, I am short syntax for declaring methods.`
    );
  },
};
user8.about();
