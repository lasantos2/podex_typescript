import type { State } from "./state.js";

export async function commandMapForward(state: State) {

  let locations = await state.pokeAPI.fetchLocations(state.nextLocationsURL);

  state.nextLocationsURL = locations.next;
  state.prevLocationsURL = locations.previous;

  for (let i = 0; i < locations.results.length; i++){
    console.log(locations.results[i].name);
  }
}

export async function commandMapBack(state: State) {
  if (state.prevLocationsURL === "") {
    throw new Error("you're on the first page");
  }

  let locations = await state.pokeAPI.fetchLocations(state.prevLocationsURL);

  state.nextLocationsURL = locations.next;
  state.prevLocationsURL = locations.previous;

  for (let i = 0; i < locations.results.length; i++){
    console.log(locations.results[i].name);
  }
}
