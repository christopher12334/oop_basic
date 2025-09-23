class MyDate{
    #day = 0
    #month = 0
    #year = 0
    constructor(day, month, year){
        this.#day = day;
        this.#month = month;
        this.#year = year;
        this.isValid();
    }
    isValid() {
        if (!Number.isInteger(this.#day) || !Number.isInteger(this.#month) || !Number.isInteger(this.#year)) {
            console.log('Day, month, and year must be integers.');
            return false;
        }

        if (this.#year < 1) {
            console.log('Year must be a positive integer.');
            return false;
        }
        if (this.#month < 1 || this.#month > 12) {
            console.log('Month must be between 1 and 12.');
            return false;
        }

        if (this.#day < 1) {
            console.log('Day must be a positive integer.');
            return false;
        }

        const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (this.#day < 1 || this.#day > daysInMonth[this.#month - 1]) {
            console.log(`Day must be between 1 and ${daysInMonth[this.#month - 1]} for month ${this.#month}.`);
            return false;
        }
        return true;
    }

    setDay(day) {
        if (typeof day !== 'number' || day <= 0) {
            throw new Error('Day must be a positive number');
        }
        this.#day = day;
    } 

    setMonth(month) {
        if (typeof month !== 'number' || month <= 0) {
            throw new Error('Month must be a positive number');
        }
        this.#month = month;
    }

    setYear(year) {
        if (typeof year !== 'number' || year <= 0) {
            throw new Error('Year must be a positive number');
        }
        this.#year = year;
    }

    printDay() {
    return `${this.#day}.${this.#month}.${this.#year}`;
    }

    earlier(compared) {
    if (this.#year < compared.#year) return true;
    if (this.#year > compared.#year) return false;
    if (this.#month < compared.#month) return true;
    if (this.#month > compared.#month) return false;
    if (this.#day < compared.#day) return true;
    if (this.#day > compared.#day) return false;
    return false;
    }


}

const date1 = new MyDate(15, 8, 2023);
console.log('Date 1:', date1.printDay());

const date2 = new MyDate(20, 12, 2025);
console.log('Date 2:', date2.printDay());

if (date1.earlier(date2)) {
    console.log(`${date1.printDay()} is earlier than ${date2.printDay()}`);
} else {
    console.log(`${date1.printDay()} is not earlier than ${date2.printDay()}`);
}
