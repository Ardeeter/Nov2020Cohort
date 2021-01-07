// let patt = /long/;

// let result = /long/.exec('Today long is a gret day');

// console.log(result);

// let patt = /e/gi;

// let str = 'The best things in life are free';

// let arr = str.match(patt);

// console.log(arr);

// let city = `Santa Barbara`.replace(/Barbara/, `Monica`)

// console.log(city);

// let pattern = /Batman|Tina Fey/g;
// let str = "Batman and Tina Fey.";

// // let result = pattern.exec(str);
// //or

// let result = str.match(pattern);

// console.log(result);

// let patt = /(\d\d\d)-(\d\d\d-\d\d\d\d)/

// let str = `My phone number is 650-544-4366`

// let result = str.match(patt);

// console.log(result);

// let pattern = /Bat(man|mobile|copter|bat)/; 

// let str = "Batman lost a wheel";

// let result = str.match(pattern);

// console.log(result);

// let pattern = /Bat(wo)?man/;
// let str = "The Adventures of Batwoman";
// let result = str.match(pattern);

// console.log(result);

// let pattern = /((\d\d\d)-)?\d\d\d-\d\d\d\d/g;

// let str = `435-3453`
// let result = str.match(pattern)

// console.log(result);

// * means zero or more | + means one or more

let pattern = /Bat(wo)*man/;
let str1 = "The Adventures of Batman";
let str2 = "The Adventures of Batwoman";
let str3 = "The Adventures of Batwowowowoman";
let result = str1.match(pattern);
// let result = str2.match(pattern);
// let result = str3.match(pattern);

console.log(result);