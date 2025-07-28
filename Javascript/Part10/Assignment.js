// Qs1 - Event Listeners

// mouseout event
let box = document.getElementById("hoverBox");
box.addEventListener("mouseout", function () {
    box.innerHTML = "Mouse left the box!";
    box.style.backgroundColor = "#fca";
});

// keypress event
let keyInput = document.getElementById("keyInput");
keyInput.addEventListener("keypress", function (e) {
    console.log("Key pressed:", e.key);
});

// scroll event
window.addEventListener("scroll", function () {
    console.log("Page is being scrolled...");
});

// load event
window.addEventListener("load", function () {
    alert("Page has fully loaded!");
});

// Qs2 - Button with color change
let btn = document.createElement("button");
btn.innerHTML = "Click Me!";
btn.style.padding = "10px 20px";
btn.style.fontSize = "16px";

let qs2Container = document.getElementById("qs2Answer");
qs2Container.appendChild(btn);

btn.addEventListener("click", function () {
    btn.style.backgroundColor = "green";
});

// Qs3 - Input + dynamic heading
let inputName = document.createElement("input");
inputName.type = "text";
inputName.placeholder = "enter your name";
inputName.id = "nameInput";

let qs3Container = document.getElementById("qs3Answer");
qs3Container.appendChild(inputName);

let heading = document.getElementById("displayName");

inputName.addEventListener("input", function () {
    let filtered = inputName.value.replace(/[^a-zA-Z ]/g, "");
    inputName.value = filtered;
    heading.textContent = filtered || "Your name will appear here";
});
