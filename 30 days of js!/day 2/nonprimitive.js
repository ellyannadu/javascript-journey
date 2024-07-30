// primitive data types are non-modifiable data types
// once created, it cannot be modified

let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             // false 

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false

// non-primitive data types can be modified after it gets created
// sample below: array - list of data values in a square bracket

let numbersList = [1, 2, 3, 4, 5];
numbersList[0] = 100
// changed the 1 in index 0 to 100
console.log(numbersList); // result: 100, 2, 3, 4, 5

// non-primitive data types cannot be compared by value
// even if 2 non primitive data types have the same properties & values =/= 

let num = [1, 2, 3];
let number = [1, 2, 3];

console.log(num == number); // outputs false

let userOne = {
    name: 'Emmanuel',
    role: 'boyfriend',
    location: 'new york'
}

let userTwo = {
    name: 'Yunny',
    role: 'girlfriend',
    location: 'brooklyn'
}

console.log(userOne == userTwo); // outputs false

// two objects are only strictly equal if they refer to the same underlying object
let nums = [1, 2, 3];
let numbers = num;

console.log(num == numbers); // outputs true

let userThree = {
    name: 'Emmanuel',
    role: 'boyfriend',
    location: 'new york'
}

let userFour = userThree;

console.log(userThree == userFour); // outputs true



