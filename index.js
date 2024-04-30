const subscribers = {
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

let subscriber = [
  //use brackets for array list
  "Jeff",
  "John",
  "Jason",
  "Sam",
  "Clark",
  "Jackson",
  "Sarah",
  "Molly",
  "Adam",
  "Levi",
];

function subscriberInfo(subscriber) {
  for (let i = 0; i < subscriber.length; i++) {
    console.log(subscriber[i]); //allows to access each subscriber object in the array
  }
}
