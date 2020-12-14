// ***Ternary Operator 

//Change the contents of the isNumber function using ternary operator

// function isNumber(a) {
//     if (typeof a === "number") {
//         return "that's a number";
//     }
//     else {
//         return "That's not a number";

//     }
// }

// let isNumber = a => typeof(a) == "number" ? `that's a number` : `That's not a number`;


// let isNumber = a => { a.isInteger ? `that's a number` : `That's not a number`;
// } (do not work)

// console.log(isNumber(10));
// console.log(isNumber('hey there'));
// console.log(isNumber(true));

let isNumber = a => typeof(a) === "number" ? "that's a number" : "that's not a number"
        
    // condition ? true : false


let a = 5;
let b = 7;

if (a < b){
    //block
}
else{
    ///
    block
}

a < b ? console.log('a < b') : console.log('false block of code');

let str = `sum of a + b: ${a + b}`
let str = `sum of a + b: ${a < b}`