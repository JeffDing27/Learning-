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

if (subscribers.state === "Utah") {
  console.log("true");
} else {
  console.log("false");
}
