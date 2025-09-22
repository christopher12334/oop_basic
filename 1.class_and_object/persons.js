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
        console.log(person.getName());
    }
    else{
        console.log(person.getName());
    }
});

bob.setHeight(175);
bob.setWeight(70);

brian.setHeight(180);
brian.setWeight(80);

alice.setHeight(160);
alice.setWeight(55);

console.log('Bob BMI:', bob.getBMI());
console.log('Brian BMI:', brian.getBMI());
console.log('Alice BMI:', alice.getBMI());