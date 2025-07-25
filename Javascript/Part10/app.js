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



// Event Listener

for (button of btn) {
    button.addEventListener('click', sayHello);
    button.addEventListener('click', sayName);
}
function sayHello() {
    alert("Hello World!");
};

function sayName() {
    alert("Apna College");
};