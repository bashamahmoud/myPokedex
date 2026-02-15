import { State } from "./state.js";

export async function commandPokedex(state: State){
    const keys = Object.keys(state.capturedPokemon);
    if (keys.length === 0) {
        console.log("You have not caught any Pokemon yet!");
        return;
    }
    console.log("Your Pokedex:");
    for (const key of keys) {
        console.log(`- ${key}`);
    }
}