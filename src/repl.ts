
import { State } from "./state.js";

export function cleanInput(input: string): string[] {
      const cleanedInput = input.toLowerCase().trim().split(/\s+/);
      return cleanedInput;
}
export function startREPL(state: State) {
      state.readline.prompt();

      state.readline.on("line", async callback => {
            if (callback.length !== 0) {
                  const cleanedInput = cleanInput(callback);
                  const commands = state.commands;
                  const commandName = commands[cleanedInput[0]];
                  if (!commandName) {
                        console.log(`Unknown command: "${cleanedInput[0]}". Type "help" for a list of commands.`);
                        state.readline.prompt();
                        return;
                  }
                  else {
                        try {
                              await commandName.callback(state,cleanedInput[1]);
                        }
                        catch (error) {
                              console.log(error);
                        }
                  };
                  state.readline.prompt();
            }
      });
}
