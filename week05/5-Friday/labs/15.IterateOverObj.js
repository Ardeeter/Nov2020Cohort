
/*
Create a function sumObjectValues() that will sum all values of the fields that contain
number.  
Ensure that iteration is done only over own properties of the object
*/
//typeof() == "number"
var nums = {
    a: 10,
    b: 20,
    c: "string",
    d: 12
}

// Write code here 

// const sumObjectValues = (obj) => {
//     let sum = 0
//     if (typeof(obj.keys) === "number"){
//         sum += obj.keys
//         return sum
//     }
// } does not work

console.log(sumObjectValues(nums));
// 42
