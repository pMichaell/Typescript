//Generics basics
type numbArray = Array<number>;

//simple function example
const last = <T>(arr: T[]): T => {
    return arr[arr.length - 1]
}

const lastNumber = last([1, 2, 3]);
//explicit declaration of genetic type
const lastString = last<string>(["1", "2", "3"]);

//----------------------------------------------
const makeArr = <T>(...args: T[]) => {
    return args
}

//double generics
//default generic value specified
const doubleGenericsArray = <T,S = any>(x: T, y: S): [T, S] => {
    return [x, y];
}

const v = doubleGenericsArray(1, 2);
const v2 = doubleGenericsArray("a", 2);
//explicit generic type assignment
const v3 = doubleGenericsArray<number, null | string>(3, "a");

//constraining generic types, objects have to have at least firstName and lastName to be proper types for this function
const makeFullName = <T extends {firstName: string, lastName: string}>(obj: T) => {
    return {
        ...obj,
        fullName: obj.firstName + " " + obj.firstName
    }
}

const fullNameExample = makeFullName({firstName: "BOB", lastName: "Odenkirk", age: 51})
// Line below doesn't work, because object doesn't have required values
// const fullNameNotWorking = makeFullName({lastName: "Not working", age: 21})

//--------------------------------------------------------------------------------------------
//generics with interfaces
interface  Tab<T> {
    id: string;
    position: number;
    data: T;
}

type NumberTab  = Tab<number>;
type StringTab = Tab<string>;

//using generics syntax for useState clone
function simpleState<T>(initial: T): [() => T, (toSet:T) => void] {
    let val: T = initial;
    return [
        () => val,
        (toSet: T) => {
            val = toSet
        }
    ]
}

const [firstStateGetter, firstStateSetter] = simpleState(1);
console.log(firstStateGetter())
firstStateSetter(31)
console.log(firstStateGetter());

//overriding the initial value type
const [secondStateGetter, secondStateSetter] = simpleState<string | null>(null);
console.log(secondStateGetter());
secondStateSetter("hello world")
console.log(secondStateGetter());



//second example

interface Rank<RankItem> {
    item: RankItem,
    rank: number
}


function ranker<RankItem>(items: RankItem[], rank: (v: RankItem) => number) : RankItem[] {

    const ranks: Rank<RankItem>[] = items.map(item => ({
        item,
        rank: rank(item)
    }))

    ranks.sort((a, b) => a.rank - b.rank)

    return ranks.map(rank => rank.item);
}

interface Car {
    name: string;
    hp: number;
}

const cars: Car[] = [
    {
        name: "Demon",
        hp: 808
    },
    {
        name: "ZL1",
        hp: 600
    },
    {
        name: "SRT",
        hp: 450
    }
]

console.log(ranker(cars, ({hp}) => hp));