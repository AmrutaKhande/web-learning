const arrayAverage = (arr) => {
    let total = 0;
    for(let number of arr) {
        total += number;
    }
    return total/arr.length;
};
let arr = [1, 2, 3, 4, 5, 6];
console.log(arrayAverage(arr));

let num = 4;
const isEven = (num) => num%2 == 0;

const object = {
    message: 'Hello,World!',
    logMessage() {
        console.log(this.message);
    }
};
setTimeout(object.logMessage,1000);


let length = 4;
function callback() {
    console.log(this.length);
}
const object1 = {
    length: 5,
    method(callback) {
        callback();
    },
};
object1.method(callback,1,2);
