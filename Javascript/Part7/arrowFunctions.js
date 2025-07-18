const sum = (a, b) => {
    console.log(a+b);
};
sum(2,3);

const cube = (n) => {
    return n*n*n;
};
console.log(cube(3));


// implicit return
const mul = (a, b) => ( a*b);
console.log(mul(3,5));

//setTimeOut

// console.log("Hi there!");
// setTimeout(() => {
//     console.log("Apna College");
// }, 4000);
// console.log("Welcome to");

//setInterval
setInterval(() => {
    console.log("Apna College");
}, 2000);
