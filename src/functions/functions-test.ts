import addNumbers, {addStrings, greeting, unionTypeFunction} from "./functions";

console.log(addNumbers(1, 5));

console.log(addStrings("ala ma", "kota"));

unionTypeFunction("myNumbersArray", [1, 2, 3].map(num => num * 2))
unionTypeFunction("myStringsArray", "ala ma kota".split(" "))

greeting("Hello", "Anne", "Marie", "Valbon");