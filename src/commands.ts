import { CLICommand } from "./state.js";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap, commandmapb } from "./commandMap.js";
import { commandExplore } from "./commandExplore.js";
import { commandCatch } from "./commandCatch.js";
import { commandInspect } from "./commandInspect.js";
import { commandPokedex } from "./commandPokedex.js";


  export function getCommands(): Record<string, CLICommand> {
    return {
      exit: {
        name: "exit",
        description: "Exits the pokedex",
        callback: commandExit,
      },
      help:{
        name: "help",
        description: "Displays a help message",
        callback: commandHelp,
          },
      map: {
        name: "map",
        description: "Displays a map of the pokedex and goes forward",
        callback: commandMap,
      },
      mapb: {
        name: "mapb",
        description: "Displays a map of the pokedex and goes backward",
        callback: commandmapb,
      },
      explore: {
        name: "explore",
        description: "explore a specific area for pokemon",
        callback: commandExplore,
      },
      catch: {
        name: "catch",
        description: "catch a pokemon provided by name",
        callback: commandCatch,
      },
      inspect: {
        name: "inspect",
        description: "inspect a pokemon provided by name",
        callback: commandInspect,
      },
      pokedex: {
        name: "pokedex",
        description: "list of all pokemon you have caught",
        callback: commandPokedex,
      },
          // can add more commands here
        };
      }
      
