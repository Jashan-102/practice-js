console.log("Asynchronous JS:");
console.log(
  "Synchronous Programming:\nJS execute step by step As it is a synchronous programming and single threaded language."
);

console.log(
  "setTimeout():\nThis function is provided by browser not by JS.\nWhenever JS find this function it will assign it to browser APIs to look for it till the defined time finishes.\nsetTimeout(callback function, minimum Time)"
);

console.log(
  "When the time finish the callback function go to the callback Queue and event loop will wait for callStack getting free[After executing entire script].\nEvent loop will assign the callback function to callStack for execution.\nsetTimeout minimum Time is always in milliseconds.\nEvery setTimeout having its unique Id. You can store it into a variable:"
);

const setTimeoutID = setTimeout(() => {
  console.log("Hii");
}, 2000);
console.log(setTimeoutID);

console.log(
  "clearTimeout(id):\nThis method took a setTimeout's id as parameter. This lead to stop or terminate the setTimeout method."
);

console.log(
  "setInterval():\nIt is also browser's method. It is same a 'setTimeout' method'. But, 'setTimeout' execution once only but setInterval lead to execute the code after the specified minimum Time."
);

// setInterval(() => {
//   const red = Math.floor(Math.random() * 256);
//   const green = Math.floor(Math.random() * 256);
//   const blue = Math.floor(Math.random() * 256);
//   const randomColor = `rgba(${red}, ${green}, ${blue})`;
//   return   document.body.style.backgroundColor = randomColor;;
// }, 2000);

console.log(
  "Callbacks:\nCallbacks are mostly used in Async Programming.\nAsync Callback: Callback, Callback hell, pyramid of doom\nCallback hell: It is nested callbacks. Solution of this is Promises."
);

console.log(
  "Callback Hell:\nSuppose we have to change the color of headings after 2-2 seconds."
);
const headings = document.querySelectorAll(".myhead");
console.log(headings);
// setTimeout(() => {
//   console.log(headings);
//   headings[0].textContent = "One";
//   setTimeout(() => {
//     console.log(headings);
//     headings[1].textContent = "Two";
//     setTimeout(() => {
//       console.log(headings);
//       headings[2].textContent = "Three";
//       setTimeout(() => {
//         console.log(headings);
//         headings[3].textContent = "Four";
//         setTimeout(() => {
//           console.log(headings);
//           headings[4].textContent = "Five";
//           setTimeout(() => {
//             console.log(headings);
//             headings[5].textContent = "Six";
//             setTimeout(() => {
//               console.log(headings);
//               headings[6].textContent = "Seven";
//               setTimeout(() => {
//                 console.log(headings);
//                 headings[7].textContent = "Eight";
//               }, 2000);
//             }, 2000);
//           }, 2000);
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

console.log("The pyramid of doom:\nIts solution is also Promises.");
console.log("Lets try to solve the same problem using function.");

function changeText(element, text, time, onSuccess, onFailure) {
  setTimeout(() => {
    if (element) {
      element.textContent = text;
      if (onSuccess) {
        onSuccess();
      }
    } else {
      if (onFailure) {
        onFailure();
      }
    }
  }, time);
}

// changeText(headings[0],'One',2000,() => {
//   changeText(headings[1],'Two',2000,() => {
//     changeText(headings[2],'Three',2000,() => {
//       changeText(headings[3],'Four',2000,() => {
//         changeText(headings[4],'Five',2000,() => {
//           changeText(headings[5],'Six',2000,() => {
//             changeText(headings[6],'Seven',2000,() => {
//               changeText(headings[7],'Eight',2000,() => {

//               },()=>console.log("Failed to change text"))
//             },()=>console.log("Failed to change text"))
//           },()=>console.log("Failed to change text"))
//         },()=>console.log("Failed to change text"))
//       },()=>console.log("Failed to change text"))
//     },()=>console.log("Failed to change text"))
//   },()=>console.log("Failed to change text"))
// }, ()=>console.log("Failed to change text"))

console.log(
  "Promises:\nPromise is a object.\nPromise is browser feature not of JS.\nPromises lead to value we not have yet, but will get in future.\nPromise = future value\nPromise firstly know as 'future value'. After that it named as Promises."
);

console.log("Promises status:\n1. Pending\n2. Fullfilled\n3. Rejected");

console.log("Create Promises OR Produce Promises:\n");
