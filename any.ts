// TypeScript has a special type, any.

function amazingFunction(arg: any): any {
  //   if (typeof arg == "string") {
  //     console.log(`Your function argument is string!`);
  //   }
  console.log(arg);
}

amazingFunction({ name: "Mahdi", age: 26 });
