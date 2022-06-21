/*setTimeout(() => {
  setTimeout(() => console.log("This will be logged before last"), 0);
  setTimeout(() => console.log("This will be logged last"), 0);
  console.log("Second");
}, 0);

console.log("First");*/

function baz() {
  console.log("baz");
}

async function promiseResolve() {
  setTimeout(() => console.log("this will be last"), 0);
  console.log("foo");
  Promise.resolve(
    "this will be printed before last,\n" +
      "promises that resolv before function ends will be executed\n" +
      "right after function ends"
  ).then((description) => console.log(description));
  baz();
}

promiseResolve();

//TODO add microtasks
