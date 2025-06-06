import { createInterface, type Interface } from "readline";
import { PokeAPI } from "./pokeapi.js";
import { getCommands } from "./repl.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => Promise<void>;
};

export type State = {
    interface: Interface;
    commands: Record<string, CLICommand>;
    pokeAPI: PokeAPI;
}

export function initState(): State {

    let state: State = {
        interface: createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: 'pokedex> ',
        }),

        commands: getCommands(),
        pokeAPI: new PokeAPI,
    }


    return state;
}