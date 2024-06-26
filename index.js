//Step 1

let subscribers = {
  firstName: "",
  lastName: "",
  street1: "",
  street2: "",
  city: "",
  state: "",
  zipCode: "",
  ID: "",
  subscriptionArray: [
    //use brackets for array list
    { type: "Friend", numberOfCopies: "3" },
    { type: "Liahona", numberOfCopies: "1" },
    { type: "Ensign", numberOfCopies: "2" },
    { type: "Seer", numberOfCopies: "1" },
    { type: "Era", numberOfCopies: "1" },
    { type: "Contributor", numberOfCopies: "1" },
  ],
};

function createSubscriber(firstName, lastName, street1, street2, city, state) {
  const subscribers = {
    firstName,
    lastName,
    street1,
    street2,
    city,
    state,
  };

  if (subscribers.state === "Utah") {
    console.log("true");
  } else {
    console.log("false");
  }
  return subscribers;
}

const subscriber1 = createSubscriber(
  "Jeff",
  "Ding",
  "123 Main St",
  "42",
  "Salt Lake",
  "Utah",
  "84129",
  "123"
);
console.log(subscriber1);

function updateSubscripber(subscribers, newState) {
  subscribers.city = newState;
}

const newState = "California";
console.log(newState);

//Step 2

//Learn about arrow functions and use them to create the functions below.

// The parentheses can only be omitted if the function has a single simple parameter
// If it has multiple parameters, no parameters, or default, destructured, or rest parameters, the parentheses around the parameter list are required.
// The braces can only be omitted if the function directly returns an expression. If the body has additional lines of processing, the braces are required

let subscribersArray = [
  //use brackets for array list
  {
    firstName: "Jeff",
    address: "Main St",
    city: "Provo",
    ID: "145",
    age: "25",
  },
  {
    firstName: "John",
    address: "Main St",
    city: "Taylorsville",
    ID: "135",
    age: "20",
  },
  {
    firstName: "Jason",
    address: "Main St",
    city: "West Valley",
    ID: "456",
    age: "21",
  },
  {
    firstName: "Sam",
    address: "Main St",
    city: "South Jordan",
    ID: "897",
    age: "22",
  },
  {
    firstName: "Clark",
    address: "Main St",
    city: "Riverton",
    ID: "123",
    age: "23",
  },
  {
    firstName: "Jackson",
    address: "Main St",
    city: "Sandy",
    ID: "345",
    age: "24",
  },
  {
    firstName: "Sarah",
    address: "Main St",
    city: "Draper",
    ID: "998",
    age: "25",
  },
  {
    firstName: "Molly",
    address: "Main St",
    city: "Highland",
    ID: "767",
    age: "26",
  },
  { firstName: "Adam", address: "Main St", city: "Orem", ID: "490", age: "27" },
  { firstName: "Levi", address: "Main St", city: "Lehi", ID: "001", age: "28" },
];

//the parameters enclosed in the parentheses represent the input values that the function expects to receive when it is called.
const subscriberInfo = (subscribersArray) => {
  for (let i = 0; i < subscribersArray.length; i++) {
    // console.log(subscriber[i]); //allows to access each subscriber object in the array
    const subscriber = subscribersArray[i];
    console.log(`Name: ${subscriber.firstName}`);
    console.log(`Address: ${subscriber.address}`);
  }
};
// Call the subscriberInfo function with subscribersArray as argument
subscriberInfo(subscribersArray);

//add a new subscriber function
const updateArray = (subscribersArray, firstName, address) => {
  const newSubscriber = {
    firstName: firstName,
    address: address,
  };
  subscribersArray.push(newSubscriber); //add a new subscriber to the existing array, subscribersArray.
};

updateArray(subscribersArray, "Rosie", "123 Main"); //

console.log(subscribersArray);

// log out the size of the array function
const sizeArray = (subscribersArray) => {
  console.log("size of the array:", subscribersArray.length);
};
sizeArray(subscribersArray);

// Count how many of the subscribers have the city of Sandy
const numberOfCity = (subscribersArray, city) => {
  let count = 0;
  for (let i = 0; i < subscribersArray.length; i++) {
    if (subscribersArray[i].city === city) {
      count++;
    }
  }
  return count;
};
const sandyCount = numberOfCity(subscribersArray, "Sandy");
console.log("Number of subscribers in Sandy: " + sandyCount);

//Remove the subscriber in the array that has ID 123 by using filter() method
const removeID = (subscribersArray) => subscribersArray.ID !== "123"; // expression body syntax, implied "return"

console.log(subscribersArray.filter(removeID));
// function removeID(subscribersArray, ID) {
//   for (let i = 0; i < subscribersArray.length; i++) {
//     if (subscribersArray[i].ID === ID) {
//       subscribersArray.splice(i, 1);
//     }
//   }
// }
// removeID(subscribersArray, "123");

// Step 3

//Create a function to add a subscription to a subscriber by passing a subscriber and a subscrioption to the function
function addSubscription(subscribers, type, numberOfCopies) {
  const newSubscription = {
    type: type,
    numberOfCopies: numberOfCopies,
  };
  subscribers.subscriptionArray.push(newSubscription);
}
let subscriptionArray = []; // represents an empty array
addSubscription(subscribers, "Netflix", "4");
console.log(subscribers);

