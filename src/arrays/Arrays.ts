const ex1 = function ex1() {
    let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';
    const myArray = myString.split("+");
    const arrayLength = myArray.length;
    const lastItem = myArray[arrayLength - 1];
}

const ex2 = function ex2() {
    let myArray = ["Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri"];
    myArray.pop();
    myArray.push("newName1", "newName2");
    myArray = myArray.map((value, index) => value + ` (${index})`)
    let joined = myArray.join("-");
    console.log(joined)
}

const ex3 = function ex3() {
    const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];
    let index = birds.findIndex(bird => bird === "Eagles");
    birds.splice(index, 1);
    console.log(birds);
    let eBirds = birds.filter(value => value.startsWith("E"));
    console.log(eBirds);
}

ex3();


const dunno: unknown = 'lalala'
if (typeof dunno === 'string') {
    console.log(dunno.length);
}


type intersectionType = { first: () => void } & { second: () => void }
type unionType = { first: () => void | string }

const consumeUnionType = (arg: unionType) => {
    arg?.first();
}
