import type { State } from "./state.js";
import { fetchLocation } from "./pokeapi.js"

export async function commandExplore(location: string) {

  let location = await state.pokeAPI.fetchLocation(location);

  if (location === undefined) throw new Error("location not found");




  }
}

