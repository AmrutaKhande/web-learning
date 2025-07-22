letnums = [1, 2, 3, 4, 5];
constsquare = nums.map((num) => num * num);
console.log(square);
letsum = square.reduce((acc, cur) => acc + cur, 0);
letavg = sum / nums.length;
console.log(avg);

letnumbers = [2, 4, 6, 8, -2, -4];
console.log(numbers.map((number) => number + 5));

letstrings = ["adam", "bob", "catlyn", "donald", "eve"];
console.log(strings.map((string) => string.toUpperCase()));

constdoubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((v) => v * 2),
];
doubleAndReturnArgs([1, 2, 3], 4, 4); //[1,2,3,8,8]
doubleAndReturnArgs([2],10,4); //[2,20,8

constmergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }); //{a:1,b:2,c:3,d:4}
