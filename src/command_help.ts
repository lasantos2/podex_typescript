import { State } from "./state.js";

export function commandHelp(state: State){
    console.log("Welcome to the Pokedex!");
    console.log("Usage:\n");

    Object.entries(state.commandsRegistry).forEach(([key, data]) => {
    console.log(`${data.name}: ${data.description}`);
});
}