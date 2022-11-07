const colors = fetch("./colors.json")
  //response.json() to parse json into javascript object
  .then((response) => response.json());
//.json() returns a promise, which resolves into js object

//await in the exports ensures that any other modules
//using this module will wait until colors has been
//fully downloaded and parsed before using it
export default await colors;
