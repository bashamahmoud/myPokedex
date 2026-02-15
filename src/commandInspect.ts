import { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]) {
    if (args.length !== 1) {
        throw new Error("you must provide a pokemon name");
    };
    
    const pokemon = state.capturedPokemon[args[0]];
    if (!pokemon) {
        console.log(`you have not caught that pokemon`);
        return;
    };
    console.log(`Name: ${pokemon.name}`);
    console.log(`Highet: ${pokemon.height}`);
    console.log(`Weight: ${pokemon.weight}`);
    console.log("Stats:");
    for( const state of pokemon.stats){
        console.log(`  - ${state.stat.name}: ${state.base_stat}`);
    }
    console.log("Types:");
    for (const type of pokemon.types){
        console.log(`  - ${type.type.name}`);
    }


}