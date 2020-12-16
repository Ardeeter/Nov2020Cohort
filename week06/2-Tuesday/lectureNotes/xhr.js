

/// XHR --> inter

// lines

// lines

// lines

// const request = new XMLHttpRequest(); //XHR Object

// // event listener -- waits for data to come back and will tell us when it returns
// request.onreadystatechange = function() {
//     // console.log(this);  

//     if (this.readyState === 4){
//         console.log(this.responseText); // comes as a string --> needs to be formatted

//         let data = JSON.parse(this.responseText); //conversion of string to object
//         console.log(data);
//     }
// };

// // 
// request.open("GET", "https://jsonplaceholder.typicode.com/todos");

// request.send()

// Faster way :

// let result = fetch("https://jsonplaceholder.typicode.com/todos"); 

// console.log(result);

// JS is single threaded (one call stack, one execution, one global memory)
// JS is sychronous

// 1 2 3 5 8 13 ... fib(n-1) + fib(n-2)
// let fib = (n) => {
    
//     if (n < 2){
//         return n
//     }

//     return fib(n-1) + fib(n-2)
// }

// console.log(fib(10))

// let sum = 10;

// for(let i=0 ; i < 10 ; i++ ){

//     sum += i;
// }
// console.log(sum);

console.log('before set timeout')

setTimeout(() => {
    console.log('inside of set timeout');
}, 5000)

console.log('outside of set timeout')