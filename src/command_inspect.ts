import type { State } from "./state.js"

export async function commandInspect(state:State){

  let record = state.pokedex;

  console.log(record);

}
