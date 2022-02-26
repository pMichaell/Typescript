interface Coordinate {
    x: number,
    y: number
}

function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate
function parseCoordinate(str: string): Coordinate
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
    let coord: Coordinate = {
        x:0,
        y:0
    }

    if (typeof arg1 === 'object') {
        coord = {
            //using as to cast unknown to type
            ...arg1 as Coordinate
        }
        return coord;
    }
    if (typeof arg1 === 'number') {
        coord = {
            x: arg1 as number,
            y: arg2 as number
        }
        return coord;
    }

    (arg1 as string)
        .split(",")
        .forEach(str => {
            const [key, value] = str.split(":")
            coord[key as keyof Coordinate] = parseInt(value, 10);
        })

    return coord;
}

console.log(parseCoordinate("x:21,y:23"));
