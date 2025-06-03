import type { CLICommand } from "./command.js";

export function commandHelp(commands: Record<string,CLICommand>){
    console.log("Welcome to the Pokedex!");
    console.log("Usage:\n");

    Object.entries(commands).forEach(([key, data]) => {
    console.log(`${data.name}: ${data.description}`);
});
}