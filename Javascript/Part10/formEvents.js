// let form = document.querySelector('form');

// form.addEventListener('submit', function() {
//     console.log("Form submitted!");
//     alert("Form submitted successfully!");
// });

// form.addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission behavior
//     console.log("Form submitted!");
//     alert("Form submitted successfully!");
// });


// Extracting Form Data

// form.addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission behavior 
//     let user = document.querySelector('#user');
//     let pass = document.querySelector('#pass');
//     console.log(user.value); // Get the value of the username input field
//     console.log(pass.value); // Get the value of the password input field
//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// });

// Change Event

let form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
});

let user = document.querySelector('#user');

user.addEventListener('change', function(event) {
    console.log("change event");
    console.log("final value = ", this.value);
});

user.addEventListener('input', function(event) {
    console.log("input event");
    console.log("final value = ", this.value);
});
