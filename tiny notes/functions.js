// // DEFINING FUNCTIONS

// // so many ways to define functions bc of lexical environment

// let a = 'global';
// // global scope means available anywhere

// // however if we use it inside a function
// function fun() {   
// }
// // it becomes local to that function and can only be used inside of it

// // if you have a statement inside like an if condition
// function fun() {
//     let a = 'function';
//     if (true) {
//         let a = 'block';
//         var b = 'hoisted';
//     }
// }

// // function definition - function keyword used by itself
// function add(a, b) {
//     // inside the parenthesis are the input/argument (input params)
//     return a + b;
//     // you can also return a value somewhere else
// }

// // functions are objects, which means they can be used as expressions
// const add = function(a + b) {
//     return a + b;
// }

// // or we can construct higher order functions; function used as argument or return value
// function higherOrder(fun) {
//     fun();
//     return function() {
//     }
// }

// // functions can also be nested to create a closure; encapsulates data and logic
// function giveMeClosure() {
//     let a = 10;
//     return function() {
//         a++;
//         return a;
//     }
// }
// // when u call a function w a primitive value its called in the call stack
// // this is the browser's short term memory
// // when you create a closure, the inner function can access variables in the outer
// // function, even after the initial function call; stored in the heap memory

