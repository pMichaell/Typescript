"use strict";

function hello(name) {
  console.log(this);
  return `Hello ${name}`;
}

//function invocation
const message = hello("Brad");

// this in function invocation is undefined (in strict mode),
// if not in strict it is the global object

// Method invocation, method is a function stored in an object
const numbers = {
  numberA: 5,
  numberB: 10,

  sum() {
    console.log(this === numbers);

    function calculate() {
      return this.numberA + this.numberB;
    }

    //if we would not set this for calculate with bind, it would've been undefined;
    return calculate.bind(this);
  },
};

// this is method invocation, in method invocation this equals to the object which holds the method
// we had to set 'this' context for calculate function since it is not a field of numbers object,
// so it did not have access to this
console.log(numbers.sum()());

const calc = {
  num: 0,
  increment() {
    return (this.num += 1);
  },
};

calc.increment();
calc.increment();
console.log(calc.increment());

const myDog = Object.create({
  sayName() {
    console.log(this === myDog); // => true
    return this.name;
  }
});
myDog.name = 'Milo';
// method invocation. this is myDog
myDog.sayName(); // => 'Milo'

class Planet {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const earth = new Planet('earth');
console.log(earth.getName())

//this is not method invocation anymore, it is function invocation
//this context has been lost
try {
  const getName = earth.getName;
  console.log(getName())
} catch (e) {
}
//fix this
const getNameWithThis = earth.getName.bind(earth);
console.log(getNameWithThis());

function Pet(type, legs) {
  this.type = type;
  this.legs = legs;
  this.logInfo = function() {
    console.log(`The ${this.type} has ${this.legs} legs`);
  }
}

function Pet2(type, legs) {
  this.type = type;
  this.legs = legs;
  this.logInfo = () => {
    //use anonymous function to bind 'this' lexically
    console.log(`The ${this.type} has ${this.legs} legs`);
  }
}
const myCat = new Pet('Cat', 4);
// logs "The undefined has undefined legs"
// or throws a TypeError in strict mode
// function is detached from object when passed as parameter
// and will be invoked as function invocation not method invocation
setTimeout(myCat.logInfo, 100);

//fix this
setTimeout(myCat.logInfo.bind(myCat), 100)
