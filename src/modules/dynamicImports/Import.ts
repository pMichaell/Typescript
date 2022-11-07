//IIFE below
(async function getModule() {
  try {
    // wait for the promise containing the module to resolve
    const module = await import("./Export");
    module.logger("this can be used to lazy import modules when it's needed");
    module.logger(
      "It can be also used for assigning import path a dynamic value"
    );
    module.logger(
      "import returns a promise which resolves to the imported module"
    );
    module.adder(2, 2);
  } catch (e) {
    console.log("since promise can be rejected we can catch the error");
  }
})();

export {};
