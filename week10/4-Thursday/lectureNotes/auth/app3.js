// request --> express --> response

// /about

// [
//   fun1, next
//   fun2,
//   fun3
// ]

// let myFunction = function(req, res, next){
// }

// [
//     public,
//     helmet
// ]

const { publicDecrypt } = require('crypto');
const express = require('express');
const app = express();
const helmet = require('helmet');

// let urlencoded = function(val){

//     return function(req, res, next){
//         next()
//     }
// }

// app.use(function(req, res, next){
//     next()
// })


// app.use(function(req, res, next){next()});

app.use(express.static('public'))

app.use(helmet())

app.all('/', (req, res, next) => {
    console.log('log some data');
    next();
})

let authLogin = (req, res, next) =>{
    console.log(`we're checking authentication`);
    next()
}

app.get('/', authLogin, (req, res, next) => {

    if (true){
        res.send('home page')
    }else{
        next(new Error('there was an error'))
    }
})

app.post('/', (req, res) => {
    res.send('post')
})

app.put('/', (req, res) => {
    res.send('put')
})

app.get('/about', (req, res) => {
    res.send('home')
})

app.use(function(err, req, res, next){
    console.log('here is an error');
    console.log(err.message);
})

app.listen(3000, () => {
    console.log('Listening on 3000');
})

