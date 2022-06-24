//Promise.race(), returns a promise with the
//value of the first settled promise (either rejected or resolved)

let firstPromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "first");
});

let secondPromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 300, "second");
});

let rejectedPromise = new Promise((resolve, reject) => {
  setTimeout(
    reject,
    600,
    "rejected promise won't " +
      "be called in the second IIFE,\n since " +
      "first promise settles first"
  );
});

(async function () {
  let result = await Promise.race([firstPromise, secondPromise]);
  console.log(result);
})();

(async function () {
  try {
    let result = await Promise.race([
      firstPromise,
      secondPromise,
      rejectedPromise,
    ]);
    console.log(result);
  } catch (e) {
    console.log("in catch block", e);
  }
})();

/*
Promise.any() settles when any of the promises you pass to it
fulfill or all of the promises get rejected.
It returns a single promise that resolves with the value from
the first promise that is fulfilled.
If all promises are rejected, then the returned promise is
rejected with an AggregateError.
 */
