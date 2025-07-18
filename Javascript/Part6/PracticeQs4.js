// Create a Function that prints the multiplication table of a number

function printTable(num) {
    for(let i=1; i<=10; i++) {
        console.log(`${num} * ${i} = ${num*i}`);
    }
} 

printTable(5);

// or

function priTab(n) {
    for(let i=n; i<=n*10; i+=10) {
        console.log(i);
    }
}

priTab(10);