console.log(..."amrutakhande");

// Spread with Array Literals

let arr = [1, 2, 3, 4, 5];
let newArr = [...arr];
console.log(newArr);

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];

let nums = [...odd, ...even];
console.log(nums);

// Spread with Object literals

let data = {
    email: "amrutakhande3@gmail.com",
    password: "abcd"
};
let dataCopy = {...data, id: 123};
console.log(dataCopy);

// Rest

// Destructuring

let name = ["tony", "bruce", "steve", "peter"];
let [winner, runnerup, secondRunnerup] = names;
console.log(winner, runnerup, secondRunnerup);

// Destructuring Object

const student = {
    name: "amruta",
    age: 21,
    class: 16,
    subjects: ["hindi", "english", "math", "science"],
    user: "amruta123",
    password:1234
};
