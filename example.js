// Type Annotations
var myName = "Mahdi";
var myAge = 26;
// myName = 29; // Type 'number' is not assignable to type 'string'.ts(2322)
console.log(myName);
// Inferred Types
// TypeScript knows and infer that you assigned string to address
var address = "Iran Tehran";
// address = 25; // Type 'number' is not assignable to type 'string'.ts(2322)
console.log(address);
// Union Types
var theAnswer = 25;
theAnswer = "YES";
console.log(theAnswer);
// Objects and Interfaces
// interface Person {
//   name: string;
//   favNumber: number;
// }
// const person = {
//   name: "Mahdi",
//   favNumber: 20,
// };
// function greet(person: Person) {
//   return `Hello ${person.name} how are you?`;
// }
// console.log(greet(person));
// Optional
// interface Person {
//   name: string;
//   favNumber: number;
//   sex?: string;
//   haveIELTS?: string;
//   currentTime(): Date;
// }
// const person = {
//   name: "Mahdi",
//   favNumber: 20,
//   currentTime() {
//     return new Date();
//   },
// };
// function greet(person: Person) {
//   return `Hello ${person.name} how are you?`;
// }
// console.log(greet(person));
// Classes
var Person = /** @class */ (function () {
  //   name: string;
  //   favNumber: number;
  function Person(name, family, age, nationalID) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.nationalID = nationalID;
  }
  Person.prototype.currentTime = function () {
    return new Date();
  };
  return Person;
})();
var mahdi = new Person("Mahdi", "Salmanizadehgan", 26, "secret");
function greet(person) {
  return "Hello ".concat(person.name);
}
console.log(greet(mahdi));
// Generics
// any, unknown, never
// Type Assertions
// @ts-ignore / @ts-nocheck
