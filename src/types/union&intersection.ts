interface EggLayable {
    layEggs: () => void;
}

interface Dodo extends EggLayable {
    walk: () => string;
}

interface Eagle extends EggLayable{
    fly: () => number;
}

const consumeBird = ({layEggs, live}: (Eagle | Dodo) & {live: () => void}) => {
}
