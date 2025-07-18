// function hello() {
//     console.log("hello");
// }

// hello();

// function printName() {
//     console.log("apna college");
//     console.log("shradha khapra");
// }

// printName();

// function print1to5() {
//     for(let i=1; i<=5; i++) {
//         console.log(i);
//     }
// }

// print1to5();

// function isAdult() {
//     let age = 18;
//     if(age >= 18) {
//         console.log("adult")
//     }
//     else {
//         console.log("not adult");
//     }
// }

// isAdult();

// function printInfo(name, age) {
//     console.log(`${name}'s age is ${age}`);
// }
// printInfo("Amruta", 21);

// function sum(a, b) {
//     console.log(a + b);
// }
// sum(2, 3);

// // return keyword

// function sum(a, b) {
//     return a+b;
// }
// let s = sum(3, 4);       // console.log(sum(3, 4));
// console.log(s);

// // for sum of 3 numbers
// // sum(sum(1, 2), 3);


// // Function scope and Global Scope

// let sum = 54;                   // Global Scope
// function calSum(a, b) {
//     let sum = a+b;              // Function Scope
//     console.log(sum);           // 3
// }
// calSum(1, 2);
// console.log(sum);               // 54


// // Block Scope

// for(let i=1; i<=5; i++) {
//     console.log(i);             //   1 2 3 4 5
// }
// console.log(i);                 // i is not defined

// let age = 25;
// if(age >= 18) {
//     let str = "adult";          // Block Scope
// }
// console.log(str);               // str is not defined

// // Lexical Scope

// function outerFunc() {
//     let x = 5;
//     let y = 6;
//     function innerFunc() {
//         console.log(x);
//         console.log(y);
//     }
//     innerFunc();
// }
// outerFunc(); 

// // Function Expressions

// const sum = function(a, b) {
//     return a+b;
// }
// sum(2, 3);

// let hello = function() {
//     console.log("hello");
// }

// // Higher Order Functions

// function multipleGreet(func, count) {
//     for(let i=1;i<=count;i++) {
//         func();
//     }
// }
// let greet = function() {
//     console.log("hello");
// }
// multipleGreet(greet,5);

// // or
// // multipleGreet(function() {console.log("namaste")},10);

// let odd = function(n) {
//     return 
// }

// Methods

// const calculator = {
//     add: function(a, b) {
//         return a+b;
//     },
//     sub: function(a, b) {
//         return a-b;
//     },
//     mul: function(a, b) {
//         return a*b;
//     }
// };
// console.log(calculator.add(1,2))

// Methods Shorthand

const calculator = {
    add(a, b) {
        return a+b;
    },
    sub(a, b) {
        return a-b;
    }
};
console.log(calculator);
console.log(calculator.add(1, 2));
console.log(typeof calculator);