let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = input.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn); 
    ul.appendChild(item);
    input.value = ""; // Clear the input field after adding the item
});

// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//     delBtn.addEventListener("click", function(event) {
//         let par = this.parentElement;
//         par.remove(); // Remove the list item when the delete button is clicked
//     });
// }

ul.addEventListener("click", function(event) {
    if (event.target.nodeName === "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove(); // Remove the list item when the delete button is clicked
        console.log("deleted");
    }
});
