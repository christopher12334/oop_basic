class Person{
    #name = "";
    #age = 0;

    constructor(name) {
        this.#name = name;
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

module.exports = {Person};