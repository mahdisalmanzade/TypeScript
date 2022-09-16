"use strict";
class Person {
    name;
    family;
    age;
    hobbies;
    martialStatus;
    iternalSecret;
    privateSecret;
    static species = "homosapien";
    constructor(name, family, age, hobbies, martialStatus, iternalSecret, privateSecret) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.hobbies = hobbies;
        this.martialStatus = martialStatus;
        this.iternalSecret = iternalSecret;
        this.privateSecret = privateSecret;
    }
    getPrivateSecret() {
        return `${this.privateSecret}`;
    }
}
const mahdi = new Person("Mahdi", "Salmanizadehgan", 26, ["Gym", "Study"], false, "internalSecret", "privateSecret");
console.log(mahdi.getPrivateSecret());
function greet(person) {
    return `Hello ${person.name} ${person.family}, your age is satisfied,
  your hobbies are ${person.hobbies.slice()}`;
}
console.log(greet(mahdi));
