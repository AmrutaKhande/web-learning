const sum = (a,b) => a + b;
const mul = (a,b) => a * b;
const g = 9.8;
const pi = 3.14;

// module.exports = 123;

let obj = {
    sum: sum,
    mul: mul,   
    g: g,
    pi: pi
}

module.exports = obj;

// module.exports.sum = sum;
// module.exports.mul = mul;
// module.exports.g = g;
// module.exports.pi = pi;

//or

// exports.sum = sum;
// exports.mul = mul;   
// exports.g = g;
// exports.pi = pi;