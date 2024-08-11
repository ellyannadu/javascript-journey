function favoriteAnimal(animal) {
  // function definition; (animal) is the is the parameter
  return animal + " is my favorite animal!";
  // we could have easily replaced 'animal' with x, blah, pet
  // but giving it a proper name gives the person reading the code a bit of context so they
  // don't have to guess what 'animal' might contain
}

// in js, parameters are listed inside the parenthesis in the function declaration
// function arguments are the actual values we decide to pass to the function

// by putting 'animal' inside the parenthesis of the favoriteAnimal() function, we are telling js that
// we will send some value into our function, and that 'animal' is just a placeholder for some future value

console.log(favoriteAnimal("otter"));

//  over here is where we call our function and pass the value 'otter' inside of it

// another example below

function sum(parameter1, parameter2) {
  // parameters
  return parameter1 + parameter2;
}

console.log(sum(1, 2)); // arguments

// more examples

const myText = "I am a string";
const newString = myText.replace("string", "sausage");
console.log(newString);

// the replace() string function takes a source string,
// and a target string and replaces the source string,
// with the target string, and returns the newly formed string

const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" "); // this is optional, it can just be myArray.join()
console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string

function makeSandwich(bread, filling) {
  let sandwich = bread + " with " + filling;
  return sandwich;
}

let myLunch = makeSandwich("Whole Wheat", "Turkey");
console.log(myLunch); // This will print: Whole Wheat with Turkey

// function: This tells JavaScript you’re making a function.
// makeSandwich: The name of the function (recipe).
// bread, filling: Ingredients (parameters) needed for the sandwich.
// let sandwich = bread + " with " + filling;: The steps (code) that make the sandwich.
// return sandwich;: The final sandwich (result) you get

// how to use it

// You call the function makeSandwich with "Whole Wheat" and "Turkey".
// The function follows the steps, makes the sandwich, and gives it back to you.
// You then print out your sandwich to the console.

// Why Use Functions?

// Reuse: Write the recipe once, and use it as many times as you want.
// Organization: Break your code into smaller, manageable parts.
// Avoid Repetition: If you have a task you need to do a lot, put it in a function

// FUNCTIONS VS METHODS
// functions that are part of objects are called methods
//  an object is a standalone entity, with properties and type

// Default Parameters
function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}

hello("Ari"); // Hello Ari!
hello(); // Hello Chris!

// Anonymous Functions and Arrow Functions
function myFunction() {
  alert("hello");
}

// the function above can also be coded as

(function () {
  alert("hello");
});

// this is an anonymous function bc it has no name {}
// you see anonymous functions when a function expects to receive another function as a parameter
// the function parameter is often passed as an anonymous function

// function expressions

let greet = function (name) {
  return "Hello, " + name + "!";
};

console.log(greet("Alice"));

let greeting = function () {
  return "hello!";
};

console.log(greeting());

// arrow functions vs regular functions
// regular
let addition = function (a, b) {
  return a + b;
};

console.log(addition(3, 3));

// arrow
let add = (a, b) => {
  return a + b;
};

console.log(add(2, 2));

// you can go even shorter!
// If the function has only one expression, you can make it even shorter by removing the curly braces {} and the return keyword:
let subtract = (a, b) => a - b;
console.log(subtract(10, 5));

// no parameters or a single parameter

// no param: use empty parenthesis
let sayHello = () => "Hello!";
console.log(sayHello());

// one param: skip the parenthesis around the parameter

let square = (x) => x * 2;
console.log(square(3));
