import type { State } from "./state.js"
import type { Pokemon } from "./pokeapi.js"

export async function commandPokedex(state:State){

  if (state.pokedex === undefined) {
    console.log("No pokemon in pokedex");
    return;
  }

  let pokedex: Record<string, Pokemon> = await state.pokedex;


  console.log("Your Pokedex:");
  for (const entry of Object.keys(pokedex)) {

    console.log(` - ${entry}`);

  }

}
