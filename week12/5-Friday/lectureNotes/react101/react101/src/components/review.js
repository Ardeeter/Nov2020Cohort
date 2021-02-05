class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.counter = 0;

    }
    incrementCount(){
        this.counter++
        return this.counter
    }

    render(){

        //logic

        let contacts = [
            {firstName: "Adam",
            lastName: "MacKinnon",
            phoneNum: "333-333-3333",
            email: "adam@dc.com"},

            {firstName: "Ally",
            lastName: "Deeter",
            phoneNum: "222-222-2222",
            email: "ally@dc.com"},
            
            {firstName: "Andrea",
            lastName: "Myers",
            phoneNum: "444-444-4444",
            email: "andrea@dc.com"},
        ]
        return ()
    }
}

let adam = new Person('Adam', 'MacKinnon');
let ally = new Person('Ally', 'Deeter');

adam.incrementCount();
adam.incrementCount();

ally.incrementCount();
ally.incrementCount();
ally.incrementCount();
ally.incrementCount();

console.log(adam.incrementCount());
console.log(ally.incrementCount());
