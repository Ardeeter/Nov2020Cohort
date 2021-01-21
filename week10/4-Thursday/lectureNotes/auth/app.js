
const pbkdf2 = require('pbkdf2');
const crypto = require('crypto')
// const derivedKey = pbkdf2.pbkdf2Sync('password', 'salt', 1, 32, 'sha512')

let password = 'some user password';

// 20 random characters
let salt = crypto.randomBytes(20).toString('hex');

// hash combination of our password and salt

let key = pbkdf2.pbkdf2Sync(password, salt, 3600, 256, 'sha256')

// console.log(key);

let hash = key.toString('hex');

// console.log(hash);

// * is used as a delimeter (seperated) of data -- could be * or $

let stored_pass = `pbkdf2_sha256*3600*${salt}*${hash}`

// console.log(stored_pass);

// Simulate a person logging in

// Input Username and password via form

// password = [pbkdf2_sha256, 3600, salt, hash]

// Use database call to retrieve account

let pass_parts = stored_pass.split('*');

// console.log(pass_parts);

let newPassword = 'some user password';

let keyNewLogin = pbkdf2.pbkdf2Sync(newPassword, pass_parts[2], parseInt(pass_parts[1]), 256, 'sha256')

// console.log(keyNewLogin);

let hashNewLogin = keyNewLogin.toString('hex');

// comparing database hash with new hash

if(hashNewLogin === pass_parts[3]){
    console.log('Password Accepted');
} else {
    console.log('Invalid Password');
}
