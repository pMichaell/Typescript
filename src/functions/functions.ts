const addNumbers = (a: number, b: number) => {
    return a + b;
}

//adding default value for function arguments
export const addStrings = (firstString: string = "firstString", secondString: string = "secondString") => {
    return `${firstString} ${secondString}`
}

//using union types to allow multiple parameter types
export const unionTypeFunction = (arrayTitle: string, array: string[] | number[]) => {
    console.log(arrayTitle);
    console.log(array);
}

//returning promises
export const fetchData = (url: string) => {
    Promise.resolve(`Data from ${url}`)
}

//rest parameters
export const greeting = (greeting: string, ...names: string[]) => {
    console.log(greeting,  names.join(" "))
}

export const undefinedProtectionFunction = (user: {first: string, last: string}) => {
    //?. is optional chaining, check if object is undefined
    //?? is null coalescing, if left side is undefined evaluates
    //right side
    return `${user?.first ?? "first"} ${user?.last ?? "last"}`
}

export default addNumbers;

function useState<T>(initialState: T): [() => T, (value: T) => void] {
    let val:T = initialState;
    return [
        () => val,
        (value) => {val = value}
    ]
}

const [getState, setState] = useState("Maria");
console.log(getState());

//ensuring that this in a function can't be null
function noNullThis(this: string) {
    return this;
}

console.log(noNullThis.call("this is a string"));

//generator function
function* createFibonacciGenerator(){
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a +b]
    }
}

let fibonacciSequence = createFibonacciGenerator();

for (let i = 0; i <= 4; ++i) {
    console.log(fibonacciSequence.next())
}

//function call signatures
type useStateCallSignature<T> = (initialState: T) => [() => T, (val: T) => void]
const useStateWithSignature: useStateCallSignature<number> = (initialState) => {
    let val = initialState;
    return [
        () => val,
        (value) => {val = value}
    ]
}
