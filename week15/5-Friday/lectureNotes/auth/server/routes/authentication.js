
const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs'); // encrypt passwords
const db = require('../models');

router.use(express.urlencoded({extended: false})); // scrape email and password from request header
router.use(express.json());

const jwt = require('jwt-simple');

router.get('/', (req, res) => {

    res.send('Hello World')
});

// logging in eith credentials
router.post('/signin', (req, res) => {

    // validate user

    // send token
    
    res.send('token')
})

// registering a new user in our database and send back a jwt

router.post('/signup', async (req, res) => {

    // body-parse to scrape info
    // email, password
    let email = req.body.email 

    // encrypt: bcrypt
    let password = bcrypt.hashSync(req.body.password, 8);

    // models - store in database
    try{
        let records = await db.user.findAll({where: {email: email}})

        if (records.length === 0) {
            // add a new record
            let newRecord = await db.user.create({email: email, password: password})

            return //token
        }
        else {
            // send back error message

            return res.status(422).send({error: 'Email already exists'})
        }
    } catch (error){
        // send back error, can't access database
        return res.status(423).send({error: `Can't access database`})
    }

    // create jwt token

    // send back a token
  
}
)


module.exports = router;