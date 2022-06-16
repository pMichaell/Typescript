interface Foo<T> {
  first: T;
  second: T;
  third?: T;
}

let foo: Foo<string> = {
  first: "first",
  second: "second",
};

//partial marks every field of a type as optional
let partialFoo: Partial<Foo<string>> = {
  first: "first",
};

//required marks every field as required, hence the name
let requiredFoo: Required<Foo<string>> = {
  first: "first",
  second: "second",
  third: "third",
};
