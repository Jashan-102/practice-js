console.log("DOM: Document Object Model");
console.log(
  "Ways to link JS file into HTML:\nTheir is a HTML file, browser start parse it means start read and execute it line by line. Browser found this JS script in <head></head> of the document\n<script src='myjs.js'></script>\nNow HTML parsing stoped and browser start executing this JS script. JS will throw error bcz the HTML elements we have defined into the document is not executed by browser yet so, for browser it doesn't exist which lead to JS failure."
);

console.log(
  "2. We can use <script src='myjs.js'></script> tag at the end of the HTML and just before the closing </body> tag.\nBut this way lead to time consuming.As:\nHTML parsed\nJS load\nJS execution"
);

console.log(
  "3. async keyword:\n<script src='myjs.js' async></script>\nThis async keyword  will lead to ask browser continue HTML parsing along with JS load.\nBut, when JS loaded, then browser stop HTML parsing and start JS execution. This also lead to an problem as JS execution starts and HTML is not fully loaded yet."
);

console.log(
  "4. defer keyword:\nuse this script inside <head></head> tag\n<script src='myjs.js' defer></script>\ndefer lead to parse and load JS at same time like async keyword.\nBut it will not directly start execute JS when JS is loaded done.\nIt will wait for HTML fully parsed then start JS execution.\nIts is time saving as HTML parsing and JS loading done, just left JS execution"
);

console.log(
  "DOM: Document Object Model:\nAs browser start parsing HTML an object created whose name is document. You can find this document object inside window object (window.document). This document object has our all HTML elements in object from inside init."
);

console.log(
  "This lead to show human readable represention of document object:\n",
  window.document
);
console.log("This lead to JS represention of document object:");
console.dir(window.document);

console.log("document object has alot of properties Or you can say 'events'.");

console.log(
  "JS methods/ Properties/ Events:\n1. getElementById:\nNow this will return us an object as we know JS store HTML elements inside document objects in form of object. You can check type by using typeof.\n2. querySelector"
);

console.log(
  "getMultiple elements:\n1. getElementByClassName\n2. getElementByTagName\n3. querySelectorAll\n"
);

console.log(
  "Both getElementByClassName and getElementByTagName will be return list of elements occured in the form of Array like object. Both will show list of items inside HTMLCollection"
);

console.log("This will show list of items inside NodeList.");

console.log(
  "Ways to iterate elements:\n1. for loop\n2. for of loop\n3. forEach loop"
);

console.log(
  "HTMLCollection: You can't use forEach method in the case of HTMLCollection O/P. Because we need Array not Array like object. So, to use we have to firstly convert them into Array like:"
);

let headItem = document.getElementsByClassName("myhead");
console.log(headItem);
// headItem.forEach(value => console.log(value));
headItem = Array.from(headItem);
console.log(headItem);
headItem.forEach((value) => console.log(value));

console.log(
  "NodeList: In this case you can use any of list and also can use Array chnage methods"
);

console.log("textContent and innerText:\nBoth are for change the text.");

const mytxt = document.getElementById("mytext");
console.log(mytxt);
console.log(mytxt.textContent);
console.log(mytxt.innerText);
mytxt.textContent = "Hii, I am Jashan";
// mytxt.innerText = "Hii, I am Jashan";
console.log(mytxt.textContent);
console.log(
  "d/f b/w both textContent and innerText is:\ntextContent will return the whole text inside element, even if it was hidden by 'd-none'.\ninnerText will return the text on screen only"
);

console.log(
  "Change style of element:\nIt took:\nelement.styleObject.property= 'value'\nJS use CamelCase for CSS properties."
);
mytxt.style.color = "red";
mytxt.style.backgroundColor = "hotpink";

console.log(
  "get/set Attributes:\nThese are use to get and set tags attributes."
);

const mytxt2 = document.getElementById("mytxt2");

console.log(mytxt2.getAttribute("class"));
mytxt2.setAttribute("class", "abc");
console.log(mytxt2.getAttribute("class"));

console.log(
  "innerHTML:\nWe are targeting a div or div's element then, that's div's all child belong to that div's innerHTML."
);

