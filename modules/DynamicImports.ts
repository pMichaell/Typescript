import colors from "./TopLevelAwait";

let someButton = document.querySelector(".someButtonClassName");

//this will import this module only when it's needed
//that is only after user will click the button

someButton?.addEventListener("click", () => {
  import("./shapes/Circle").then((Module) => {
    //since circle has been imported as a "whole" module
    //we need to access its exports with preceding Module
    let importedCircle = new Module.Circle(colors.green);
    importedCircle.draw();
  });
});
