
class Person{
    #name = "";
    #age = 1;

    constructor(name) {
        this.#name = name;
    }

    becomeolder() {
        this.#age++
    }

    isAdult(){
        return this.#age >= 18;
    }

    printPerson() {
        console.log(this.#name + ` age: ` + this.#age + ` years`)
    }

    getName() {
        return this.#name;
    }

    setAge(age) {
        this.#age = age;
    }

    getAge() {
        return this.#age;
    }
}

module.exports = { Person };