//Create a funtion that will delete a subscription by type
// function deletSubscription(subscribers, type) {
//   return subscribers.filter((subscriber) => subscriber.type !== type);
// }
// console.log(deletSubscription(subscribers.subscriptionArray, "Friend"));

function deletSubscription(subscriber) {
  return subscriber.type !== "Friend";
}
console.log(subscribers.subscriptionArray.filter(deletSubscription));
console.log(subscribers.subscriptionArray);

//Step 4

//Create a function that returns a promise

// function finsihAfter5Seconds(ms, max) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(Math.floor(Math.random() * max));
//     }, ms);
//   });
// }
// async function asyncLoad() {
//   console.log("Loading");
//   const result = await finsihAfter5Seconds(1000, 100);
//   console.log(result);
// }
// asyncLoad();

//Using async and await write a function to add age to a subscriber and use your promise that gives a random number to set the age value
function getRandomNumber(min, max) {
  return new Promise((resolve) => {
    resolve(Math.floor(Math.random() * max));
  }, min);
}

// async function addAgeToSubscriber(subscriberArray, age) {
//   const existingSubscriber = {
//     firstName: "Jeff",
//     address: "Main St",
//     city: "Taylorsville",
//     ID: "135",
//     age: (age = await getRandomNumber(18, 80)),
//   };
//   subscriberArray = [];
//   subscribersArray.push(existingSubscriber);
// }
// async function main() {
//   await addAgeToSubscriber(subscribersArray);
//   console.log(subscribersArray);
// }

// main();

// function getAllAge(min, max) {
//   return new Promise((resolve) => {
//     resolve(Math.floor(Math.random() * max));
//   }, min);
// }
// async function addAgeToAllSubscriber(subscribersArray) {
//   for (let i = 0; i < subscribersArray.length; i++) {
//     //iterating over each subscriber
//     const existingSubscriber = subscribersArray[i];
//     existingSubscriber.age = await getAllAge(18, 80); //directly modifying each subscriber by adding the 'age'
//   }
// }
// async function main1() {
//   await addAgeToAllSubscriber(subscribersArray);
//   console.log(subscribersArray);
// }
// main1();

// Step 4- Write a function using Promise.All to get the age for all subscribers in your array of subscribers
function getRandomAge(min, max) {
  return new Promise((resolve) => {
    resolve(Math.floor(Math.random() * max));
  }, min);
}

async function addAgeToAllSubscriber(subscriber) {
  return new Promise((resolve, reject) => {
    const age = getRandomAge(18, 90);
    if (age) {
      subscriber.age = age;
      resolve(age);
    } else {
      reject("No Age");
    }
  });
}
const agePromises = subscribersArray.map((subscriber) =>
  addAgeToAllSubscriber(subscriber)
); // subscriber = elements in the array that I want to iterate
let returnPromises = Promise.all(agePromises);
returnPromises.then((value) => {
  console.log(value);
});

// function squareArea(width, height) {
//   let caculation = width * height;
//   console.log(caculation);
//   return caculation;
// }
// console.log("Jeff");
// let Area = squareArea(5, 4);
// console.log(Area);

// async function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {  // setTimeout is a function
//       resolve();  //first argument, which is a callback function to be executed after the delay
//     }, ms); // second argument, which specifies the delay in milliseconds
//   });
// }

// async function getMoney(salary) {
//   //actions that we initiate now, but they finish later
//   const money = salary;
//   await delay(2000); //it awaits the resolution of the delay Promise. While waiting for the delay to complete, other code outside of getMoney can continue executing.
//   console.log(money);
// }
// let dollars = getMoney(1000);
// console.log(dollars);

const getAgeForAllSubscribers = () => {
  return subscribersArray.map((subscriber) => subscriber.age);
};
let promise1 = Promise.resolve(getAgeForAllSubscribers()); //Promise.resolve() is a method
let promise2 = Promise.resolve("Showing ages");

let returnPromise = Promise.all([promise1, promise2]);
returnPromise.then((values) => {
  // The then method. It will be executed once 'returnPromise' is resolved.
  // console.log(values);
});

async function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
async function f() {
  console.log("Start");
  await delay(5000);
  console.log("End");
}
// f();

// Practice
const userLeft = false;
const userWatchingCatMeme = false;

// function watchTutorialCallback(callback, errorCallback) {
//   if (userLeft) {
//     errorCallback({
//       name: "User Left",
//       message: ":(",
//     });
//   } else if (userWatchingCatMeme) {
//     errorCallback({
//       name: "User Watching Cat Meme",
//       message: "WebDevSimplified < Cat",
//     });
//   } else {
//     callback("Thumbs up and Subscribe");
//   }
// }
// watchTutorialCallback(
//   (message) => {
//     console.log("Success: " + message);
//   },
//   (error) => {
//     console.log(error.name + " " + error.message);
//   }
// );

//change it to promise

function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User Left",
        message: ":(",
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: "User Watching Cat Meme",
        message: "WebDevSimplified < Cat",
      });
    } else {
      resolve("Thumbs up and Subscribe");
    }
  });
}
watchTutorialPromise()
  .then((message) => {
    console.log("Success: " + message);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });
