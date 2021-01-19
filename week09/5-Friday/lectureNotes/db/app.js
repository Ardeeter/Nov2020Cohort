const express = require("express");
const app = express();

//create new database
//config info for database
//learnpgpromise

let config = {
    host: 'localhost',
    port: 5432, 
    database: 'restaurant_v2',
    user: 'postgres'
}

let pgp = require('pg-promise')();

//const db = pgp("postgres://username:password@host:port/database");

let db = pgp(config); //database object - gives access to perform CRUD operations
console.log(db);

// db.query(`SELECT * FROM employees.department`)
// .then(records => {
//     console.log(records);
//     // records = array for objects
//     // console.log(records[1].dept_name);

//     let arr = records.filter(record => {
//         return record.id == 'd005'
//     })
//     console.log(arr[0].dept_name);
// })
// .catch(error => {
//     console.log(error);
// })

// db.one(`SELECT * FROM employees.department WHERE id='d005'`)
// .then(result => {
//     console.log(result);
// })
// .catch(error => {
//     console.log(error);
// })

// DO NOT DO IT THIS WAY
// db.result(`INSERT INTO restaurant VALUES(DEFAULT, 'Oku', '546 Cabrillo St', 'Japanese')`)
// .then(result => {
//     console.log(result);
// })

// DO IT THIS WAY
db.result(`INSERT INTO restaurant VALUES (DEFAULT, $1, $2, $3)`, [`Chase`, `836 State Street`, `Italian`])
.then((result) => {
    console.log(result);
})


app.listen(3000, (req, res) => {
  console.log(`listening on port 3000`);
});

pgp.end()