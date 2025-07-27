// let btn = document.querySelector('button');
// console.dir(btn);

// btn.onclick = function() {
//     console.log("Button was clicked!");
//     alert("Button was clicked!");
// };

// let btn = document.querySelectorAll('button');

// for (button of btn) {
//     btn.onclick = sayHello;
// }

// function sayHello() {
//     console.log("Hello World!");
//     alert("Hello World!");
// };

// // Event Listener

// for (button of btn) {
//     button.addEventListener('click', sayHello);
//     button.addEventListener('click', sayName);
// }
// function sayHello() {
//     alert("Hello World!");
// };

// function sayName() {
//     alert("Apna College");
// };

// // Event Listener for Elements

// let p = document.querySelector('p');

// p.addEventListener('click', function() {
//     console.log("Paragraph was clicked!");
// });

// let box = document.querySelector('.box');
// box.addEventListener('mouseenter', function() {
//     console.log("mouse inside the box");
//     alert("Mouse entered the box!");
// });

// this in Event Listeners
// let btn2 = document.querySelector('button');
// btn2.addEventListener('click', function() {
//     console.log(this);
// });

// let btn3 = document.querySelector('#btn2');
// let p1 = document.querySelector('#para2');
// let h1 = document.querySelector('#head1');
// let h3 = document.querySelector('#head3');

// function changeColor() {
//     console.dir(this);
//     this.style.backgroundColor = 'blue';
// }

// btn3.addEventListener('click', changeColor);
// p1.addEventListener('click', changeColor);
// h1.addEventListener('click', changeColor);
// h3.addEventListener('click', changeColor);

// Keyboard Events

let btn = document.querySelector("button");

btn.addEventListener("click", function (event) {
  console.log(event);
  console.log("button was clicked!");
});

btn.addEventListener("dblclick", function (event) {
  console.log(event);
  console.log("button was double clicked!");
});

let inp = document.querySelector("input");
// inp.addEventListener('keydown', function(event) {
//     console.log(event);
//     console.log("Key = ", event.key);
//     console.log("code = ", event.code);
//     console.log("Key was pressed down!");
// });

// inp.addEventListener('keyup', function(event) {
//     console.log("Key was released!");
// });

inp.addEventListener("keydown", function (event) {
  console.log("code = ", event.code);
  if (event.code === "ArrowUp" || event.code === "KeyU") {
    console.log("character moves forward");
  } else if (event.code === "ArrowDown") {
    console.log("character moves backward");
  } else if (event.code === "ArrowLeft") {
    console.log("character moves left");
  } else if (event.code === "ArrowRight") {
    console.log("character moves right");
  } else {
    console.log("You pressed a different key!");
  }
});
