console.log(
  "String Methods:\nThe String object is used to represent and manipulate a sequence of characters."
);
console.log("Special characters can be encoded using escape sequences:");

let firstName = "Jashandeep Kaur";
let age = 21;
// String Indexing:
// J a s h a n d e e p      K  a  u   r
// 0 1 2 3 4 5 6 7 8 9  10  11 12 13 14

console.log(`Lenght of my name is:  ${firstName.length}`);
// console.log (firstName.at(5));

// CharAt and at method
function findLast(arr) {
  return arr.at(-1); // Will nor work for chatAt method
}
let findLastWord = "Lastword0s";
console.log(findLast("findLastWord"));
console.log(findLastWord.charAt(6)); //Will not work for -1
console.log(typeof findLastWord);
console.log(findLastWord.at(4)); // Will work work for both -1 and 3

// charCodeAt()
// console.log(firstName.at(2));
console.log(firstName.charCodeAt(2));
// console.log(firstName.codePointAt(2));

// concat()
let str1 = "jashandeep";
let str2 = "kaur";
console.log(`I am concat method: ${str1.concat(" " + str2)}`);
// console.log(str2);

// endsWith()
const sentence = "sky awaits your presence, rise up.";
console.log(sentence);
console.log(`I am endWith method: ${sentence.endsWith("up.")}`);

// startsWith()
console.log(sentence.startsWith("sky", 0));

// include()
const sentence2 = "The doors of Waheguru Ji will never close for you";
const word = "Waheguru Ji";
console.log(sentence2);
console.log(
  `The word ${word} ${
    sentence2.includes(word) ? "is " : "is not "
  }present in sentence `
);

// indexOf()
const sentence3 = "This is my year of growth only my year";
const word1 = "my";
console.log(sentence3.length);
console.log(
  `Tell first occuring index of ${word1}: ${sentence3.indexOf(word1, 6)}`
); // 6 = from where to start search

// lastindexOf()
console.log(
  `Tell last occuring index of ${word1}: ${sentence3.lastIndexOf("my", 30)}`
); // 30 = search till this index

// padEnds()
const word3 = "Read More ";
console.log(word3.padEnd(12, "."));

// padStart()
const phone = "6353535353";
console.log(phone.length);
console.log(phone.padStart(13, "*"));

// repeat()
const sentence4 = "'I am happy' ";
console.log(`Display sentence "${sentence4}" 7 times: ${sentence4.repeat(6)}`);

// replace() and replaceAll()
console.log(sentence3.replace("my", "our"));
console.log(sentence3.replaceAll("my", "our"));

// search() its support reular Expression search
console.log(sentence3);
var regExp1 = sentence3.search(/[u-z]/);
console.log(regExp1);

// slice() returns a part of string
console.log(sentence3);
console.log(sentence3.slice(1, 10));

// spilt() split strig into array
const sentence5 = "Yellow Yellow Dirty Fellow ;)";
console.log(sentence5);
console.log(sentence5.split(""));
console.log(sentence5.split(" "));

// substring()
console.log(sentence3);
console.log(sentence3.substring(10, 17));

// toLowerCase() and toUpperCase()
console.log(sentence5.toUpperCase());
console.log(sentence5.toLowerCase());

// toString()
let word4 = 56;
console.log(typeof word4);
console.log(word4.toString());
console.log(typeof word4.toString());

// trim()
const sentence6 = "     Hii I am Jashan         ";
console.log(sentence6.trim());

// valueOf()
console.log("valueOf() method is the default method for JavaScript strings.\nIt is used internally by JavaScript.\nNormally, you will not use it in your code.")
