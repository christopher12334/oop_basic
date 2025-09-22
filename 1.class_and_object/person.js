
class Person {
    #name = "";
    #age = 1;
    #weight = 10;
    #height = 100; 

    constructor(name) {
        this.#name = name;
    }

    becomeolder() {
        this.#age++;
    }

    isAdult() {
        return this.#age >= 18;
    }

    printPerson() {
        console.log(`${this.#name} age: ${this.#age} years`);
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

    setHeight(height) {
        this.#height = height;
    }

    getHeight() {
        return this.#height;
    }

    setWeight(weight) {
        this.#weight = weight;
    }

    getWeight() {
        return this.#weight;
    }

    getBMI() {
        if (this.#height <= 0) {
            return null;
        }
        const heightInMeters = this.#height / 100;
        const bmi = this.#weight / (heightInMeters * heightInMeters);
        return Math.round(bmi * 100) / 100;
    }
}

module.exports = { Person };
