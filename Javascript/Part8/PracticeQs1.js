// Check if all numbers in our array are multiples of 10 or not.

let arr = [10, 15, 20];
let multiples = arr.every((el) => el%10 == 0);
console.log(multiples);


// Create a function to find the min number in an array

let arr1 =  [34, 56,7, 23, 45, 67, 65, 434,56];
let min = arr1.reduce((res, el) => {
    if(res > el) {
        return el;
    }
    else {
        return res;
    }
});
console.log(min);