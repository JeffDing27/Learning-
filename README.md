# Learning-JavaScript

Create functions that can be called with node using a node terminal or other tool

Step 1

Make an object that is a like subscribers in magazines. This object would needs a first name, last name, street1, street2, city, state, zip code, and ID

Make a function that will create a subscriber and log the full subscriber object to the terminal

Make a function that will take a subscriber object, and a new name and log out the new object.

Make a function that will check if the state is Utah and return a true or false then log that out.

Step 2

Learn about arrow functions and use them to create the functions below.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

Create an array of at least 10 subscribers

Create a function that will loop over the array of subscribers and print out there names and addresses

Make a function that will add a new subscriber to the array

Make a function that will log out the size of the array

Make a function that will count how many of the subscribers have the city of Sandy

Make a function that will remove the subscriber in the array that has ID 123. When testing this person with ID 123 should not be the first or the last person in the array. This function should take the ID as a parameter to the function so we can remove any item in the array by the ID. Then the new array is returned.

Step 3

Lets modify the subscriber object to have a subscriptions array on it

The subscriptions array should have a type of subscription and a number of copies

Create a function to add a subscription to a subscriber by passing a subscriber and a subscription to the function

Create a function that will delete a subscription by type

Create a function that logs out the subscriber and subscriptions.

Step 4

Create a function that returns a promise such as this

async function delay(ms) {
return new Promise((resolve) => {
setTimeout(() => {
resolve('15’);
}, ms);
});
}

Change the promise to return a random number

Using async and await write a function to add age to a subscriber and use your promise that gives a random number to set the age value.

Write a function using Promise.All to get the age for all subscribers in your array of subscribers
