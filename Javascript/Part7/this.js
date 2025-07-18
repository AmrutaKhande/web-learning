// const student = {
//     name: "amruta",
//     age: 21,
//     eng: 95,
//     math: 93,
//     phy: 97,
//     getAvg() {
//         console.log(this);
//         let avg = (this.eng + this.math + this.phy) / 3;
//         console.log(`${this.name} got avg marks = ${avg}`);
//     }
// }
// student.getAvg();

// function getAvg() {
//     console.log(this);
// }
// getAvg();


// this with Arrow Functions

const student1 = {
    name:"Amruta",
    marks: 95,
    prop:this,          // global scope
    getName: function() {
        console.log(this);
        return this.name;
    }
};

console.log(student1);
console.log(student1.getName());