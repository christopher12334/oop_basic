const {Person} = require(`./person.js`);

const bob = new Person(`Bob`);

console.log(bob);
console.log(`name: ` + bob.getName());
console.log(`age: ${bob.getAge()}`);