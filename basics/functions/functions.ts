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

