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

console.log(
  "Create Promises OR Produce Promises:\nPromise took two parameters:\n1. resolve-Its is a method you can use when a promise is fulfilled.\n2. reject\nwhich are also functions.\nPromise constructor is used to create a Promise."
);

const bucket = ["vegetables", "rice", "salt"];

const friedRice = new Promise((resolve, reject) => {
  if (bucket.includes("no")) {
    resolve("Fried Rice");
  } else {
    reject("No Fried Rice");
  }
});
console.log(friedRice);

console.log(
  "How to use Promise OR Consume Promise:\nAs JS developer You consume Promise more than Produce.\nHow to consume Promise is important than Produce:\n"
);

console.log(
  ".then is a method.\n.then took 2 Callbacks.\n1. First one is for resolved O/P.\n2. Second one is for error/rejected O/P [optional]"
);
friedRice.then(
  (res) => {},
  (err) => {}
);

friedRice.then(
  (res) => {
    console.log("Lets eat", res);
  },
  (err) => {
    const error = new Error(err);
    console.log(error);
  }
);

console.log("You can also use Error Constructor for error message");

console.log(
  "error callback in .then method is optional\nInstead of it we use .catch method."
);
console.log(
  ".catch method: It placed after .then method which lead to catch error Or handle reject case."
);

friedRice
  .then((res) => {
    console.log("Lets eat", res);
  })
  .catch((err) => {
    console.log(err);
  });

console.log(
  "Promises works Asynchronously.As Promise task assigned to or handle by browser.\nPromise is a object having 2 values in it.\n{state: , value: }"
);
console.log(friedRice);

console.log(
  "Promise Async Description:\n1. Firstly Promise Produce and Promise object created.\n2. Promise consume task is being assigned to or handle by browser. Browser and Promise objects in memory having connection with each other to perform tasks.\n3. When Promise is resolved by browser it will give .then method to MicrotaskQueue. If rejected .catch method will be place in MicrotaskQueue. All the promises wait in MicrotaskQueue and eventLoop handle their execution. When the callStack empty, eventLoop assign that task to callStack for execution."
);

console.log(
  "Promise and setTimeout:\nMicrotaskQueue has high priority.\nIf their is task present in callback Queue and in MicrotaskQueue:\nFirstly MicrotaskQueue execution performed."
);

console.log("Function returning Promise:\n");

function myPromise() {
  const name = ["Jashandeep", "Maninder", "Arsh"];
  return new Promise((resolve, reject) => {
    if (name.includes("Arsh")) {
      resolve("Yes");
    } else {
      reject("Not");
    }
  });
}

// myPromise()
//   .then((res) => {
//     return console.log(res, "Present");
//   })
//   .catch((err) => {
//     return console.log(err, "Present");
//   });

console.log("Promise and setTimeout:");
function myPromise2() {
  const name2 = ["Jashandeep", "Maninder", "Arsh"];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name2.includes("Arsh")) {
        resolve("2 Yes");
      } else {
        reject("2 Not");
      }
    }, 2000);
  });
}

myPromise2()
  .then((res) => {
    return console.log(res, "Present");
  })
  .catch((err) => {
    return console.log(err, "Present");
  });

console.log(
  "Promise resolve and Promise chaining:\n.then method always return a Promise. You can also store this in a variable to check."
);

const isPromiseMyPromise2 = Promise.resolve("abc");

console.log(
  "Promise always return something. If you not mention return O/P will be undefined.\nReturned value is equal to\nPromise.resolve('value')\nThis has returned promise to us now we can use .then menthod"
);

console.log("Promise chaining means using .then method again and again");
myPromise()
  .then((res) => {
    console.log(res);
    return res;
  })
  .then((res) => {
    console.log(res);
    return res;
  })
  .then((res) => {
    console.log(res);
    return res;
  })
  .then((res) => {
    console.log(res);
    return res;
  });

console.log(
  "Callback hell to flat Code:Callback hell can be solve using Promises"
);

function changeText2(element, text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.textContent = text;
        resolve();
      } else {
        reject();
      }
    }, time);
  });
}

changeText2(headings[0], "One", 1000)
  .then(() => changeText2(headings[1], "Two", 1000))
  .then(() => changeText2(headings[2], "Three", 1000))
  .then(() => changeText2(headings[3], "Four", 1000))
  .then(() => changeText2(headings[4], "Five", 1000))
  .then(() => changeText2(headings[5], "Six", 1000))
  .then(() => changeText2(headings[6], "Seven", 1000))
  .then(() => changeText2(headings[7], "Eight", 1000))
  .catch(() => alert("Error"));
