// let arr = [1, 2, 3, 4, 5, 6];
// function larger(num) {
//     let greater = [];
//     for(let i=0; i<arr.length; i++) {
//         if(arr[i] > num) {
//             greater += [arr[i]];
//         }
//     }
//     return greater;
// };
// console.log(larger(2));

// // or

// let num=5;
// function getE(arr, num){
//     for(let i=0;i<arr.length; i++){
//         if(arr[i]>num){
//             console.log(arr[i]);
//         }
//     }
// }
// getE(arr, num);

// let str = "abcdabcdefgggh";
// function getUnique(str) {
//     let ans = "";
//     for(let i=0; i<str.length; i++) {
//         let currChar = str[i];
//         if(ans.indexOf(currChar) == -1) {
//             ans += currChar;
//         }
//     }
//     return ans;
// }
// getUnique(str);



// Wrong Code
// let country = ["Australia", "Germany", "United States of America"];
// function getLongest(country) {
//     for(let i=0; i<country.length; i++) {
//         if(country[i].length > country[i+1].length) {
//             let large = country[i];
//         }
//     }
//     return large;
// }
// console.log(getLongest(country));

// let country = ["Australia", "Germany", "United States of America"];
// function getLongest(country) {
//     let ansIdx = 0;
//     for(let i=0; i<country.length; i++) {
//         let ansLen = country[ansIdx].length;
//         let currLen = country[i].length;
//         if(currLen > ansLen) {
//             ansIdx = i;
//         }
//     }
//     return country[ansIdx];
// }
// console.log(getLongest(country));

// let str = "Rutuja Harde";
// function countVowels(str) {
//     let count = 0;
//     for(let i=0; i<str.length; i++) {
//         if(str[i] == 'a' ||str[i] == 'e' ||str[i] == 'i' ||str[i] == 'o' ||str[i] == 'o' ||str[i] == 'u' ||str[i] == 'A' ||str[i] == 'E' ||str[i] == 'I' ||str[i] == 'O' ||str[i] == 'U'){
//             count += 1;
//         }
//     }
//     return count;
// }
// console.log(countVowels(str));

//str[i] == 'a' or str.charAt(i) == 'a'

let start = 100;
let end = 200;
function generateRandom(start, end) {
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}
console.log(generateRandom(start, end));