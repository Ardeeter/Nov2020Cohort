
const express = require('express');
const router = express.Router()

router.get('/calculate/:first/:second/:operation', (req, res) => {

    let first = req.params.first;
    let second = req.params.second;
    
    switch(req.params.operation){
        case "add" :
            res.send(`${first} + ${second} = ${eval(`${first} + ${second}`)}`);
            break 
        case "subtract":
            res.send(`${first} - ${second} = ${eval(`${first} - ${second}`)}`);
            break
        case "multiply":
            res.send(`${first} * ${second} = ${eval(`${first} * ${second}`)}`);
            break
        case "divide":
            (`${first} / ${second} = ${eval(`${first} / ${second}`)}`);
            break
        default:
            console.log("Error: Enter operation (add, subtract, multiply, or divide)");
            break
        }

    // if(req.params.operation === "add"){
    //     let first = parseInt(req.params.first)
    //     let second = parseInt(req.params.second)
    //     res.send(`${first} + ${second} = ${first + second}`) 
    // } else if (req.params.operation === "subtract"){
    //     let first = parseInt(req.params.first)
    // let second = parseInt(req.params.second)
    // res.send(`${first} - ${second} = ${first - second}`)
    // } else if (req.params.operation === "multiply"){
    //     let first = parseInt(req.params.first)
    //     let second = parseInt(req.params.second)
    //     res.send(`${first} * ${second} = ${first * second}`)
    // } else if (req.params.operation === "divide"){
    //     let first = parseInt(req.params.first)
    //     let second = parseInt(req.params.second)
    //     res.send(`${first} / ${second} = ${first / second}`)
    // }
})

module.exports = router