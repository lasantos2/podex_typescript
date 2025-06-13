import type { State } from "./state.js"

export async function commandCatch(state:State, name: string[]){
  console.log(`Throwing a Pokeball at ${name[0]}...`)
  let pokemon: any;

  try {
    pokemon = state.pokeAPI.fetchPokemon(name[0]);
  } catch (e) {
    throw new Error("Unable to finish API key");
  }

  let experience = pokemon.base_experience;
  console.log(experience);

  let catchRatio = 1;
  if (catchRatio >= 0.5) {
    console.log(`${name[0]} has been caught`);
    state.pokedex[name[0]] = pokemon;
  } else {
    console.log(`${name} has got away`);
  }




}
