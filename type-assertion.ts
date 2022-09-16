// Type Assertion
/**
Sometimes you will have information about the type of a value that TypeScript can’t know about.
For example, if you’re using document.getElementById, TypeScript only knows that this will return 
some kind of HTMLElement, but you might know that your page will always have an HTMLCanvasElement 
with a given ID.In this situation, you can use a type assertion to specify a more specific type:
*/

// const x = "hello" as unknown as number;
// let a = 23.232;
// console.log(a.toFixed());

// const x: string = "hello" as number;
/**
Conversion of type 'number' to type 'string' may be a mistake because 
neither type sufficiently overlaps with the other. If this was intentional, 
convert the expression to 'unknown' first.ts(2352)
*/
// let myAgeAgain = 26 as string;
let myAgeAgain = 26 as unknown as string;
console.log(myAgeAgain.toUpperCase());
