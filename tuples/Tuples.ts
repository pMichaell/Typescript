//typical tuple
type ThreeDCoordinate = [x: number, y: number, z: number];

function add3DCoordinate(c1: ThreeDCoordinate, c2:ThreeDCoordinate): ThreeDCoordinate {
    return [
        c1[0] + c2[0],
        c1[1] + c2[1],
        c1[2] + c2[2],
    ]
}

console.log(add3DCoordinate([1, 2, 3], [1, 2, 3]));

//tuple with optional parameter
type TupleWithOptional = [x?:string, y?: string];
let tuplesWithOptionalsArray: TupleWithOptional[] = [
    ["x", 'y'],
    ["x"],
    []
    // this doesn't fit the type ["X", "y", "z"]
]


//tuple with rest operator
type TupleWithRest = [x: string, y:number, ...z:string[]]
let tupleWithRestExample: TupleWithRest = ["foo", 2137, "Anna", "Bell", "Peaks"]
console.log(tupleWithRestExample);

//cloning reacts useState
function simpleStringState(initial: string): [() => string, (toSet:string) => void] {
    let str: string = initial;
    return [
        () => str,
        (toSet: string) => {
        str = toSet
        }
    ]
}

const [getString, setString] = simpleStringState("initialValue");
console.log(getString());
setString("Hello World!")
console.log(getString())
