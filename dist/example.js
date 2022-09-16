"use strict";
// Type Annotations
let myName = "Mahdi";
const myAge = 26;
// myName = 29; // Type 'number' is not assignable to type 'string'.ts(2322)
console.log(myName);
// Inferred Types
// TypeScript knows and infer that you assigned string to address
let address = "Iran Tehran";
// address = 25; // Type 'number' is not assignable to type 'string'.ts(2322)
console.log(address);
// Union Types
let theAnswer = 25;
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
// class Person {
//   //   name: string;
//   //   favNumber: number;
//   static species = "homosapien"; // It is only accessible on the class not the instance of the class
//   constructor(
//     public name: string,
//     public family: string,
//     public age: number,
//     protected nationalID: string,
//     private privateSecret: string
//   ) {}
//   currentTime() {
//     return new Date();
//   }
// }
// const mahdi = new Person(
//   "Mahdi",
//   "Salmanizadehgan",
//   26,
//   "secret",
//   "supersupersecret"
// );
// function greet(person: Person) {
//   // static properties are accessible only on the class not on the class instance
//   console.log(Person.species);
//   return `Hello ${person.name} ${
//     person.family
//   } the time is ${person.currentTime()}`;
// }
// console.log(greet(mahdi));
// Generics
// We are able to create resusable components using Generics
// function identity(arg: number): number {
//   console.log(typeof arg);
//   return arg;
// }
// console.log(identity(10));
// function identity(arg: any): any {
//   console.log(typeof arg);
//   return arg;
// }
// console.log(identity("some text"));
// This Function is reusable
function identity(arg) {
    console.log(`argument type is ${typeof arg}`);
    return arg;
}
console.log(identity(true));
// any, unknown, never
// Type Assertions
// @ts-ignore / @ts-nocheck
