//using type keyword for creating a type obviously (can be union type)
//type can be constructed from other types
type stringsType = string | string[];
type numberType = number;
type unionType = stringsType | numberType;

let userName: string = "Jack";

let hasLoggedIn: boolean = true;

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
  last: "Herrington",
};

//using Record for creating a map
const ids: Record<number, string> = {
  10: "a",
  20: "b",
};

ids[30] = "c";

[1, 2, 3].forEach((el) => 3 * el);

const mapped = ["adam", "chris"].map((name) => name.split("a"));

//Index Signatures
//lets you define type of keys and their values
//key has to be either string or number
type employeeSignature = {
  [sal: string]: number;
};

let firstEmployee: employeeSignature = {
  baseSalary: 100_000,
  bonusSalary: 10_000,
};

let secondEmployee: employeeSignature = {
  baseSalary: 300_000,
};

const totalSalary = (...employees: employeeSignature[]) => {
  employees.forEach((emp, index) => {
    let totalSal = 0;
    for (let sal in emp) {
      totalSal += emp[sal];
    }
    console.log(`Total sal for ${index + 1}. employee is ${totalSal}`);
  });
};

totalSalary(firstEmployee, secondEmployee);

//using const to assign a narrow type, val is of type true
//not boolean since its type won't change, because it's a const

const val = true;

//extending interfaces vs extending types

interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

let bear: Bear = {
  name: "bear",
  honey: true,
};

export type Car = {
  name: string;
};

type EuropeanCar = Car & {
  smallEngine: boolean;
};

let europeanCar: EuropeanCar = {
  smallEngine: true,
  name: "Skoda",
};

//narrowing types

const reqData = { url: "pokemon/api", method: "GET" };

const constReqData = { url: "pokemon/api", method: "GET" } as const;

export function fetchData(url: string, method: "GET" | "POST") {
  console.log("fetching data");
}

//this won't work since method in req Data is typed as string
//we have to cast it to const in order to assign a literal type
// fetchData(reqData.url, reqData.method);

fetchData(constReqData.url, constReqData.method);
