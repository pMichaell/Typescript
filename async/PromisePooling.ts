import {PromisePool} from "@supercharge/promise-pool";
import {getPokemonList, getSinglePokemon} from "./Async";


(async function () {
    const pokemonList = await getPokemonList();

    const {results, errors} = await PromisePool.withConcurrency(2).for(pokemonList.results).process(async data => {
        return await getSinglePokemon(data.url);
    })

    console.log(results.map(pokemon => pokemon.name))
})();
