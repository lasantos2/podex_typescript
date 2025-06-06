import {startREPL} from "./repl.js";
import { initState } from "./state.js";

async function main() {
    let state = initState();
    await startREPL(state);
}

main();