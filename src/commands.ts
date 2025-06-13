import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { commandMapForward, commandMapBack } from "./command_map.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";

import type { CLICommand } from "./state.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
    map: {
      name: "map",
      description: "Get the next page of locations",
      callback: commandMapForward,
    },
    mapb: {
      name: "mapb",
      description: "Get the previous page of locations",
      callback: commandMapBack,
    },
    explore: {
      name: "explore",
      description: "Find pokemon in a specific location",
      callback: commandExplore,
    },
    catch: {
      name: "catch",
      description: "Catch pokemon by name catch <pokemon_name>",
      callback: commandCatch,
    },
    inspect: {
      name: "inspect",
      description: "Show detailed pokedex entry of a pokemon",
      callback: commandInspect,
    },
    pokedex: {
      name: "pokedex",
      description: "Show pokedex entries",
      callback: commandPokedex,
    },


  };
}
