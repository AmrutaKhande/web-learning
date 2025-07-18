// For the given String:
// let msg = "help!";
// Trim it & convert it to uppercase.

let msg = "help!";
console.log(msg.trim().toUpperCase());

// For the String -> let name = "apnaCollege", predict the output for following:

let name = "ApnaCollege";
console.log(name.slice(4,9));
console.log(name.indexOf("na"));
console.log(name.replace("Apna","Our"));

// Separate the "College" parrt in above string & replace "l" with "t" in it.

console.log(name.slice(4).replace("l","t"));

// To replace both 'l' with 't'

let newStr =name.slice(4).replace('l','t');
console.log(newStr);
console.log(newStr.replace('l','t'));

// OR

console.log(name.slice(4).replace('l','t').replace('l','t'));