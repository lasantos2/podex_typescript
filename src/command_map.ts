import { ShallowLocations } from "./pokeapi.js";
import { State } from "./state.js";

export async function commandMap(state: State) {
    console.log("Showing the next 20 locations");

    let locations = (await state.pokeAPI.fetchLocations()).results;

    for (let loc of locations){
        console.log(loc.name);
    }
}