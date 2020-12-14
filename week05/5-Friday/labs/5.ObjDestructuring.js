// ***Object Destructuring
/* 
Declare mult() function that will multiply values of the x,y,z 
fields of the passed object
*/
// var obj = {
//     x: 5,
//     y: 20,
//     z: 3
// }

// var mult = obj => {
//     let {x, y, z = obj}
//     return x * y * z; 
// }

// console.log(mult(obj));
//300




/*
Create shortPerson() function that will destructure each person object.
Sample result:
{n: "Mike", c: "Spain", a: 23, p:100}

If input object doesn't have postsQuantitiy field it should get default value 0.
*/


var person1 = {
    name: "Mike",
    info: {
        country: "Spain",
        age: 23
    },
    postsQuantitiy: 100
}


var person2 = {
    name: "Alice",
    info: {
        country: "Italy",
        age: 25
    }

}

// let person = (obj) => {

//     // let {name:n, info:i , postsQuantitiy:p} = obj;
//     let {name:n, info:{country:c , age:a}, postsQuantitiy:p} = obj;
    
//     console.log(`name ${n} country ${c} age ${a} posts ${p}`);

// }

// person(person1);

// let person = (obj) => {

//     let {name:n, info:{country:c , age:a}, postsQuantitiy:p=0} = obj;
    
//     console.log(`name ${n} country ${c} age ${a} posts ${p}`);

// }

// consoloe.log(person(person2));

let a = 5;
let b = 10;

// if (b > a){
//     console.log('a is less than b');
// }

// (condition) ? (true) : (false)
b < a ? console.log('a is less than b') : console.log('a is greater than b');

// console.log(`${}`)

let str = `this is my result ${a > b ? 4: 10}`

console.log(str);