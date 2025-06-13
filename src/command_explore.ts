import type { State } from "./state.js";

export async function commandExplore(state: State , ...args: string[]) {

  const location_name = args[0];
  console.log(`Exploring ${location_name}...`)
  let location = await state.pokeAPI.fetchLocation(location_name);

  if (location === undefined) throw new Error("location not found");


  let pokemonEnc = location.pokemon_encounters;
 
  console.log(`Found Pokemon:`);
  for (const poke of pokemonEnc) {
    console.log(` - ${poke.pokemon.name}`);
  }

}

