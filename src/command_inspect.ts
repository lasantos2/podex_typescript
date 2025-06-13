import type { State } from "./state.js"
import type { Pokemon } from "./pokeapi.ts"

export async function commandInspect(state:State, name: string){
  if (name === "") {
    console.log("Please enter a pokemon name");
    return;
  }

  if (!state.pokedex[name]){
    console.log(`${name} not in pokedex`);
    return;
  }

  let record: Pokemon = await state.pokedex[name];

  
  console.log(`Name: ${record.name}`);
  console.log(`Height: ${record.height}`);
  console.log(`Weight: ${record.weight}`);
  console.log(`Stats:`);

  for (const stat of record.stats) {
    console.log(` -${stat.stat.name}: ${stat.base_stat}`);
  }

  console.log(`Types: `)
  for (const type of record.types) {
    console.log(` - ${type.type.name}`);
  }

}
