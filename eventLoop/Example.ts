setTimeout(() => {
  setTimeout(() => console.log("This will be logged before last"), 0);
  setTimeout(() => console.log("This will be logged last"), 0);
  console.log("Second");
}, 0);

console.log("First");

//TODO add microtasks
