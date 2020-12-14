// var arr = [1, 2, 3, 4];

// var a = arr[0]; //1
// var b = arr[1]; //2

// let arr = [1, 2, 3, 4];

// let [a, b ,c, d] = arr //OR [1, 2, 3, 4]

// console.log()


var luke = { occupation: 'jedi', father: 'anakin' };

// let {occupation, father} = luke;

// console.log(occupation, father);


// var luke = { occupation: 'jedi',
// father: {
//     fName: 'anakin',
//     lName: 'skywalker'
// } };

// // renaming : 

// let {occupation:o, father:f} = luke;


// console.log(f, l)



// let add = (x=0, y=0) => {
//     // x = x || 0;
//     // y = y || 0;
//     return x + y 
// }

// add()

// let logArguments = (...args) => {
    
//     //  args is an array

//     args.forEach (el => {
//         console.log(el);
//     })
// }

// let arr = [1, 2, 3, 4, 5];

// // var a = arr[0];

// let [a, b, c, d, e] = arr;

// console.log(a)


// let add = (a=0, b=0) => {
//     // a = a || 0;
//     // b = b || 0;

//     return a + b
// }

// console.log(add(4))

// args equals all arguments that could be passed through the function

// let sum = (...args) => { //[5, 8, 9, 10]
//     if(args.length = 0) return 0
//     if(args.length = 1) return args[0]

//     let sum = 0;

//     sum = args.reduce((acc, elem) => acc + elem, 0)
//         // return acc + elem; // starts at 0
//     // }, 0)

//     return sum
// }

// let result = sum(5);
// console.log(result);

// let arr = [1, 3, 5];

// let arrB = [...arr];

// console.log(arr);

// arrB[0] = 99;

// console.log(arr, arrB);

// let arr2 = [10, 20, 40, ...arr, 99, 90]

// console.log(arr2);

let arr = [1, 2, 3, 4];

// arr.forEach(el => {

// })

// for(let i = 0 of arr){
//     console.log(val);
// }

let obj = {
    a: 1,
    b: 2,
    c: 3
}

let result = Object.keys(obj);
console.log(result);

// for(let key in obj){
//     let value = obj[key];
//     console.log(key, value);
// }


