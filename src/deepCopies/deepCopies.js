let oldObject = {
  name: "A",
  address: {
    street: "Station Road",
    city: "Pune",
  },
  array: [1, 2, 3],
};

//spreading does not work if object has nested reference types
const newObject = {...oldObject};
newObject.address.street = 'new street';
newObject.array[0] = 2;
console.log(oldObject)
console.log(newObject)

const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: 'child',
    objectProp: {
      first: 'first',
      second: 'second'
    }
  },
  field4: [2, 4, 8]
};


const result = structuredClone(target);


