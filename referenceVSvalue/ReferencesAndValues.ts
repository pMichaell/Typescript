const a = 10;
let c = a;
c = c + 1;
console.log(a);
console.log(c);

let d = [1, 2]
let e = d;
// e and d point to the same memory address

e.push(3);
console.log("d", d);
console.log("e", e);

//d address has been overridden
d = [3, 4, 5];

console.log("e", e)
console.log("d", d)

let person = {name: "Michael"}
let copiedPerson = {...person};

person.name = "Not Michael"

console.log(person)
console.log(copiedPerson);


const f = [1, 2];
const g = [1, 2];

//This compares whether f and g are the same object in memory
console.log(f === g);
console.log(f == g)

console.log(f.length === g.length && f.every((element, index) => element === g[index]));

const testForMethod = [1, 5, 7];

const addElement = function <T>(array: T[], element: T) {
    array.push(element);
}

addElement(testForMethod, 10) //0x01, 3 is being passed, array from outer scope is being affected;

console.log(testForMethod)

const number = 1;

const addToNumber = function (num: number) {
    num++;
}

addToNumber(number);
console.log(number);


const sorting = [8, 10, 2, 1];
sorting.sort((a, b) => a - b);
console.log(sorting);
console.log(sorting.sort((a, b) => a - b))
console.log(sorting.sort((a, b) => b - a))