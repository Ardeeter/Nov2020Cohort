

// function add(){

//     let x = 1;
//     let y = 2;

//     function f(){

//         setTimeout(() => {
//             console.log(x+y);
//         }, 10000)
//         // return x+y
//     }

//     f();
//     console.log("add function has completed");
//     return
// }

// add()

// console.log('outside of our function');

// function within function that is using the parent scope to access variables even long after the function has executed

// closures are automatically created in javascript when you define a function. its a function within a function that has access to the variable in the lexical scope where it was defined. It allows you to pass functions or use them somewhere else without losing knowledge of their local variables

// self-invoking function (iffy?)

// (function(){
//     console.log('hello');
// })()

// let result = (function(x, y){
//     console.log(x + y);
// })(3, 4)

// console.log(result);

// let $ = (() => {

//     const pi = 3.14;

//     function multPi(multiplier){
//         return pi * multiplier
//     }
  
//     let jQuery = {
//         multiplyPi: multPi,
//         add567: add
//     };

//     return jQuery
// })();

// console.log($.multiplyPi(5));

// console.log($.add567(5));

const times10 = (n) =>  n * 10;

// const cache = {};

const memoTimes10 = (p) => {

    const cache = {}

    function memo(n){
        if( n in cache){
            console.log('Fetching data from cache :',n);
            return cache[n];
        }
        else{

            console.log('Calculating result');
            cache[n] = times10(n);

            return cache[n];
        }

    }

    return memo(p)

}

console.log('Calculating value of 9: ', memoTimes10(9));  //calcuated 

console.log('Cached value of 9: ', memoTimes10(9));  //cache


console.log('Calculating value of 8: ', memoTimes10(8));  //calcuated 

console.log('Cached value of 8: ', memoTimes10(8));  //cache

console.log('Calculating value of 6: ', memoTimes10(6));  //calcuated 
console.log('Calculating value of 3: ', memoTimes10(3));  //calcuated 

console.log('Cached value of 6: ', memoTimes10(8));  //cache
console.log('Cached value of 3: ', memoTimes10(3));  //cache

