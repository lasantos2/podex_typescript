import type { CLICommand, State } from "./state.js";

export function cleanInput(input:string): string[]{
    
    let result = input.split(" ");
    let filterResult = [];
    for (let i of result){
        if (i !== "")
        {
            filterResult.push(i);
        }
    }
    return filterResult;
}

export function getCommands(state: State): Record<string, CLICommand> {
    return state.commandsRegistry;
}

export function startREPL(state:State){
    state.interface.prompt();

    state.interface.on('line', (line:string)=>{
        let args = cleanInput(line.toLowerCase())
        try {
            getCommands(state)[args[0]].callback(state);
        } catch (err) {
            console.log(err);
        }
        
        state.interface.prompt();
    });
}