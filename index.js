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
  { firstName: "Jeff", address: "Main St", city: "Provo" },
  { firstName: "John", address: "Main St", city: "Taylorsville" },
  { firstName: "Jason", address: "Main St", city: "West Valley" },
  { firstName: "Sam", address: "Main St", city: "South Jordan" },
  { firstName: "Clark", address: "Main St", city: "Riverton" },
  { firstName: "Jackson", address: "Main St", city: "Sandy" },
  { firstName: "Sarah", address: "Main St", city: "Draper" },
  { firstName: "Molly", address: "Main St", city: "Highland" },
  { firstName: "Adam", address: "Main St", city: "Orem" },
  { firstName: "Levi", address: "Main St", city: "Lehi" },
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
