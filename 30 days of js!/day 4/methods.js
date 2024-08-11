// A method is a function, but with a little twist. It’s a function that belongs to an object.
// Think of an object as a thing (like a car, a book, or even a person), and a method as something that thing can do.

// example
// Let’s imagine you have an object called car.
// This car can do things like start, stop, or honk.
// Each of these actions can be a method of the car object.

// function expressions: when you create a function and immediately assign it to a variable
let car = {
  make: "Toyota",
  model: "Camry",
  start: function () {
    console.log("The car has started.");
  },
  stop: function () {
    console.log("The car has stopped.");
  },
};

car.start(); // prints 'the car has started'
car.stop(); // prints 'the car has stopped'

// why use methods?

// Grouping: Methods are a way to group functions together under one object. This makes your code organized.
// Related Functions: Methods usually do things that are directly related to the object they belong to.
// For example, all the methods of a car object are about what a car can do.
