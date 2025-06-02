
import { createInterface } from "readline";


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

export function startREPL(){
    rl.prompt();
    let line: string = "";

    rl.on('line', (line:string)=>{
        let args = cleanInput(line.toLowerCase())
        if (args.length <0 ){
            rl.prompt();
        }
        else{
            console.log(`Your command was: ${args[0]}`);
        }
        rl.prompt();
    }).on('close', ()=> {
        console.log("Have a great day!");
        process.exit(0);
    });
}