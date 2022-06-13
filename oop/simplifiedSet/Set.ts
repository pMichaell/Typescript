class Set<T> {
  constructor(protected data?: T[]) {}

  has(element: T): boolean {
    return this.data?.includes(element) ?? false;
  }

  add(element: T): this {
    if (!this.data?.includes(element)) {
      this.data?.push(element);
    }
    return this;
  }
}

const firstSet = new Set<string>(["1", "2", "3"]);
console.log(firstSet.has("2"));
console.log(firstSet.add("4").add("5"));

class MutableSet<T> extends Set<T> {
  remove(element: T) {}
}

//since we specified this as return type in add,
//it will flow down to children classes, and
//they'll return instances of themselves (not parent class)
const mutableSet = new MutableSet([1, 2, 3]).add(4);
console.log(mutableSet);

export {};