const myheading = document.querySelector(".head");
console.log(myheading);
// myheading.innerHTML = "<h1>Hello world</h1>";
console.log(
  "This lead to Add HTML inside a p articular selected element.\n[+=]: This means Add this with the already defined HTML.\n[\"\"]: As we can't use '' this inside ''. So. we can use this \" \" it will not throw an error."
);
myheading.innerHTML += '<h1 class="abc">Hello world</h1>';
console.log(myheading);

console.log("DOM Tree:\nimg add krna hai.");

console.log("Traversing the DOM tree:");
const rootNode = document.getRootNode();
console.log(rootNode);
const htmlNode = rootNode.childNodes;
console.log(htmlNode);
const headElementNode = rootNode.childNodes[1];
console.log(headElementNode);
const parentElementNode = headElementNode.parentNode;
console.log(parentElementNode);

const Childs = headElementNode.childNodes[0];
console.log(Childs);

const nextsinlings = headElementNode.childNodes[0];
console.log(nextsinlings.nextSibling);
console.log("This will return nextSibling but always ignore TextNode");
console.log(nextsinlings.nextElementSibling);

console.log("This is same as childNode, it will ignore TextNode");
console.log(nextsinlings.children);

console.log(
  "On Traverse the Nodes, we can see TextNode which having spaces, but we never seen these spaces in out HTML page bcz by default browser sets a CSS:\nwhite-space: normal"
);

console.log("Classlist/add/remove/toggle:");

const selectHead = document.querySelector(".head");
console.log(
  "list of classes used inside this class's div\n",
  selectHead.classList
);
console.log("Add a class:\n", selectHead.classList.add("xyz"));
console.log("Remove a class:\n", selectHead.classList.remove("xyz"));
console.log("Toggle a class:\n", selectHead.classList.toggle("xyz"));
console.log(
  "Toggle a class means:\nif not present- Add it\nIf present-remove it"
);

console.log(
  "Add HTML elements using JS:\ninnerHTML, creatElement, append, prepend, remove, before, after\ninnerHTML: We never use this way bcz this lead to an performance issue. As whenever a new HTML add by using innerHTMl it reload all the items related to that query.\nBut you can use it in case where you want to change an single text."
);

console.log("creatElement:\nIt will create a new HTML element.");
const myTodo = document.createElement("li");
const myTodo2 = document.createElement("li");
console.log(myTodo);
console.log("Ways to add text into it:\n");
// const addtextNode = document.createTextNode("New added")
// console.log(addtextNode);
myTodo.textContent = "Newly added";
myTodo2.textContent = "Newly added by insertAdjacentElement";
console.log("To add it:");
const toDoList = document.querySelector(".todoList");
console.log("It will add new HTML at the end of element");
toDoList.append(myTodo);
console.log("It will add new HTML at the starting of element");
toDoList.prepend(myTodo);
console.log("It will add new HTML before the selected element");
toDoList.before(myTodo);
console.log("It will add new HTML after the selected element");
toDoList.after(myTodo);
console.log(
  "It will remove the element.\nAs querySelector only look for first occurrence, So, first element removed"
);
const todo1 = document.querySelector(".todoList li");
console.log(todo1);
todo1.remove();

console.log(
  "insert Adjacent HTML: Other way of Adding HTML element. In which the HTML element and where to add are used as params."
);

toDoList.insertAdjacentElement("beforebegin", myTodo2); // before
toDoList.insertAdjacentElement("afterbegin", myTodo2); // prepend
toDoList.insertAdjacentElement("beforeend", myTodo2); // append
toDoList.insertAdjacentElement("afterend", myTodo2); // after

console.log(
  "Clone Nodes:\nYou want to use both append and prepend. Todo so we have to clone the Node"
);

const li = document.querySelector("li");
console.log(li);
li.textContent = "New Added by Clone Nodes";
console.log(
  "li.cloneNode() will clone li into li2. And this true lead to do deep cloning also: clone with their children"
);
const li2 = li.cloneNode(true);
toDoList.append(li);
toDoList.prepend(li2);

console.log(
  "static list and live list:\nNodeList querySelectorAll belongs to static list\nHTML Collection getElementById belong to live list"
);

console.log(
  "get dimension of an element:\ngetBoundingClientRect() will return us all the object of element with their width, height and other properties.\nIt also provide top/bottom and onScroll their values change and go into negative"
);
console.log(toDoList.getBoundingClientRect());
console.log("To get specific property");
console.log(toDoList.getBoundingClientRect().top);

