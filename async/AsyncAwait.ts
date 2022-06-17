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
