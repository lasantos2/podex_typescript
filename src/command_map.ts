import { State } from "./state.js";

export function commandMap(state: State) {
    console.log("Showing the next 20 locations");

    let locations = state.pokeAPI.fetchLocations();

    return {};
}