console.log(
  'events:\nOn action perform a Task.\nWays to use events:\n1. <button onClick="Task">Click ME!</button>'
);

const btn = document.getElementsByTagName("button");
console.log("2.Add EventListener Method:", btn);
// btn.addEventListener("event", function doSomething() {
//   // to something
// });

console.log(
  "This keyword inside event listener callback function:\nThis value will be the selected element. i.e, btn in this case.\nIn case of arrow function It will be window object as in arrow function, for this it always look a step up for this value. So, it will not consider btn but one step up i.e, window object"
);

console.log(
  "event on Multiple elements:\nYou can do so, by using loops:\nfor of loop\nfor loop\nforEach loop.\nSelect all the elements then apply loop to it."
);

const allH1 = document.querySelectorAll("h1");
console.log(allH1);
allH1.forEach((value) => {
  console.log(value.innerHTML);
});

console.log(
  "event Object:\nJS Engine execute code line by line\nJS Engine also have some extra features + WebAPIs\nWhenever a event perform browser do 2 things:\n1. give callback function to JS Engine for execution.\n2. With callback function it also give performed event info in the form of object. We can access this event object by passing it as an argument in function. You can keep any name for this event object i.e, e, event, abc."
);

console.log(
  "Now, as its hard to use arrow function in EventListener bcz that lead to problem with this keyword. So, we can use event object with arrow functions. Which provide us set of objects having info related to that event"
);

console.log(
  "events behind the scenes:\nTheir is a:\nJS Engine and inside it callback\nWeb API\nEvent Loop\nCallback Queue"
);
console.log(
  "JS Engine: Lead to execution of JS code as it has Callstack / GEC inside it"
);

console.log(
  "Web API: These are browser APIs which lead to help browser to complete the tasks which going to be hard while executing JS"
);

console.log(
  "Callback Queue: It is a Queue where EventListener's callback functions waits to perform events"
);

console.log(
  "Event Loop: It lead to take care about send callback function present in callback Queue to the CallStack for execution. It look for when CallStack is free, so, it can send Callback Queue's Callback to the CallStack."
);

console.log(
  "eg: We are using onClick event, So, browser will keep his eyes on button clicks. So, that  it can run its callback function."
);

// btn.addEventListener("click", (e) => console.log(e));

console.log(
  "When JS engine look something like this (i.e, eventListener) then, It assign this to browser and browser Web APIs keep his eyes on task. So, that JS engine will not stuck their by keep eyes on event perform. It continue its execution.\nEvent Loop will look for empty callStack and then assign callback function to CallStack for execution"
);

console.log(
  "Keypress / mouse events:\nTheir are many events you can use:\nkeypress:"
);

// body.addEventListener("keypress", function(e){
//   console.log(e)
// })

console.log("Event bubbling OR event propagation:\n");
console.log(
  "Event bubbling is when you have clicked on event , then its parent's callback will also called, then its parent callback will be called.\nits parent callback will be called means its ancestors called.\nTo stop bubbling you can use:\nevent.stopPropagation()"
);

console.log(
  "Event Capturing:\nIn this addEventListener took three values:\nbtn.addEventListener('click', callback, true)\nThis true boolean value defined for declaring is we want to capture the event OR not.\nCapturing first goes through ancestors chain down."
);

console.log(
  "Capturing and bubbling:\nYou can consider them an event processing phases.\n1. Capturing Phase: event goes down to the element\n2. Targets Phase: event reach to the element\n3. Bubbles Phase: event bubbles up from the element"
);
console.log("img");
console.log(
  "The event first goes through ancestors chain down to the element i.e, Capturing Phase\nThen it reach to the target and triggers there i.e, Targets Phase\nThen it goes up (i.e, Bubbling Phase) calling handlers on its way.\nIt work like:\nCapturing --- Bubbling"
);

console.log(
  "Event Delegation:\nCapturing and bubbling allow us to implement one of the most powerful event handling patter called event delegation.\nIf you want a lot of elements handle in similar ways, then instead assigning a handler to each of them. We put a single handler for each element on their common ancestor."
);

console.log(
  "eg: We have added handlers to ancestor i.e, grandparent but it also work with when we click on child element. This is called event delegation\nIt happen because on click bubbling goes upwards to check and call parent's callback."
);
