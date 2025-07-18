// // for (let i=1; i<=5; i++) {
// //     console.log(i);
// // }

// for (let i=5; i>=1; i--) {
//     console.log(i);
// }

// for (let i=5; i>=1; i=i-3) {
//     console.log(i);
// }

// // Print Odd Numbers from 1 to 15
// console.log("Odd Numbers are");
// for (let i=1; i<=15; i=i+2) {
//     console.log(i);
// }

// // Print all even numbers (2 to 10)
// console.log("Even Numbers are");
// for (let i=2; i<=10; i=i+2) {
//     console.log(i);
// }

// // Print the multiplication table for 5

// let n = prompt("Write your number");
// n = parseInt(n);
// for (let i=n; i<=n*10; i=i+n) {
//     console.log(i);
// }

// Nested for Loop
for (let i=1; i<=3; i++) {
    console.log(`outer loop ${i}`);
    for (let j=1; j<=3; j++) {
        console.log(j);
    }
}


let i = 1;
while (i<=5) {
    console.log(i);
    i++;
}