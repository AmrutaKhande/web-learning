// let btn = document.querySelector('button');
// console.dir(btn);

// btn.onclick = function() {
//     console.log("Button was clicked!");
//     alert("Button was clicked!");
// };

let btn = document.querySelectorAll('button');

for (button of btn) {
    btn.onclick = sayHello;
}

function sayHello() {
    console.log("Hello World!");
    alert("Hello World!");
};