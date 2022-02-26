let userName: string = "Jack"

let hasLoggedIn: boolean = true

let myNumber: number = 123;

let myRexExp: RegExp = /foo/;

const names: string[] = userName.split(" ");

const myArray: Array<number> = [myNumber, 341];

interface Person {
    //first is optional
    first?: string;
    last: string;
}

const myPerson: Person = {
    first: "Jack",
    last: "Herrington"
}

//using Record for creating a map
const ids: Record<number, string> = {
    10: "a",
    20: "b"
}

ids[30] = "c";

[1, 2, 3].forEach(el => 3 * el);

const mapped = ["adam", "chris"].map(name => name.split("a"))