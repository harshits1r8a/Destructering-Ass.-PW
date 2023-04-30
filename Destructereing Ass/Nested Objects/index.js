

function personNameandStreet(person){
    const {name, address : {street}} = person;
    return { name , street };
}

let person = {
    name : "harshit",
    age : 12,
    address : {
        street : "Mg Road",
        state : "UP"
    }
}

const {name , street} = personNameandStreet(person);
console.log(name)
console.log(street)