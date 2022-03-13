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
  age: 20,
  about() {
    console.log(
      `Hii ${this.firstName}, I am short syntax for declaring methods.`
    );
  },
};
user8.about();

console.log(
  "functions create multi objects:\nAnother way to create empty object:"
);

const obj1 = {
  key1: "value1",
  key2: "value2",
  age: 20,
  about() {
    console.log(`I belongs to obj1`);
  },
};

let obj2 = Object.create(obj1);
console.log(obj2);
console.log(
  "As we want to access a 'key' but not present in obj2 So, we want JS to check it in another object i.e in obj1\nTo do so we need to create object with:\nObject.create(object reference)\nBecause of this JS is now able to check an 'key' in obj1 & obj2.\nFirstly JS check the 'key' in obj2. If not found there then check into obj2\nThis happen bcz of prototype/proto only. As now obj1 is present in obj2 proto. Which you can see in the browser console when you print your whole object\nNote: Prototyping and prototype/proto are two d/f concepts.\nTwo ways of mentioning proto:\n__proto__ and [[prototype]]\nYou can also check proto of object by doing:"
);
console.log(obj2.__proto__);
console.log("Proto creates a chain/reference");
console.log(
  "Mainly use of Proto:\nAs we create a method & whenever we call that obj having method "
);
console.log(
  "Prototype:\nJS function -> function + Object\nWhen we create a function -> function give us a empty-object. That object called as Prototype.\nPrototype is an empty object of function in which we can add key value pair related"
);
function hello() {
  console.log("Hello");
}
console.log(hello.name);
console.log(hello.prototype);
console.log(
  "Only function provide prototype property.\nPrototype is used to add/remove values i.e, key value pair related to function."
);

// key value pair added
hello.prototype.abc = "abc";
console.log(hello.prototype);

const userMethods = {
  about() {
    return `FirstName: ${this.firstName} LastName: ${this.lastName}`;
  },
  is18() {
    return this.age >= 18;
  },
  sing() {
    return `la la la la laaa`;
  },
};

// constructor function
function CreateUser(firstName, lastName, age) {
  const user = Object.create(userMethods);
  user.firstName = firstName;
  user.lastName = lastName;
  user.age = age;
  return user;
}

const user11 = CreateUser("Jashandeep", "Kaur", 21);

console.log(user11);
console.log(user11.about());
console.log(user11.is18());
console.log(user11.sing());

