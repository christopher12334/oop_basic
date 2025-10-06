class BulkTank {
    getCapacity() {
        return this.#capacity;
    }

    getVolume() {
        return this.#volume;
    }

    howMuchFreeSpace() {
        return this.#capacity - this.#volume;
    }
    #volume = 0;
    #capacity = 0;

    constructor(capacity = 2000) {
        this.#capacity = capacity;
        this.#volume = 0;
    }

    setVolume(newVolume) {
        this.#volume = Math.max(0, Math.min(newVolume, this.#capacity));
    }

    availableSpace() {
        return this.#capacity - this.#volume;
    }

    addToTank(amount) {
        const canAdd = Math.min(amount, this.howMuchFreeSpace());
        this.#volume += canAdd;
    }

    getFromTank(amount) {
        const canTake = Math.min(amount, this.#volume);
        this.#volume -= canTake;
        return canTake;
    }

    print() {
        const roundedVolume = Math.ceil(this.#volume * 10) / 10;
        const roundedCapacity = Math.ceil(this.#capacity * 10) / 10;
        console.log(`${roundedVolume} / ${roundedCapacity}`);
    }
}


const tank = new BulkTank();
tank.getFromTank(100);
tank.addToTank(25);
tank.getFromTank(5);
tank.print();

const tank2 = new BulkTank(50);
tank2.addToTank(100);
tank2.print();


const NAMES = [
    "Anu", "Arpa", "Essi", "Heluna", "Hely",
    "Hento", "Hilke", "Hilsu", "Hymy", "Ihq", "Ilme", "Ilo",
    "Jaana", "Jami", "Jatta", "Laku", "Liekki",
    "Mainikki", "Mella", "Mimmi", "Naatti",
    "Nina", "Nyytti", "Papu", "Pullukka", "Pulu",
    "Rima", "Soma", "Sylkki", "Valpu", "Virpi"
];

class Cow {
    #name;
    #capacity;
    #amount;

    constructor(name) {
        this.#name = name || NAMES[Math.floor(Math.random() * NAMES.length)];
        this.#capacity = Math.floor(Math.random() * (40 - 15 + 1)) + 15;
        this.#amount = 0;
    }

    getName() {
        return this.#name;
    }

    getCapacity() {
        return this.#capacity;
    }

    getAmount() {
        return this.#amount;
    }

    print() {
        const roundedAmount = Math.ceil(this.#amount * 10) / 10;
        const roundedCapacity = Math.ceil(this.#capacity * 10) / 10;
        console.log(`${this.#name} ${roundedAmount}/${roundedCapacity}`);
    }

    liveHour() {
        const produced = Math.random() * (2.0 - 0.7) + 0.7;
        this.#amount = Math.min(this.#capacity, this.#amount + produced);
    }

    milk() {
        const milked = this.#amount;
        this.#amount = 0;
        return milked;
    }
}


let cow = new Cow();
cow.print();

cow.liveHour();
cow.liveHour();
cow.liveHour();
cow.liveHour();
cow.print();

cow.milk();
cow.print();
console.log("");


let randomCow = new Cow();
randomCow.print();
randomCow.liveHour();
randomCow.liveHour();
randomCow.print();
randomCow.milk();
randomCow.print();



