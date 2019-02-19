function solve() {
    let arr = [];

    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    let person1 = new Person('Maria', 'Petrova', 22, 'mp@yahoo.com');
    let person2 = new Person('SoftUni');
    let person3 = new Person('Stephan', 'Nikolov', 25);
    let person4 = new Person('Peter', 'Kolev', 24, 'ptr@gmail.com');

    arr.push(person1);
    arr.push(person2);
    arr.push(person3);
    arr.push(person4);

    return arr;
}