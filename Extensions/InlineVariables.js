// MIT Licence 
// Description: Reference variables in a string and replace them with their value!
// Based on Temporary Variables by LilyMakesThings <https://scratch.mit.edu/users/LilyMakesThings/> & Mio <https://scratch.mit.edu/users/0znzw/>
// Works fully with your thread variables in Temporary Variables <https://extensions.turbowarp.org/Lily/TempVariables2.js>
// Page: https://github.com/otterboing/Otterboings-Turbowarp-Extensions/blob/main/Extensions/InlineVariables.js

(function (Scratch) {

if (!Scratch.extensions.unsandboxed) throw new Error("'OBInlineVariables' Must Be Run Un-Sandboxed! - Requires JS to manage the variables.");

// Version:
const ver = '1.2.1'

const icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABmZVhJZklJKgAIAAAAAQBphwQAAQAAABoAAAAAAAAAAwAAkAcABAAAADAyMzABoAMAAQAAAAEAAAAFoAQAAQAAAEQAAAAAAAAAAgABAAIABAAAAFI5OAACAAcABAAAADAxMDAAAAAAIvvHMbnUA7gAAAL7SURBVHhe7ZMBjuMgEAT3HfeZvOten9thCwubBg/YYMe3JbUimWHobilfr9frnerr4bw3ZAU8uQQyr5AFmLjzGMibUSzAxN2Ph6ySagEmdnws5CyyW4CJXR8HGau4Cohi7+0hm4umAqJ453aQqYnfAlRAj3jzNpCnme4CTLx9OWTp4lABJjxcBjm6OVyACS/TIcMhTinAhKdp4P8wpxVgwttw8H4KvwWoIK3CVxPvv3/eqfjcBBkO0VUA77vZhvWK627I1MTQAlSoHrFuFzI1MawAFeSoWF2ETE1UC7Cl6rspvFhAmT9DrJeQJ6N2ZsiAYWOCZyaijJ8pnskgzwqOFvi8YhWOOUk6V5pXhkeI5xbIsoIjCSMBPu2zV4AyOlI8GyDLCo7OpVaCMjla4V1BMDQCVYBJmZuiAtgdgyrAJA2OVAFsjuWuBWBvPKoAk8fkwmZW7YvazpbA3hyU0Sgv6q5HCmzNQxkz9aD2lFQCW3NRBk09qD1blcDONbiMOv6/RribzO7u/QYb17E1GWWE3yRQDFVFzJfu2HdsXEc0qLQNsxcoULijsO/YuAZ8LKGU0hDZWY1YQIW4BztzwcNCGsyrI2x3YWse+FixNeVRD2oPtuaAjwxlzKMW1P0o7I0FHznxP1v4v2+Vzgd5SObVThM2/bDadZHRjHCWmKuZVHMrKcScvan2m+xsj2WWJxY4lzCygqOAMmqyh9T3qgz1/Vs8F4hBUnEkyWZ/XsphfoHPGRwHlNkR4rnANlAUxwtqxlQM5oHdGcr0GWJ9hgrm1ZACDBXgqFidoYJ5NawAQ4XoEeuKqGBeDS3AUIFaxJoqKphXhwow8NBMT1CFCtWiwwVE8DMNFaZHpxVg4G04KkivfgvA+2HwNg0VpkenFICn6ahArTpcAF4uQ4VqUXcBvH8bVDiPugrgzduhAu6pqQDeuT0qaEnuAtj9MaiwSq4C2PmRqNCpdgtgz0ejgkdVC+D+I1DhTbIA7jyO3QKYezyyAM7+G34KeL3/AcCCgEYgIqXZAAAAAElFTkSuQmCC';
const stringIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURf///wAAAFXC034AAAACdFJOU/8A5bcwSgAAAAlwSFlzAAAOwwAADsMBx2+oZAAAABl0RVh0U29mdHdhcmUAUGFpbnQuTkVUIDUuMS4xMhMBR3QAAAC4ZVhJZklJKgAIAAAABQAaAQUAAQAAAEoAAAAbAQUAAQAAAFIAAAAoAQMAAQAAAAIAAAAxAQIAEQAAAFoAAABphwQAAQAAAGwAAAAAAAAAYAAAAAEAAABgAAAAAQAAAFBhaW50Lk5FVCA1LjEuMTIAAAMAAJAHAAQAAAAwMjMwAaADAAEAAAABAAAABaAEAAEAAACWAAAAAAAAAAIAAQACAAQAAABSOTgAAgAHAAQAAAAwMTAwAAAAANmnmpXJtwtfAAAAh0lEQVQ4T82RQRKAIBDD5P+fdrdEEC3g0RycbpvRg0dZcQREz07IfSVonwvMXqhjEJFqgFWvdwJrnaYCeSoQvwvZtdII2geDhFBn/4oMGkXtngLT0L4ExdZeTRJ/47p63dNLUGpNchMw9PQCm6BJIWuObnAHVuASo2D4hxD7UhAcjt2++0ApJ1N9AxVWSB8pAAAAAElFTkSuQmCC';

class OBInlineVariables {

  // Mostly Copied from Temporary Variables
  constructor() {
      
      if (!this.runtimeVariables) {
      this.runtimeVariables = Object.create(null);
      }
      if (!this.spriteVariables) {
      this.spriteVariables = Object.create(null);
      }
      Scratch.vm.runtime.on("PROJECT_START", () => {
        this.resetRuntimeVariables();
        this.resetSpriteVariables();
      });

      Scratch.vm.runtime.on("PROJECT_STOP_ALL", () => {
        this.resetRuntimeVariables();
        this.resetSpriteVariables();
      });
    }

  getInfo() {
    return {
      id: 'OBInlineVariables',
      name: 'Inline Variables',
      menuIconURI: icon,
      color1: "#FF791A",
      color2: "#E15D00",
      blocks: [
        {
            blockType: Scratch.BlockType.BUTTON,
            text: 'Credits',
            func: 'Credits'
        },
        {
            blockType: Scratch.BlockType.BUTTON,
            text: 'Info',
            func: 'Info'
        },
        {blockType: 'label', text: 'Shared'},
        {
          blockType: Scratch.BlockType.BUTTON,
          text: 'On Sharing',
          func: 'shareInfo'
        },
        {
          // THIS SAYS SET NOT GET
          opcode: 'setSharedVar',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Set [type]var: [VAR] to: [input]',
          arguments: {
            input: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'World!'
            },
            VAR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{var}'
            },
            type: {
                  type: Scratch.ArgumentType.STRING,
                  menu: 'sharedVariableList'
                }
          }
        },
        {
          // THIS SAYS SET NOT GET
          opcode: 'deleteSharedVar',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Delete [type]var: [VAR]',
          arguments: {
            VAR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{var}'
            },
            type: {
                  type: Scratch.ArgumentType.STRING,
                  menu: 'sharedVariableList'
                }
          }
        },
        {
            opcode: 'getSharedVar',
            blockType: Scratch.BlockType.REPORTER,
            text: '[type]Var: [VAR]',
            allowDropAnywhere: true,
            arguments: {
                VAR: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '{var}'
                },
                type: {
                  type: Scratch.ArgumentType.STRING,
                  menu: 'sharedVariableList'
                }
            }
        },
        {
          opcode: 'getSharedString',
          blockType: Scratch.BlockType.REPORTER,
          text: ': [string]',
          allowDropAnywhere: true,
          arguments: {
            string: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Hello {var}'
            }
          }
        },
        {
          opcode: 'listVars',
          blockType: Scratch.BlockType.REPORTER,
          text: 'All [type] Variables as [outType]',
          allowDropAnywhere: true,
          // IDK why it don't work man.
          hideFromPalette: true,
          arguments: {
            type: {
              type: Scratch.ArgumentType.STRING,
              menu: 'sharedVariableList'
            },
            outType: {
              type: Scratch.ArgumentType.STRING,
              menu: 'outType'
            }
          }
        },
        {blockType: 'label', text: 'Thread'},
        {
          opcode: 'setVar',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Set var: [VAR] to: [input]',
          arguments: {
            input: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'World!'
            },
            VAR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{var}'
            }
          }
        },
        // WIP
        {
            opcode: 'setVarFromJSON',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Set all vars to [json]',
            hideFromPalette: true,
            arguments: {
                json: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '{"{var1}":"Hello ","var2":"World!"}'
                }
            }
        },
        //
        {
            opcode: 'getVar',
            blockType: Scratch.BlockType.REPORTER,
            text: '[Thread] Var: [VAR]',
            allowDropAnywhere: true,
            arguments: {
                VAR: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '{var}'
                },
                Thread: {
                  type: Scratch.ArgumentType.IMAGE,
                  dataURI: stringIcon
                }
            }
        },
        {
            opcode: 'getString',
            blockType: Scratch.BlockType.REPORTER,
            text: '[Thread]|[string]',
            allowDropAnywhere: true,
            arguments: {
                string: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'Hello {var}'
                },
                Thread: {
                  type: Scratch.ArgumentType.IMAGE,
                  dataURI: stringIcon  
                }
            }
        },
        {
          blockType: 'label',
          text: 'Ver: '+ver+''
        }
      ],
      menus: {
        sharedVariableList: {acceptReporters: true, items: [{text: 'global', value: '1'},{text: 'sprite', value: '0'},{text: 'thread', value: '2'}]},
        outType: {acceptReporters: true, items: [{text: 'json', value: '0'},{text: 'names', value: '1'}]}
      }
    };
  }
	
  setVar(args, util) {
    const thread = util.thread;
    if (!thread.variables) {
        thread.variables = Object.create(null);
    }
    thread.variables[args.VAR] = args.input;
  }

  // WIP
  setVarFromJSON(args, util) {
    const thread = util.thread;
    if (!thread.variables) {
        thread.variables = Object.create(null);
    }
    if (args.json[1]) {
    thread.variables = args.json;
    }
    }
    //

  getVar(args, util) {
    const thread = util.thread;
    if (!thread.variables) {
        thread.variables = Object.create(null);
    }
    return thread.variables[args.VAR] ?? "";
  }

    getString(args, util) {
    const thread = util.thread;
    if (!thread.variables) {
        thread.variables = Object.create(null);
    }
    const keys = Object.keys(thread.variables);
    const values = Object.values(thread.variables);
    const objLength = Object.keys(thread.variables).length;
    var out = args.string;
    keys.forEach((element) => out = out.replaceAll((element),values[keys.indexOf((element))]));
    return out;
  }

  // Shared Variables

  setSharedVar(args, util) {
  if (args.type === 0) {
    const sprite = util.target.getName();
    if (!this.spriteVariables[sprite]) {
      this.spriteVariables[sprite] = Object.create(null);
    }
    this.spriteVariables[sprite][args.VAR] = args.input;
  } else if (args.type === 1) {
    if (!this.runtimeVariables) {
      this.runtimeVariables = Object.create(null);
    }
    this.runtimeVariables[args.VAR] = args.input;
  } else {
    const thread = util.thread;
    if (!thread.variables) {
        thread.variables = Object.create(null);
    }
    thread.variables[args.VAR] = args.input;
  }
  }

  // Copied from above, but it just sets it to an empty sting instead /:
  deleteSharedVar(args, util) {
  if (args.type === 0) {
    const sprite = util.target.getName();
    if (!this.spriteVariables[sprite]) {
      this.spriteVariables[sprite] = Object.create(null);
    }
    this.spriteVariables[sprite][args.VAR] = '';
  } else if (args.type === 1) {
    if (!this.runtimeVariables) {
      this.runtimeVariables = Object.create(null);
    }
    this.runtimeVariables[args.VAR] = '';
  } else {
    const thread = util.thread;
    if (!thread.variables) {
        thread.variables = Object.create(null);
    }
    thread.variables[args.VAR] = '';
  }
  }

  getSharedVar(args, util) {
  if (args.type === 0) {
    const sprite = util.target.getName();
    if (!this.spriteVariables[sprite]) {
      this.spriteVariables[sprite] = Object.create(null);
    }
    const spriteVars = this.spriteVariables[sprite];
    return spriteVars[args.VAR];
    } else if (args.type === 1) {
      if (!this.runtimeVariables) {
        this.runtimeVariables = Object.create(null);
      }
    return this.runtimeVariables[args.VAR];
    } else {
    const thread = util.thread;
    if (!thread.variables) {
        thread.variables = Object.create(null);
    }
    return thread.variables[args.VAR] ?? "";
    }
  }

  getSharedString(args, util) {
    const thread = util.thread;
    const spriteName = util.target.getName();
    const runtime = this.runtimeVariables;
    if (!thread.variables) {
        thread.variables = Object.create(null);
    }
    if (!this.spriteVariables[spriteName]) {
      this.spriteVariables[spriteName] = Object.create(null);
    }
    const sprite = this.spriteVariables[spriteName];
    
    if (!this.runtimeVariables) {
        this.runtimeVariables = Object.create(null);
      }
    const threadKeys = Object.keys(thread.variables);
    const threadValues = Object.values(thread.variables);
    const threadObjLength = Object.keys(thread.variables).length;
    const spriteKeys = Object.keys(sprite);
    const spriteValues = Object.values(sprite);
    const runtimeKeys = Object.keys(runtime);
    const runtimeValues = Object.values(runtime);
    var out = args.string;
    threadKeys.forEach((element) => out = out.replaceAll((element),threadValues[threadKeys.indexOf((element))]));
    spriteKeys.forEach((element) => out = out.replaceAll((element),spriteValues[spriteKeys.indexOf((element))]));
    runtimeKeys.forEach((element) => out = out.replaceAll((element),runtimeValues[runtimeKeys.indexOf((element))]));
    return out;
  }

  listVars(args, util) {
    if (args.type === 3) {
      
    } else if (args.type === 0) {
      // Sprite
      const spriteName = util.target.getName();
      if (!this.spriteVariables) {
        this.spriteVariables = Object.create(null);
      }
      if (!this.spriteVariables[spriteName]) {
      this.spriteVariables[spriteName] = Object.create(null);
      if (args.outType === 1) {
      return Object.keys(this.spriteVariables[spriteName]);
      } else {
      return this.spriteVariables[spriteName];
      }
    }
    } else if (args.type === 1) {
      // Global
      if (!this.runtimeVariables) {
        this.runtimeVariables = Object.create(null);
      }
      const runtime = this.runtimeVariables;
      if (args.outType === 1) {
      return Object.keys(runtime);
      } else {
      return runtime;
      }
    } else {
      // Thread
      const thread = util.thread;
      if (!thread.variables) {
        thread.variables = Object.create(null);
    }
    if (args.outType === 1) {
    return Object.keys(thread.variables);
    } else {
    return thread.variables;
    }
    }
  }

  Credits() {
    alert(`MIT Licence \n Based on Temporary Variables by LilyMakesThings & Mio \n -LilyMakesThings: https://scratch.mit.edu/users/LilyMakesThings/ \n -Mio: https://scratch.mit.edu/users/0znzw/ \n\nInspired by a random Reddit post I saw a while ago, I can't find it rn though ):`);
  }

  Info() {
    alert(`- This extension can work on it's own or with the Temporary Variables Extension: \n -- You can set a variable in either extension and it will still work in both. \n \n - Variables are Case Sensitive!\n\nMake Sure you name your variables in non-conflicting ways: \nVariables are replaced in the order they're added! e.g:\n\n - set var:"{var}" to "World!"\n - set var:"World!" to "Myself!" \n - get "Hello {var}" \n - will return: "Hello Myself!"\nOr:\n - set var:"a" to:"~STOP~" \n - set var:"{var}" to:"World!"\n - get "Hello {var}"\n - will return: "Hello {v~STOP~r}"`)
  }

  shareInfo() {
    alert(`- The shared string will get all variables in this order:\n\n  thread, sprite then runtime\n\n- If a certain var doesn't exist it will not replace it in the string!\n\n- Also Global Variables are runtime variables, I just renamed them so they don't conflict when searching blocks!`)
  }

  resetRuntimeVariables() {
    this.runtimeVariables = Object.create(null);
  }

  resetSpriteVariables() {
    this.spriteVariables = Object.create(null);
  }

}
Scratch.extensions.register(new OBInlineVariables());

})(Scratch);