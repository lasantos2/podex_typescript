import { createInterface, type Interface } from "readline";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { PokeAPI } from "./pokeapi.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => void;
};

export type State = {
    interface: Interface;
    commandsRegistry: Record<string, CLICommand>;
    pokeAPI: PokeAPI;
}

export function initState(): State {

    let state: State = {
        interface: createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: 'pokedex> ',
        }),

        commandsRegistry: {
            exit: {
                name: "exit",
                description: "Exits the pokedex",
                callback: commandExit,
            },
            help: {
                name: "help",
                description: "Displays a help message",
                callback: commandHelp,
            },
            map: {
                name: "map",
                description: "Explore next 20 locations",
                callback: commandMap,
            },
        },
        pokeAPI: new PokeAPI
        // add more commands here
    };


    return state;
}