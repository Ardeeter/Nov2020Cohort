
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const db = require('../models');
// const passport = require('./passport-instance');

//req.body.username
//req.body.password

const init = (passport) =>{

    passport.use(new LocalStrategy((username, password, done) => {
        
        db.users.findAll({where: {username: username}})
        .then(record =>{

            if(records != null){
                let record = records[0]
                
                bcrypt.compare(password, record.password, (err, response)=>{

                    if (response){
                        //this means a match -> user with correct password
                        done(null, {id: record.id, username: record.username})
                    }
                    else{
                        //no session for you -> username mismatch
                        done(null, false)
                    }
                })

            }else{
                //no session for you
                done(null, false)
            }
        })
    }))

    passport.serializeUser((user, done) => {
        //passport adding information to the sessions

        done(null, user.id)
    })

    passport.deserializeUser((id, done) => {
        //checking to see if user is valid with the cookie that was passed from request
        //looks for user by ID

        db.users.findByPk(id)
        .then(record =>{

            done(null,record)

        })
    })
}

module.exports = init;