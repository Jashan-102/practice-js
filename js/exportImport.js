console.log("ES6 Modules: introduced in ES6[2015] year.");
console.log(
  "It lead us to use multiple files for our code. i.e, you can split your code among multiple files."
);

console.log("To do so we have to use:");
console.log("import: import the function from a file.");
console.log("export: export the function where define it.");
console.log(
  "type= 'module': This lead us to use ES6 modules and also do the defer work.So, we no need to add defer with type='module'"
);
// <script type="module" src="my.js"></script>

console.log("Also you can rename the export function while importing it.");
// import {firstName as fname} from 'abc.js'

console.log("export default:");
console.log(
  "export default lead to import function name without wrapped in currly braces.\nYou can only use one export default in one file."
);
console.log("With export default:");
// import firstName from 'abc.js'
console.log("Without export default:");
// import {firstName} from 'abc.js'
