// strings overview

let space = "         "; // blank string
let firstName = 'Ellyanna ';
let secondName = 'Nicole ';
let lastName = 'Du';
let age = 20;
let city = 'Brooklyn';
let quote = "He said, 'Seize the day!'";

// string concatenation

let fullName = firstName + secondName + lastName;
console.log(fullName);
let personalInfo = 'my name is ' + fullName + 'and I live in ' + city + '. I love the quote, ' + quote;
console.log(personalInfo);

// escape sequences in strings
console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?'); // line break
console.log('Days\tTopics\tExercises');
console.log('Day 1\t3\t5');
console.log('Day 2\t3\t5');
console.log('Day 3\t3\t5');
console.log('Day 4\t3\t5');
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"');
console.log("In every programming language it starts with \'Hello, World!\'");
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020');

// template literals/template strings
console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically

// example
let completeName = firstName + ' ' + secondName + ' ' + lastName;
let personalInfoTwo = `i am ${fullName}. i am ${age} years old. i live in ${city}.`
console.log(personalInfoTwo);

