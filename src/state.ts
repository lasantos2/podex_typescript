import {createInterface, type Interface} from "readline";
import {commandExit} from "./command_exit.js"
import { commandHelp } from "./command_help.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => void;
};

export type State = {
    interface: Interface;
    commandsRegistry: Record<string, CLICommand>;

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
        }
        // add more commands here
    };


    return state;
}