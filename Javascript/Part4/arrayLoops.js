let fruits = ["mango", "apple", "banana", "litchi", "orange"];

for (let i=0; i<fruits.length; i++) {
    console.log(i, fruits[i]);
}

// Nested Loops with Nested Arrays
let heroes = [["ironman", "spiderman", "thor"], 
              ["superman", "wonder woman", "flash"]];
for (let i=0; i<heroes.length; i++) {
    console.log(i, heroes[i], heroes[i].length);
    for(let j=0; j<heroes[i].length; j++) {
        console.log(`j=${j}, ${heroes[i][j]}`);
    }
}


let student = [["aman", 95], ["shradha", 94.4], ["karan", 100]];
for (let i=0; i<student.length; i++) {
    console.log(`info of student #{i+1}`);
    for(let j=0; j<student[i].length; j++) {
        console.log(student[i][j]);
    }
}

//let fruits = ["mango", "apple", "banana", "litchi", "orange"];
for (fruit of fruits) {
    console.log(fruit);
}

for (char of "apnacollege") {
    console.log(char);
}

// Nested for of Loop
//let heroes = [["ironman", "spiderman", "thor"], 
//             ["superman", "wonder woman", "flash"]];
for (list of heroes) {
    console.log(list);
    for(name of list) {
        console.log(name);
    }
}
