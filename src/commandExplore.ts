import { State } from "./state.js";
export async function commandExplore(state: State, ...args: string[]) {
    if (args.length !== 1) {
        throw new Error("you must provide a location name");
    }    
    const area = await state.PokeAPI.fetchLocation(args[0]);
    console.log(`Exploring ${args[0]}...`)
    console.log("Found Pokemon:");
    for (const location of area.pokemon_encounters) {
        console.log("- " +location.pokemon.name);
    }
}