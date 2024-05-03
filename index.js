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

let subscribersArray = [
  //use brackets for array list
  {
    firstName: "Jeff",
    address: "Main St",
    city: "Provo",
    ID: "145",
  },
  { firstName: "John", address: "Main St", city: "Taylorsville", ID: "135" },
  { firstName: "Jason", address: "Main St", city: "West Valley", ID: "456" },
  { firstName: "Sam", address: "Main St", city: "South Jordan", ID: "897" },
  { firstName: "Clark", address: "Main St", city: "Riverton", ID: "123" },
  { firstName: "Jackson", address: "Main St", city: "Sandy", ID: "345" },
  { firstName: "Sarah", address: "Main St", city: "Draper", ID: "998" },
  { firstName: "Molly", address: "Main St", city: "Highland", ID: "767" },
  { firstName: "Adam", address: "Main St", city: "Orem", ID: "490" },
  { firstName: "Levi", address: "Main St", city: "Lehi", ID: "001" },
];
//the parameters enclosed in the parentheses represent the input values that the function expects to receive when it is called.
function subscriberInfo(subscribersArray) {
  for (let i = 0; i < subscribersArray.length; i++) {
    // console.log(subscriber[i]); //allows to access each subscriber object in the array
    const subscriber = subscribersArray[i];
    console.log(`Name: ${subscriber.firstName}`);
    console.log(`Address: ${subscriber.address}`);
  }
}
// Call the subscriberInfo function with subscribersArray as argument
subscriberInfo(subscribersArray);

//add a new subscriber function
function updateArray(subscribersArray, firstName, address) {
  const newSubscriber = {
    firstName: firstName,
    address: address,
  };
  subscribersArray.push(newSubscriber); //add a new subscriber to the existing array, subscribersArray.
}

updateArray(subscribersArray, "Rosie", "123 Main"); //

console.log(subscribersArray);

// log out the size of the array function
function sizeArray(subscribersArray) {
  console.log("size of the array:", subscribersArray.length);
}
sizeArray(subscribersArray);

// Count how many of the subscribers have the city of Sandy
function numberOfCity(subscribersArray, city) {
  let count = 0;
  for (let i = 0; i < subscribersArray.length; i++) {
    if (subscribersArray[i].city === city) {
      count++;
    }
  }
  return count;
}
const sandyCount = numberOfCity(subscribersArray, "Sandy");
console.log("Number of subscribers in Sandy: " + sandyCount);

//Remove the subscriber in the array that has ID 123 by using filter() method
function removeID(subscribersArray) {
  return subscribersArray.ID !== "123";
}
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

async function addAgeToSubscriber(subscriberArray, age) {
  const existingSubscriber = {
    firstName: "Jeff",
    address: "Main St",
    city: "Taylorsville",
    ID: "135",
    age: (age = await getRandomNumber(18, 80)),
  };
  subscriberArray = [];
  subscribersArray.push(existingSubscriber);
}
async function main() {
  await addAgeToSubscriber(subscribersArray);
  console.log(subscribersArray);
}

main();
