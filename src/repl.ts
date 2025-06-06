import type { CLICommand, State } from "./state.js";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";

export async function startREPL(state: State) {
    state.interface.prompt();

    state.interface.on('line', async (line: string) => {
        let args = cleanInput(line.toLowerCase());
        const commandName = args[0];

        let cmd = state.commands[commandName];
        try { 
            await cmd.callback(state);
        } catch (err) {
            console.log(err);
        }

        state.interface.prompt();
    });
}

export function cleanInput(input: string): string[] {

    let result = input.split(" ");
    let filterResult = [];
    for (let i of result) {
        if (i !== "") {
            filterResult.push(i);
        }
    }
    return filterResult;
}

export function getCommands(): Record<string, CLICommand> {
    return {
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
    }
}

