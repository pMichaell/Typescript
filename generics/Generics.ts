//using generics syntax for a function
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