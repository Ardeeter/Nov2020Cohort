
let db = require('./models');

// db.user.findAll()
// .then(records => {
//     // [{},{},{}] array of objects
//     // console.log(records);

//     records.forEach(record =>{
//         console.log(record.id, record.firstName, record.lastName);
//     })
// })

// db.user.findByPk(4)
// .then(user =>{
//     console.log(user.firstName, user.lastName);
// })

// db.user.findAll({where: {lastName: 'White'}})
// .then(records =>{
//     //[{},{},{}]
//     console.log(records[0].firstName, records[0].lastName);
// })

// db.user.destroy({where: {id: 2}})
// .then(numRowsDeleted =>{
//     if(numRowsDeleted >= 1){
//         console.log(`${numRowsDeleted} rows have been deleted from database`);
//     }
// })

// db.user.update({lastName: 'McKinnon'},{where: {id: 3}})
// .then(updatedRecord =>{
//     console.log(updatedRecord[0]);
// })

// db.user.create({
//     firstName: "Andrea",
//     lastName: "Myers",
//     email: "andrea@dc.com"
// });

// db.user.create({
//     firstName: "Joe",
//     lastName: "Stocks",
//     email: "joe@dc.com"
// });

// db.user.create({
//     firstName: "Adam",
//     lastName: "MacKinnon",
//     email: "adam@dc.com"
// });

// db.user.create({
//     firstName: "Cedael",
//     lastName: "White",
//     email: "cedael@dc.com"
// });

db.blogs.findAll({

    where: {userID: 1},
    include: [{
        model: db.user,
        required: true
    }]
})
.then(records => {
    //[{}, {}, {}]
    records.forEach(blog =>{
        console.log(blog.title, blog.user.firstName, blog.user.lastName);
    })
})