console.log(
  "New Keyword:\nNew keyword is use to call the constructor function,\nBy using new Keyword we get:\n1. empty object\n2. return this (this={})Automatically create relation which we manually do by: Object.create(userMethods);"
);
// constructor created
function CreateUser2(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

// added into prototype
CreateUser2.prototype.about = function () {
  console.log(this.firstName, this.lastName, this.age);
};

CreateUser2.prototype.is18 = function () {
  return this.age >= 18;
};

CreateUser2.prototype.sing = function () {
  return `la la la la laaa`;
};

// object created
const user12 = new CreateUser2("firstName", "lastName", 23);

console.log(user12);
user12.about();

console.log(
  "Their is a convention: If their is a function that going to be called by using new Keyword that function name should have first word Capital.\neg: We have made an JS library then how will the users know that we have to use new keyword with this function thats why this convention is used."
);

console.log(
  "hasOwnProperty:\nIf we using key:value having proto and prototype by using Loop. It will return its property & proto and prototype values as key too.\nSo, if you want to print only object's ownProperty then we use hasOwnProperty(key)."
);

console.log("All values including proto & prototype:");
for (const userEle in user12) {
  console.log(userEle);
}
console.log("Objects OwnProperties:");
for (const userEle in user12) {
  if (user12.hasOwnProperty(userEle)) {
    console.log(userEle);
  }
}

console.log("More about Prototype:\n");
let num1 = ["1", "2", "3", "4", "5"];
console.log(
  'Internally JS consider this array:\nlet num1 = ["1", "2", "3", "4", "5"];\nAs:\nlet num = new Array(1,2,3,4,5);\nIt uses Array Constructor.'
);
console.log(
  "As in this array you can use any of array methods. But from where these methods come from???\nThese methods are stored in Array Prototype i.e, JS Array Constructor."
);
console.log(num1.filter);
console.log(
  "You will get list of array methods in Array form bez who created JS has stored these methods inside an empty Array. Firstly empty array created then push all the methods in it. Thats why It always seen as inside array instead of object."
);
console.log(Array.prototype);
console.log(
  "class Keywords:\nIt will help us to do work actually we do like:\nAlways call class by using 'new' keyword.\n"
);

class CreateUser4 {
  // Constructor function create object for us
  constructor(firstName, lastName, age, email, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.address = address;
    // No need to mention return here as Constructor by default return Object
  }
  about() {
    console.log(this.firstName, this.lastName, this.age);
  }
  is18() {
    return this.age >= 18;
  }
  sing() {
    return `la la la la laaa`;
  }
  print(a) {
    console.log(a);
  }
}
const user14 = new CreateUser4(
  "Jashandeep",
  "Kaur",
  21,
  "jashan@gmail.com",
  "Punjab"
);

console.log(user14);

console.log(
  "Firstly constructor execute & it will create an object user14\nthen about & other methods automatically added in prototype.\nTo create object we need to call constructor -> To call constructor you always need to call it by using 'new' keyword"
);

console.log(user14.sing());
user14.print("Hiii, I am Parameter into Prototype.");
console.log("Other way to see Prototype:");
console.log(Object.getPrototypeOf(user14));
console.log("extend Keyword:\n");

class Animal {
  // Constructor function create object for us
  constructor(firstName, age) {
    this.firstName = firstName;
    this.age = age;
    // No need to mention return here as Constructor by default return Object
  }
  eat() {
    return `${this.name} is eating `;
  }
  isCute() {
    return "Yes";
  }
  isSuperCute() {
    return this.age <= 2;
  }
}

const user15 = new Animal("rabbit", 1);
console.log(user15);
console.log(user15.isCute());
console.log(
  "Now we want a class having same property and methods.\nIn this case 'extends' keyword help us."
);

class Dog extends Animal {}
const user16 = new Dog("rabbit", 2);
console.log(user16);
console.log(user16.isSuperCute());

console.log(
  "Animal is called as Base class\nDog is called as sub-class/Derived class of Animal class.\nFirstly look for values in Dog, if not found then go to Animal class for constructor and methods\nAnimal class's all property is extended inside Dog class and Dog class now have all the property Animal has and we can use Animal constructor and method inside Dog class."
);

console.log("super Keyword:\nsuper keyword refers to our parent/base class:");

class Cat extends Animal {
  constructor(firstName, age, speed) {
    console.log(
      "here in super keyword by passing params. We say:-\nthese name/age parameter belongs to its base/parent class.Means we telling use this from their parents"
    );
    super(firstName, age);
    this.speed = speed;
  }
  run() {
    return `${this.firstName} cat run by speed of ${this.speed}km/h`;
  }
}

const CatUser = new Cat("Meow", 1, 22);
console.log(CatUser);
console.log(CatUser.run());

console.log(
  "Note:\nIf you are creating same method in Base class, then Base class's method will consider first. As JS firstly find properties base class and If not found in Base class then move to Parent class in search of property."
);
console.log("getter & setter:");
console.log(
  "getter let us use a method same as properties.Like(person.fullName)"
);
console.log("setter is use to set property. It always requires an parameter");

class Person {
  constructor(firstName, lastName, fullName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = fullName;
  }
  funFullName() {
    return `FullName: ${this.firstName} ${this.lastName}`;
  }

  get getFullName() {
    return `GetFullName: ${this.firstName} ${this.lastName}`;
  }

  set SetFullName(fullName) {
    this.fullName = "Jashndeep Kaur Mehton";
    const [fname, lname, surname] = this.fullName.split(" ");
    this.fname = fname;
    this.lname = lname;
    this.surname = surname;
    return `${this.fname}`;
  }
}
const person3 = new Person("Jashandeep", "Kaur");
console.log(person3.funFullName());
console.log(person3.getFullName);
console.log(person3.SetFullName);

console.log(
  "static methods and properties:\nstatic methods and properties are those which we define in our class by using 'static' keyword. You can't use static methods and properties with object As they only belong to class not to its object. You can access static methods and properties by using className."
);

class StaticExample {
  static info() {
    return `Hii, I am static method`;
  }
  static description = "Static Property";
}

console.log(StaticExample.info());
console.log(StaticExample.description);
