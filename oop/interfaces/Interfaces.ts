interface Reportable {
  summary(): string;
}

type Assignable = {
  assign(to: string): void;
};

const car = {
  brand: "Honda",
  year: 1990,
  summary(): string {
    return `${this.brand} ${this.year}`;
  },
  assign(to: string) {
    console.log(`${this.brand} assigned to ${to}`);
  },
};

const task = {
  deadline: new Date(),
  topic: "typescript",
  summary(): string {
    return `${this.topic} ${this.deadline}`;
  },
  assign(to: string) {
    console.log(`${this.topic} assigned to ${to}`);
  },
};

const report = function report(object: Reportable) {
  let summary = object.summary();
  console.log(summary);
};

const assign = function assign(object: Assignable, to: string) {
  object.assign(to);
};

report(car);
report(task);
//whole point is that in order for report function to accept an object,
//this object has to  "implement" an interface
//which apparently isn't stated explicitly by keyword in typescript

//WORKS ALSO WITH TYPES

assign(car, "me");
assign(task, "me");
