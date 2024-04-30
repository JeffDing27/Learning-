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
  subscribers.firstName = firstName;
  subscribers.lastName = lastName;
  subscribers.street1 = street1;
  subscribers.street2 = street2;
  subscribers.city = city;
  subscribers.state = state;

  if (subscribers.state === "Utah") {
    console.log("true");
  } else {
    console.log("false");
  }
}

createSubscriber(
  "Jeff",
  "Ding",
  "123 Main St",
  "42",
  "Salt Lake",
  "Utah",
  "84129",
  "123"
);
console.log(subscribers);

function updateSubscripber(subscribers, newState) {
  subscribers.city = newState;
}

const newState = "California";
console.log(newState);

//Step 2

let subscribersArray = [
  //use brackets for array list
  { firstName: "Jeff", address: "Main St" },
  { firstName: "John", address: "Main St" },
  { firstName: "Jason", address: "Main St" },
  { firstName: "Sam", address: "Main St" },
  { firstName: "Clark", address: "Main St" },
  { firstName: "Jackson", address: "Main St" },
  { firstName: "Sarah", address: "Main St" },
  { firstName: "Molly", address: "Main St" },
  { firstName: "Adam", address: "Main St" },
  { firstName: "Levi", address: "Main St" },
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

function updateArray(subscribersArray, firstName, address) {
  const newSubscriber = {
    firstName: firstName,
    address: address,
  };
  subscribersArray.push(newSubscriber);
}

updateArray(subscribersArray, "Rosie", "123 Main");

console.log(subscribersArray);
