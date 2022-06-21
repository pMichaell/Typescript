//Arrays
let a, b, rest;
//a = 10, b = 20
[a, b] = [10, 20];

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(a, b, rest);

//objects

// a = 10, b = 20
({ a, b } = { a: 10, b: 20 });

// a = 10, b = 20, rest = {c: 30, d: 40}
({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });

//tips

//instead of using indexes for small datasets,
//you can use destructurizing syntax
let myTuple: [
  firstElement: string,
  secondElement: string,
  thirdElement: number
] = ["a", "b", 3];
let [first, second, third] = myTuple;

//if the left hand side expression can have more elements
//than right hand side, elements can be assigned defaults
let [firstEl, secondEl, thirdEl, fourthEl = 2137] = myTuple;
console.log(fourthEl);
console.log(firstEl);

//swapping variables
a = 2;
b = 3;
[b, a] = [a, b];
console.log(`a:${a}, b:${b}`);

//swapping array elements
let arr = [1, 2, 3];
[arr[1], arr[0]] = [arr[0], arr[1]];
console.log(arr);

export {};
