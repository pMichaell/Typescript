class DefinitelyInitializedWithNoValue {
  name!: string;
}

//can't reassign readonly property
class ReadonlyProperties {
  constructor(public readonly name: string) {
    this.name = name;
  }
}

class Test {
  constructor(public test: string) {}
}

class PointData {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

class PointWithConstructorOverload {
  x: number;
  y: number;

  constructor(a: number, b: number);
  constructor(pointData: PointData);
  constructor(a: number | PointData, b?: number) {
    if (a instanceof PointData) {
      this.x = a.x;
      this.y = a.y;
      return;
    }
    if (b) {
      this.x = a;
      this.y = b;
      return;
    }
    this.x = 0;
    this.y = 0;
  }
}

const point = new PointWithConstructorOverload(new PointData(1, 1));

//Note, google discourages to use private fields anyway
//getters and setters will be rarely used in your code
class GettersAndSetters {
  constructor(private _length: number) {}

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = value;
  }
}

let settersAndGetters = new GettersAndSetters(4);
settersAndGetters.length;
settersAndGetters.length = 3;
console.log(settersAndGetters.length);

interface Callable {
  call(): void;
}

class ImplementsCallable implements Callable {
  call(): void {
    console.log("this class implements callable interface");
    console.log("interfaces can be used for dependency inversion");
  }
}

interface InterfaceWithOptionals {
  a: number;
  b: number;
  c?: number;
}

class ClassWithProperties implements InterfaceWithOptionals {
  a: number;
  b: number;

  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }
}

const classWithProperties = new ClassWithProperties(1, 2);
// classWithProperties.c optional fields from interfaces won't create
//field in classes which implement it

//inheritance

class Base {
  greet() {
    console.log("hello");
  }
}

class Derived extends Base {
  greet(greeting?: string) {
    if (greeting) {
      console.log(greeting);
      return;
    }
    super.greet();
  }
}

let derived = new Derived();
derived.greet("nice to meet you");

//referring to instance of a child class via parent class
//hence only parent class greet implementation is available
const base: Base = derived;
base.greet();
