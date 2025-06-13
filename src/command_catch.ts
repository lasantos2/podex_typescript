import type { State } from "./state.js"

export async function commandCatch(state:State, ...name: string[]){
  console.log(`Throwing a Pokeball at ${name[0]}...`)
  let pokemon: any;

  try {
    pokemon = await state.pokeAPI.fetchPokemon(name[0]);
  } catch (e) {
    throw new Error("Unable to finish API key");
  }

  let experience = pokemon.base_experience;


  let catchRate = experience;
  let catchChance = (catchRate * (255 - pokemon.stats[0].base_stat))/ 255;
  let random_roll = Math.floor(Math.random() * (Math.floor(255) - (Math.ceil(1) + 1) + Math.ceil(1)));

  if (random_roll <= catchChance) {
    console.log(`${name[0]} has been caught!`);
    console.log(`You may now inspect it with the inspect command`);
    state.pokedex[name[0]] = pokemon;
  } else {
    console.log(`${name} has got away`);
  }




}
