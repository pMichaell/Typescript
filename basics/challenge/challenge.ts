var houses = require('./houses.json');

interface House {
    name: string;
    planets: string | string[];
}

interface HouseWithID {
    ID: number;
    house: House;
}

function findHouses(houses: string): HouseWithID[];

function findHouses(
    houses: string,
    filter: (house: House) => boolean
): HouseWithID[];

function findHouses(houses: House[]): HouseWithID[];

function findHouses(
    houses: House[],
    filter: (house: House) => boolean
): HouseWithID[];

function findHouses(arg1: string | House[], filter?: (house: House) => boolean): HouseWithID[] {
    let inputData: House[] = [];
    let outputData: HouseWithID[];
    if (typeof arg1 === "string") {
        inputData = JSON.parse(arg1 as string);
    } else {
        inputData = arg1;
    }

    if (filter !== undefined) {
        inputData = inputData.filter(filter)
    }

    outputData = inputData.map(house => {
        return {ID: Math.random(), house}
    });

    return outputData;
}


console.log(
    findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);

console.log(findHouses(houses, ({name}) => name === "Harkonnen"));

