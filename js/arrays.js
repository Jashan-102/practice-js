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
