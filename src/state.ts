import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI, Pokemon } from "./pokeapi.js";
export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
    readline: Interface;
    commands: Record<string, CLICommand>;
    PokeAPI: PokeAPI;
    nextLocationsURL: string;
    prevLocationsURL: string;
    capturedPokemon: Record<string, Pokemon>;
};



export function initState(): State {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex >",
    });
    return {
        readline: rl,
        commands: getCommands(),
        PokeAPI: new PokeAPI(),
    nextLocationsURL: "",
    prevLocationsURL: "",
    capturedPokemon: {},
    };
}
