//using type keyword for creating a type obviously (can be union type)
//type can be constructed from other types
type stringsType = string | string[];
type numberType = number;
type unionType = stringsType | numberType;

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

//Index Signatures
//lets you define type of keys and their values
//key has to be either string or number
type employeeSignature = {
    [sal: string]: number,
}

let firstEmployee: employeeSignature = {
    baseSalary: 100_000,
    bonusSalary: 10_000
}

let secondEmployee: employeeSignature = {
    baseSalary: 300_000
}

const totalSalary = (...employees: employeeSignature[]) => {
    employees.forEach((emp, index) => {
        let totalSal = 0;
        for (let sal in emp) {
            totalSal += emp[sal];
        }
        console.log(`Total sal for ${index + 1}. employee is ${totalSal}`)
    })
}

totalSalary(firstEmployee, secondEmployee);

//using const to assign a narrow type, val is of type true
//not boolean since its type won't change, because it's a const

const val = true;