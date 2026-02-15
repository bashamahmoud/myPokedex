import { State } from "./state.js";
export async function commandCatch(state: State, ...args: string[]) {
    if (args.length !== 1) {
        throw new Error("you must provide a pokemon name");
    }
    const pokemon = await state.PokeAPI.fetchPokemon(args[0]);
    console.log(`Throwing a Pokeball at ${args[0]}...`);
    const probability = Math.random() * pokemon.base_experience;
     if (probability > 50){
        console.log(`${args[0]} escaped!`);
        return;
     }
     console.log(`${args[0]} was caught!`);
     state.capturedPokemon[args[0]] = pokemon;
}