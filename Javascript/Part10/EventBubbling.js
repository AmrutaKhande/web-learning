let div =  document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", function() {
    console.log("Div clicked");
});

ul.addEventListener("click", function(event) {
    event.stopPropagation(); // Prevents the event from bubbling up to the div
    console.log("UL clicked");
});

lis.addEventListener("click", function(event) {
    event.stopPropagation(); // Prevents the event from bubbling up to the ul
    console.log("LI clicked");
});