console.log("AJAX: Asynchronous JS and XML");
console.log(
  "XML is a data format, we don't use it now. We use JSON instead. No more XML format."
);

console.log(
  "Browser(Client) requests server(Backend) for data through HTTP requests.\nHTTP requests: Client and server communicate using HTTP requests."
);

console.log(
  "AJAX is a set of 'web development techniques' belongs to client-side to create Asynchronous web applications.\nWith AJAX, web applications can send and retrieve data from server Asynchronously(in background) without interfering with the display and behavior of existing page.\nWe use JSON data format now. No more XML format."
);

console.log("3 common way to create and send requests to server:");
console.log(
  "1. xmlHTTPRequest (old way)\n2. fetch API (New way, mostly used now days)\n3. axios (Third party library, mostly used now days)"
);

console.log(
  "To send and create requests to server can call: HTTP request, API call, API request."
);

console.log(
  "XHR: XML HTTP Request. XMLHttpRequest() is constructor method which returns a XHR object."
);

const xhr = new XMLHttpRequest();
console.log(xhr);

console.log(
  "REST API methods or HTTP methods or HTTP verbs:\n1. GET (Get existing data)\n2. POST (Create data)\n3. PUT (Update in existing data)\n5. PATCH (Minor update in existing data)\n5. DELETE (Delete data)"
);

console.log(
  "Browser by default always create a 'GET' request.\nAPI response is always in string format."
);

console.log("Dev Tools:");
console.log(
  "Dev Tools > Network > Headers\nYou may see 3 sub-headings:\nGeneral- It shows General API information\nResponse Header- It shows Server's response information\nRequest Header- It shows send info from client side to server."
);

console.log(
  "Dev Tools > Network > Response\nIt shows response from API or server in JSON format."
);

console.log("You can use API methods in both 'lowercase' and 'uppercase'.");

console.log("JSON: JavaScript Object Notation");
console.log(
  "d/f b/w JSON and JS object:\nJS object: key: 1\nJSON: 'key': 1, key always need double quotes, You can't use methods init."
);

const URL = "https://jsonplaceholder.typicode.com/posts";

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
console.log("Your API has a state, which you can check by using xhr Object.");

console.log(xhr);
console.log(xhr.onreadystatechange);

console.log("Ready states are:");
console.log("Value > State > Description");
console.log("0 > UNSENT > Client has been create xhr.open but not called yet.");
console.log("1 > OPENED > xhr.open has been called.");
console.log(
  "2 > HEADERS_RECEIVING > xhr.send() called, headers and status available."
);
console.log("3 > LOADING > Downloading: responseText hold partial data.");
console.log("4 > DONE > operation is completed.");

console.log(
  "xhr.response:\nOn readystate 4, we get the response in JSON format.\nJSON always in string form.You can check it by using typeof of xhr.response"
);

console.log(
  "To convert JSON data into JS object we need to parse the response data."
);
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    const response = xhr.response;
    console.log(typeof response);
    var data = JSON.parse(response);
    console.log(typeof data);
    console.log(data);
    console.log(xhr.status);
  }
};

console.log("status Code:");
console.log("You get this from Status code MDN doc.");
console.log(xhr.status);
console.log("xhr.load():\nThis function only work when readyState = 4");

xhr.onload = () => {
  const response = xhr.response;
  console.log(typeof response);
  var data = JSON.parse(response);
  console.log(typeof data);
  console.log(data);
  console.log(xhr.status);
};

console.log("XHR error Handling:");
console.log("1. Parse response after status code = 200");
console.log("2. Network related error handling:");
xhr.onerror = () => {
  console.log("Network error");
};
console.log(
  "You can  also get specific user data by passing its ID into API URL."
);

console.log("This code creates mess. We can use the Promises with XHR.");

function sendRequest(method, url) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error("Something Went wrong"));
      }
    };

    xhr.onerror = function () {
      reject(new Error("Something went wrong"));
    };

    xhr.send();
  });
}

sendRequest("GET", URL)
  .then((res) => {
    const response = JSON.parse(res);
    console.log(response);
    return response;
  })
  .then((data) => {
    const id = data[3].id;
    return id;
  })
  .then((id) => {
    const url = `${URL}/${id}`;
    return sendRequest("GET", url);
  })
  .then((newResponse) => {
    0;
    const newData = JSON.parse(newResponse);
    console.log(newData);
  })
  .catch((error) => {
    console.log("error");
  });

console.log("Fetch API:");
console.log(
  "1. It is a JS function.\n2. It always returns a Promise means .then() works with this.\n3. By default fetch API create GET request."
);

fetch(URL)
  .then((response) => {
    console.log("aa", response);
    return response.json();
  })
  .then((data) => {
    console.log("Fetch Data", data);
  })
  .catch((err) => {
    console.log("Fetch API: Network Error");
  });

console.log(
  "The catch block execute when Promise rejected. Fetch function only reject when their is Network Error means when their is no Internet. Only then catch block runs."
);

console.log(
  "Question arise: How can we check their is an Error in fetch API response. In response object you will got a key named 'OK'.\nIf its value is 'false' means failed. If 'true' means success."
);

fetch(URL)
  .then((response) => {
    console.log("aa", response);
    if (response.ok) {
      return response.json();
    } else {
      console.log("Error in response");
    }
  })
  .then((data) => {
    console.log("Fetch Data", data);
  })
  .catch((err) => {
    console.log("Fetch API: Network Error");
  });

console.log(
  "By default fetch do GET API request. when we want to us other request. When we want to use other request."
);

console.log(
  "body: JSON.stringify({}): As we always get data in JSON format.\nSo, need to send data also in JSON format. Thats why we declare this method. ANd inside this we define which data will be used."
);

console.log("headers: {}: It is most important. charset is optional.");

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => {
    console.log("POST", response);
    if (response.ok) {
      return response.json();
    } else {
      console.log("Error in response");
    }
  })
  .then((data) => {
    console.log("Fetch Data", data);
  })
  .catch((err) => {
    console.log("Fetch API: Network Error");
  });

console.log(
  "async await:\nIt is a way of consuming Promise. async await is a optimized way of using .then()/Promise.\nBehind the scenes async await also uses .then()/Promise keywords."
);

console.log(
  "async: This make a normal function to Promise and that function will always return a Promise.This function will work asynchronously means by browser."
);

console.log(
  "await: This is like .then() after resolve. This will wait for Promise to be resolved or reject. As prior we use .then()/.catch(). Here we use await."
);

async function getPost(URL) {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

getPost(URL)
  .then((data) => {
    console.log("async await", data);
  })
  .catch((error) => {
    console.log("Network Erro-r");
  });

console.log("async await with arrow function:");
const myfunc = async () => {};

