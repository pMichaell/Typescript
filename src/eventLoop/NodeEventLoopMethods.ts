/*
Calling setTimeout(() => {}, 0) will execute the function at the end of next tick,
much later than when using nextTick() which prioritizes the call and
executes it just before the beginning of the next tick.
 */

process.nextTick(() => {
  console.log("run this before current tick of the event loop ends");
});

//setImmediate will run code at the end of the next tick
// (similar to setTimeout(() => {}, 0)

const baz = () => console.log("baz");
const foo = () => console.log("foo");
const zoo = () => console.log("zoo");
const start = () => {
  console.log("start");
  setImmediate(baz);
  new Promise((resolve, reject) => {
    resolve("bar");
  }).then((resolve) => {
    console.log(resolve);
    process.nextTick(zoo);
  });
  process.nextTick(foo);
};
start();

// start foo bar zoo baz

export {};
