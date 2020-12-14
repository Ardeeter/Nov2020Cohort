// const isUnique = (arr) => {

//     let cache = {};
//     let result = true;

//     // for (let i = 0; i < arr.length; i++) {
//     //   for (let j = 0; j < arr.length; j++) {
//     //     if (i !== j && arr[i] === arr[j]) {
//     //       result = false;
//     //     }
//     //   }

//     for (let i = 0; i < arr.length; i++) {

//         //arr[i]
//         if (cache[arr[i]]){
//             return false;
//         }
//         else{
//             cache[arr[i]] = true;
//         }


//     }
//     return result;
//   };

// const uniqSort = function(arr) {

//     let cache = {}

//     let result = [];

//     for(let i=0 ; i < arr.length ; i++){

//         if(!cache[arr[i]]){
//             result.push(arr[i]);
//             cache[arr[i]] = true;
//         }
//     }

//     result.sort((a, b) =>a - b)

//     return result;
// })

// let arr = [1, 1, 1, 1, 1, 1, 5, 2, 1, 1, 1, 10]

// let str = "hello world";
// str.replace(" ", "");



// const anagrams = function(str1, str2) {

//     let cache = {};

//     let result = [];

//     for(let letter of string1){

//         if(!cache[letter]){
//             result.push(letter);
//             cache[letter] = true;
//         }
//     }

//     result.sort((a, b) =>a - b)

//     return result;
// })

const cache = {};

const memoTimes10 = (n) => {

    if(n in cache){
        console.log("Fetching from cache", n);
        // return cache[n]
    }
    else{
        //store new value in cache
        cache[n] = n * 10

        //message
        console.log('Calculating results');

        //return n * 10
    }

    return cache[n]
}

memoTimes10(9)
memoTimes10(9)