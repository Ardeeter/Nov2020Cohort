let names = {

    firstName: "James",
    lastName: "Bond",
    age: 100,
    info: function (info){
        console.log(`Info ${info}`);
    },
    warning: function(warning){
        console.log(`Warning ${warning}`);
    },
    error: function(error){
        console.log(`Error ${error}`);
    }
}

module.exports = names;

// let names2 = {

//     firstName: "Spider",
//     lastName: "Man"
// }

// module.exports = names;

