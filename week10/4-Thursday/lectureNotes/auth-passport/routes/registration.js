const express = require('express');
const router = express.Router();
const models = require('../models');
const bcrypt = require('bcryptjs');
const db = require('../models');


router.get('/registration', (req, res) => {

    res.render('registration')
    
})

router.post('/registration', async (req, res) => {

    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;

    // hash password
    try{
        let passwordEncrypted = bcrypt.hashSync(password, 8);

        //should add logic for duplicate usernames
        let insertResult = await db.users.create({
            username: username,
            email: email,
            password: passwordEncrypted,
            roleID: 1
        })
    
        res.redirect('/login')
    }
    catch(error){
        res.send('Error: Cannot Register')
    }
    
})

module.exports = router