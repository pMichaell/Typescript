const asyncFunction = async function (data?: string): Promise<string> {
  return new Promise((resolve, reject) => {
    if (data && data.length > 3) {
      resolve("data length correct");
    }
    reject("data too short");
  });
};

//rejected result is a promise
let rejectedResult = asyncFunction();

(async function getData() {
  try {
    let data = await rejectedResult;
    console.log(data);
  } catch (error) {
    //if the promise is rejected await throws the rejected value
    console.log(error);
  }
})();

let resolvedResult = asyncFunction("over 3 letters");

(async function getData() {
  try {
    let data = await resolvedResult;
    console.log(`resolved with value: ${data}`);
  } catch (error) {
    //if the promise is rejected await throws the rejected value
    console.log(error);
  }
})();

let notAsyncFunction = () => "I'm not async";

(async function getData() {
  try {
    let data = await notAsyncFunction();
    console.log(`resolved with value: ${data}`);
  } catch (error) {
    //if the promise is rejected await throws the rejected value
    console.log(error);
  }
})();

console.log(
  "This will be printed before everything, since promises code \nis being pushed to the event queue\n" +
    "console.log is pushed immediately to the stack"
);

async function promiseAll() {
  let positiveResult = asyncFunction("this is a positive result");
  let positiveResult2 = asyncFunction("will resolve");
  let negativeResult = asyncFunction("ab");

  let promises: Promise<string>[] = [positiveResult, positiveResult2];
  let promisesWithRejection = [positiveResult, negativeResult, positiveResult2];

  let allResolved = await Promise.all(promises);
  console.log("All resolved promise value", allResolved);

  try {
    //if any of the promises rejects in Promise.all
    //cause of the very first rejection will be thrown as error
    let rejected = await Promise.all(promisesWithRejection);
    console.log(rejected);
  } catch (rejectionFromPromiseAllError) {
    console.log("catched from promise.all", rejectionFromPromiseAllError);
  }
}

promiseAll();
