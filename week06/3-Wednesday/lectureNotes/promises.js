
// let div = document.addEventListener("click", () => {});

// // everything in node is a callback --> asyncronous 

// //setTimeout() browser related function (browser = C++)

// // goes to the queue

// setTimeout(() => {
//     console.log('inside of setTimeout');
// }, 0)

// // goes to the call stack --> runs this syncronous code before queue

function fib(n){
    if(n<2){
        return n
    }
    return fib(n-2) + fib(n-1)
}

// console.log(fib(40));

// console.log('outside of setTimeout');

// Create a new promise 
// resolve: take data from promise and passes it to the next block in the chain
// reject: if error occurs this will pass through the next block of chain

// let promise = new Promise((resolve, reject) => {

//     if(true){
//         let result = fib(40);
//         resolve(result);
//     } else {
//         reject('there was an error')
//     }

// });

// promise.then(fibResult =>{
//     console.log(fibResult);
//     return fibResult * 2
// })

// promise.then(mult2 =>{
//     console.log(mult2);
// })

// promise.catch(error => {
//     console.log(error);
// })

// //sych code

// New Promise:

// let fetch = new Promise((resolve, reject) => {
    
//     const request = new XMLHttpRequest(); //XHR Object

//     request.onreadystatechange = function(){
//         if(this.readyState === 4){

//             resolve(this.responseText)

//         } else if (this.status === 400){

//             reject(`error: can't fetch url`)
//         }

//     }

//     request.open("GET", "https://jsonplaceholder.typicode.com/todos");
//     request.send()


// });

// fetch.then(response =>{
//     let resp = JSON.parse(response);
//     console.log('object', resp);
//     return resp;
// })

// fetch.then(data =>{
//     console.log('data recieved', data);
// })

// fetch(url)
// .then(result)

// let arr = []

// fetch('https://jsonplaceholder.typicode.com/photos');
// .then(result => result.json())
// .then(data =>{
//     arr.push(data)
//     )

let p1 = fetch('https://jsonplaceholder.typicode.com/photos');

let p2 = fetch('https://jsonplaceholder.typicode.com/todos');

Promise.all([p1, p2])
.then(respArr => {
    let arr = [];
    arr.push(respArr[0].json());
    arr.push(respArr[1].json());

    return Promise.all(arr);
})

.then(data =>{
    console.log(data);
})
