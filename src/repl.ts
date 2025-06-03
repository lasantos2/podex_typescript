
import { createInterface } from "readline";
import { commandExit } from "./command_exit.js";
import { CLICommand } from "./command.js";
import { commandHelp } from "./command_help.js";


const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'pokedex> ',

});


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

export function getCommands(): Record<string, CLICommand> {
    return {
        exit:{
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help:{
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        // add more commands here
    };
}

export function startREPL(){
    rl.prompt();
    let line: string = "";

    rl.on('line', (line:string)=>{
        let args = cleanInput(line.toLowerCase())


        try {
            getCommands()[args[0]].callback(getCommands());
        } catch (err) {
            console.log(err);
        }
        
        rl.prompt();
    });
}