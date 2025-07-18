// 1. forEach

let arr = [1, 2, 3, 4, 5];

function print(el) {
    console.log(el);
}
arr.forEach(print);

// OR

arr.forEach(function(el) {
    console.log(el);
});

let arr1 = [
    {
        name: "amruta",
        marks: 95
    },
    {
        name: "rutuja",
        marks: 94
    },{
        name: "pallavi",
        marks: 94
    }
];

arr.forEach((student) => {
    console.log(student.marks);
});

// 2. Map

let num = [1, 2, 3, 4];
let double = num.map(function(el) {
    return el*2;
});
console.log(double);


let students = [
    {
        name: "amruta",
        marks: 95
    },
    {
        name: "rutuja",
        marks: 94
    },
    {
        name: "pallavi",
        marks: 97
    }
];

let gpa = students.map((el) => {
    return el.marks / 10;
});
console.log(gpa);

// 3. Filter

let nums = [1, 2, 3, 4, 5, 6, 7, 8];
let ans = nums.filter((el) => {
    return el % 2 == 0;  // even -> true, odd -> false
});
console.log(ans);

// 4. Every

[1, 2, 3, 4].every((el) => (el%2 == 0));

[2,4].every((el) => (el%2 == 0));

// 5. Some

[1, 2, 3, 4].some((el) => (el%2 == 0));

// 6. Reduce

[1, 2, 3, 4].reduce((res, el) => (res+el));

// Finding Maximum in an array;

let nums1 = [2,3,4,5,3,4,7,8,1,2];

let result = nums1.reduce((max, el) => {
    if(el > max) {
        return el;
    }
    else {
        return max;
    }
});
console.log(result);