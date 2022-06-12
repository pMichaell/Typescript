const string = "first";
const strings = ["second", "third", "fourth"];

//primitives will be converted to String objects under the hood
//in order to call String methods on them
const concatenatedString = string.concat(...strings);
console.log(concatenatedString);

const sentence = 'The quick quick brown fox jumps over the lazy dog.';
const word = "fox";

console.log(sentence.includes(word)); // true
console.log(sentence.includes(word, 20)); //false, starts searching at index 20


console.log(sentence.endsWith("dog.")); // true


console.log(sentence.padStart(50, "T"))
console.log(sentence.padEnd(50, "."))

console.log(sentence.replace(" quick", ""));
// replace all replacer for typescript
console.log(sentence.replaceAll(" quick", ""));

console.log()