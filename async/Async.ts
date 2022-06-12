import fetch from "node-fetch";
import { Pokemon, PokemonList } from "./Models";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

//specify promise return type

export const getPokemonList = async function getPokemonList(): Promise<PokemonList> {
  const listResp = await fetch(API_URL);
  return await listResp.json();
};

export const getSinglePokemon = async function getPokemon(
  url: string
): Promise<Pokemon> {
  const dataResponse = await fetch(url);
  return await dataResponse.json();
};

const fetchData = (async function fetchData() {
  try {
    let list = await getPokemonList();
    const pokemon = await getSinglePokemon(list.results[0].url);
    console.log(pokemon.name);
  } catch (e) {
    console.error(e);
  }
})();

//Creating our own promises
const getFirstPokemon = async function getFirstPokemon(): Promise<Pokemon> {
  return new Promise(async (resolve, reject) => {
    try {
      const list = await getPokemonList();
      resolve(await getSinglePokemon(list.results[0].url));
    } catch (error) {
      reject(error);
    }
  });
};

//using the promise
(async function () {
  try {
    const pokemon = await getFirstPokemon();
    console.log(pokemon.name);
  } catch (error) {
    console.error(error);
  }
})();

//Promises as cache, promise below won't run twice;
(async function () {
  const pokemonPromise = getFirstPokemon();
  const { name } = await pokemonPromise;
  //in the line below result is present instantly since
  //this promise has been already fulfilled
  const { name: name2 } = await pokemonPromise;

  console.log("In pokemon promise caching", name, name2);
})();

(async function () {
  try {
    const list = await getPokemonList();
    //forEach is not compatible with async await!!!
    for (const listItem of list.results) {
      const pokemon = await getSinglePokemon(listItem.url);
      console.log(pokemon.name);
    }
    /* list.results.reduce<Promise<unknown>>(async (promise, pokemon) => {
      await promise;
      return getSinglePokemon(pokemon.url);
    }, Promise.resolve(undefined));*/
  } catch (error) {
    console.error(error);
  }
})();

//using promise.all();
(async function () {
  try {
    console.log("Promise all testing");
    let list = await getPokemonList();
    let promises = list.results
      .slice(0, 5)
      .map((pokemon) => getSinglePokemon(pokemon.url));
    let results = await Promise.all(promises);
    console.log("promise all results", results);
  } catch (error) {
    console.error(error);
  }
})();
