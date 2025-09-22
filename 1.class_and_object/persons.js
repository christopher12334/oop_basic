const {Person} = require(`./person.js`);

const bob = new Person(`Bob`);
const brian = new Person(`Brian`);
const alice = new Person(`Alice`);

const persons = [bob, brian, alice];

bob.printPerson();
brian.printPerson();
alice.printPerson();

while (bob.getAge()<= 15) {
    bob.becomeolder();
}

for (let i = 0; i< 20; i++) {
    brian.becomeolder();
}

bob.printPerson();
brian.printPerson();
alice.printPerson();

persons.forEach(person => {
    if (person.isAdult()) {
        console.log(person.getName() + " Is adult")
    }
    else{
        console.log(person.getName() + " Is minor")
    }
});
