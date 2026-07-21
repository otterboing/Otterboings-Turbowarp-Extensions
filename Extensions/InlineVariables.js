// MIT Licence 
// Description: Reference variables in a string and replace them with their value!
// Based on Temporary Variables by LilyMakesThings <https://scratch.mit.edu/users/LilyMakesThings/> & Mio <https://scratch.mit.edu/users/0znzw/>
// Works fully with your thread variables in Temporary Variables <https://extensions.turbowarp.org/Lily/TempVariables2.js>
// Page: https://github.com/otterboing/Otterboings-Turbowarp-Extensions/blob/main/Extensions/InlineVariables.js
try {
(function (Scratch) {
if (!Scratch.extensions.unsandboxed) throw new Error("'OBInlineVariables' Must Be Run Un-Sandboxed! - Requires JS to manage the variables.");

// Version:
const ver = '1.4.0'

const icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABmZVhJZklJKgAIAAAAAQBphwQAAQAAABoAAAAAAAAAAwAAkAcABAAAADAyMzABoAMAAQAAAAEAAAAFoAQAAQAAAEQAAAAAAAAAAgABAAIABAAAAFI5OAACAAcABAAAADAxMDAAAAAAIvvHMbnUA7gAAAL7SURBVHhe7ZMBjuMgEAT3HfeZvOten9thCwubBg/YYMe3JbUimWHobilfr9frnerr4bw3ZAU8uQQyr5AFmLjzGMibUSzAxN2Ph6ySagEmdnws5CyyW4CJXR8HGau4Cohi7+0hm4umAqJ453aQqYnfAlRAj3jzNpCnme4CTLx9OWTp4lABJjxcBjm6OVyACS/TIcMhTinAhKdp4P8wpxVgwttw8H4KvwWoIK3CVxPvv3/eqfjcBBkO0VUA77vZhvWK627I1MTQAlSoHrFuFzI1MawAFeSoWF2ETE1UC7Cl6rspvFhAmT9DrJeQJ6N2ZsiAYWOCZyaijJ8pnskgzwqOFvi8YhWOOUk6V5pXhkeI5xbIsoIjCSMBPu2zV4AyOlI8GyDLCo7OpVaCMjla4V1BMDQCVYBJmZuiAtgdgyrAJA2OVAFsjuWuBWBvPKoAk8fkwmZW7YvazpbA3hyU0Sgv6q5HCmzNQxkz9aD2lFQCW3NRBk09qD1blcDONbiMOv6/RribzO7u/QYb17E1GWWE3yRQDFVFzJfu2HdsXEc0qLQNsxcoULijsO/YuAZ8LKGU0hDZWY1YQIW4BztzwcNCGsyrI2x3YWse+FixNeVRD2oPtuaAjwxlzKMW1P0o7I0FHznxP1v4v2+Vzgd5SObVThM2/bDadZHRjHCWmKuZVHMrKcScvan2m+xsj2WWJxY4lzCygqOAMmqyh9T3qgz1/Vs8F4hBUnEkyWZ/XsphfoHPGRwHlNkR4rnANlAUxwtqxlQM5oHdGcr0GWJ9hgrm1ZACDBXgqFidoYJ5NawAQ4XoEeuKqGBeDS3AUIFaxJoqKphXhwow8NBMT1CFCtWiwwVE8DMNFaZHpxVg4G04KkivfgvA+2HwNg0VpkenFICn6ahArTpcAF4uQ4VqUXcBvH8bVDiPugrgzduhAu6pqQDeuT0qaEnuAtj9MaiwSq4C2PmRqNCpdgtgz0ejgkdVC+D+I1DhTbIA7jyO3QKYezyyAM7+G34KeL3/AcCCgEYgIqXZAAAAAElFTkSuQmCC';
const stringIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURf///wAAAFXC034AAAACdFJOU/8A5bcwSgAAAAlwSFlzAAAOwwAADsMBx2+oZAAAABl0RVh0U29mdHdhcmUAUGFpbnQuTkVUIDUuMS4xMhMBR3QAAAC4ZVhJZklJKgAIAAAABQAaAQUAAQAAAEoAAAAbAQUAAQAAAFIAAAAoAQMAAQAAAAIAAAAxAQIAEQAAAFoAAABphwQAAQAAAGwAAAAAAAAAYAAAAAEAAABgAAAAAQAAAFBhaW50Lk5FVCA1LjEuMTIAAAMAAJAHAAQAAAAwMjMwAaADAAEAAAABAAAABaAEAAEAAACWAAAAAAAAAAIAAQACAAQAAABSOTgAAgAHAAQAAAAwMTAwAAAAANmnmpXJtwtfAAAAh0lEQVQ4T82RQRKAIBDD5P+fdrdEEC3g0RycbpvRg0dZcQREz07IfSVonwvMXqhjEJFqgFWvdwJrnaYCeSoQvwvZtdII2geDhFBn/4oMGkXtngLT0L4ExdZeTRJ/47p63dNLUGpNchMw9PQCm6BJIWuObnAHVuASo2D4hxD7UhAcjt2++0ApJ1N9AxVWSB8pAAAAAElFTkSuQmCC';

const runtime = Scratch.vm.runtime;

class OBInlineVariables {

  // Mostly Copied from Temporary Variables
  constructor() {
      
      if (!this.globalVariables) {
      this.globalVariables = Object.create(null);
      }
      if (!this.spriteVariables) {
      this.spriteVariables = Object.create(null);
      }
      Scratch.vm.runtime.on("PROJECT_START", () => {
        this.resetglobalVariables();
        this.resetSpriteVariables();
      });

      Scratch.vm.runtime.on("PROJECT_STOP_ALL", () => {
        this.resetglobalVariables();
        this.resetSpriteVariables();
      });
    }
  //

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
          opcode: 'deleteAllSharedVars',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Delete [type] vars',
          arguments: {
            type: {
            type: Scratch.ArgumentType.STRING,
            menu: 'sharedVariableListAll'
            }
          }
        },
        {
          opcode: 'deleteSpriteVar',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Delete sprite var: [VAR] in: [sprite]',
          arguments: {
            VAR: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{var}'
            },
            sprite: {
              type: Scratch.ArgumentType.STRING,
              menu: 'TARGETS2'
            }
          }
        },
        {
          opcode: 'deleteAllSpriteVars',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Delete all sprite vars in: [sprite]',
          arguments: {
            sprite: {
                type: Scratch.ArgumentType.STRING,
                menu: 'TARGETS2'
            }
          }
        },
        '---',
        {
          opcode: 'getSharedStringLocal',
          blockType: Scratch.BlockType.REPORTER,
          text: '{[string]}',
          arguments: {
            string: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Hello {var}'
            }
          }
        },
        {
            opcode: 'getSharedVar',
            blockType: Scratch.BlockType.REPORTER,
            text: '[type]var: [VAR]',
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
          opcode: 'listVars',
          blockType: Scratch.BlockType.REPORTER,
          text: 'All [type] Variables as: [outType]',
          allowDropAnywhere: true,
          hideFromPalette: false,
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
        {
          opcode: 'getSpriteVar',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Sprite var:[var] of: [sprite]',
          arguments: {
            var: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{var}'
            },
            sprite: {
              type: Scratch.ArgumentType.STRING,
              menu: 'TARGETS2'
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
            text: 'Set all vars to: [json]',
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
            text: '[Thread] var: [VAR]',
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
          text: 'Both'
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
          blockType: 'label',
          text: 'Ver: '+ver+''
        }
      ],
      menus: {
        sharedVariableList: {acceptReporters: true, items: [{text: 'global', value: '1'},{text: 'sprite', value: '0'},{text: 'script', value: '2'}]},
        sharedVariableListAll: {acceptReporters: true, items: [{text: 'all', value: 'all'},{text: 'all global', value: '1'},{text: 'all sprite', value: '0'},{text: 'all script', value: '2'}]},
        outType: {acceptReporters: true, items: [{text: 'json', value: '0'},{text: 'names', value: '1'}]},
          TARGETS2: {
            acceptReporters: true,
            items: this._getTargets(true),
          }
      }
    };
  }
    
    // Taken from Sharkpool's "Added Motion" extension. <https://github.com/SharkPool-SP/SharkPools-Extensions/blob/main/extension-code/Added-Motion.js> <https://sharkpools-extensions.vercel.app/> <https://github.com/SharkPool-SP>
    _getTargets(enable) {
      const spriteNames = [];
      if (enable) spriteNames.push({ text: "myself", value: "_myself_" });
      const targets = runtime.targets;
      for (let index = 1; index < targets.length; index++) {
        const target = targets[index];
        if (target.isOriginal) {
          const targetName = target.getName();
          spriteNames.push({ text: targetName, value: targetName });
        }
      }
      return spriteNames.length > 0 ? spriteNames : [""];
    }
    //
	
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
    thread.variables = JSON.parse(args.json);
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

  getSpriteVar(args, util) {
    try {
    let sprite = '';
    if (args.sprite == '_myself_') {
      sprite = util.target.getName();
      } else {
      sprite = args.sprite;
      }
    if (!this.spriteVariables[sprite]) {
      this.spriteVariables[sprite] = Object.create(null);
    }
    return this.spriteVariables[sprite][args.var] ?? '';

    } catch (error) {console.error(error);}
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
    if (!this.globalVariables) {
      this.globalVariables = Object.create(null);
    }
    this.globalVariables[args.VAR] = args.input;
  } else {
    const thread = util.thread;
    if (!thread.variablesOB) {
        thread.variablesOB = Object.create(null);
    }
    thread.variablesOB[args.VAR] = args.input;
  }
  }

  deleteSharedVar(args, util) {
  if (args.type === 0) {
    const sprite = util.target.getName();
    if (!this.spriteVariables[sprite]) {
      this.spriteVariables[sprite] = Object.create(null);
    }
    delete this.spriteVariables[sprite][args.VAR];
  } else if (args.type === 1) {
    if (!this.globalVariables) {
      this.globalVariables = Object.create(null);
    }
    delete this.globalVariables[args.VAR];
  } else {
    const thread = util.thread;
    if (!thread.variablesOB) {
        thread.variablesOB = Object.create(null);
    }
    delete thread.variablesOB[args.VAR];
  }
  }

  deleteAllSharedVars(args, util) {
  try {
    if (args.type === 0 | args.type === 'all') {
    const sprite = util.target.getName();
    if (!this.spriteVariables[sprite]) {
      this.spriteVariables[sprite] = Object.create(null);
    }
    this.spriteVariables = Object.create(null);
  }
  if (args.type === 1 | args.type === 'all') {
    if (!this.globalVariables) {
      this.globalVariables = Object.create(null);
    }
    this.globalVariables = Object.create(null);
  }
   if (args.type === 2 | args.type === 'all') {
    const thread = util.thread;
    if (!thread.variablesOB) {
        thread.variablesOB = Object.create(null);
    }
    thread.variablesOB = Object.create(null);
  }
  } catch (error) {console.error(error);}
  }

  deleteSpriteVar(args,util) {
    try {
      let sprite = ''
      if (args.sprite == '_myself_') {
      sprite = util.target.getName();
      } else {
      sprite = args.sprite;
      }
    delete this.spriteVariables[sprite][args.VAR];
    } catch (error) {console.error(error);}
    }

  deleteAllSpriteVars(args,util) {
    try {
      let sprite = ''
      if (args.sprite == '_myself_') {
      sprite = util.target.getName();
      } else {
      sprite = args.sprite;
      }
    delete this.spriteVariables[sprite];
    } catch (error) {console.error(error);}
  }

  getSharedVar(args, util) {
  if (args.type === 0) {
    const sprite = util.target.getName();
    if (!this.spriteVariables[sprite]) {
      this.spriteVariables[sprite] = Object.create(null) ?? "";
    }
    const spriteVars = this.spriteVariables[sprite];
    return spriteVars[args.VAR];
    } else if (args.type === 1) {
      if (!this.globalVariables) {
        this.globalVariables = Object.create(null);
      }
    return this.globalVariables[args.VAR] ?? "";
    } else {
    const thread = util.thread;
    if (!thread.variablesOB) {
        thread.variablesOB = Object.create(null);
    }
    return thread.variablesOB[args.VAR] ?? "";
    }
  }

  getSharedString(args, util) {
    const thread = util.thread;
    const spriteName = util.target.getName();
    const runtime = this.globalVariables;
    if (!thread.variablesOB) {
        thread.variablesOB = Object.create(null);
    }
    if (!this.spriteVariables[spriteName]) {
      this.spriteVariables[spriteName] = Object.create(null);
    }
    const sprite = this.spriteVariables[spriteName];
    
    if (!this.globalVariables) {
        this.globalVariables = Object.create(null);
      }
    if (!thread.variables) {
      thread.variables = Object.create(null);
    }
    const threadKeys = Object.keys(thread.variablesOB);
    const threadValues = Object.values(thread.variablesOB);
    const threadObjLength = Object.keys(thread.variablesOB).length;
    const threadKeysTEMPVARS = Object.keys(thread.variables);
    const threadValuesTEMPVARS = Object.values(thread.variables);
    const threadObjLengthTEMPVARS = Object.keys(thread.variables).length;
    const spriteKeys = Object.keys(sprite);
    const spriteValues = Object.values(sprite);
    const runtimeKeys = Object.keys(runtime);
    const runtimeValues = Object.values(runtime);
    var out = args.string;
    threadKeysTEMPVARS.forEach(e => out = out.replaceAll(e,threadValuesTEMPVARS[threadKeysTEMPVARS.indexOf(e)]));
    threadKeys.forEach((element) => out = out.replaceAll((element),threadValues[threadKeys.indexOf((element))]));
    spriteKeys.forEach((element) => out = out.replaceAll((element),spriteValues[spriteKeys.indexOf((element))]));
    runtimeKeys.forEach((element) => out = out.replaceAll((element),runtimeValues[runtimeKeys.indexOf((element))]));
    return out;
  }

  getSharedStringLocal(args, util) {
    const thread = util.thread;
    const spriteName = util.target.getName();
    const runtime = this.globalVariables;
    if (!thread.variablesOB) {
        thread.variablesOB = Object.create(null);
    }
    if (!this.spriteVariables[spriteName]) {
      this.spriteVariables[spriteName] = Object.create(null);
    }
    const sprite = this.spriteVariables[spriteName];
    
    if (!this.globalVariables) {
        this.globalVariables = Object.create(null);
      }
    const threadKeys = Object.keys(thread.variablesOB);
    const threadValues = Object.values(thread.variablesOB);
    const threadObjLength = Object.keys(thread.variablesOB).length;
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
    try {
    if (args.type === 0) {
      
     if (args.outType === 1) {
      let outJSON = Object.create(null);
      Object.keys(this.spriteVariables).forEach(i => outJSON[i] = Object.keys(Object.values(this.spriteVariables)[Object.keys(this.spriteVariables).indexOf(i)]));
      return outJSON;
    } else {
      return this.spriteVariables;
    }
    
    } else {
      if (args.type === 1) {
        
        if (args.outType === 1) {
        return Object.keys(this.globalVariables);
        } else {
          return this.globalVariables;
        }
      } else {
        // Only gets thread variables in the script it's declared in!
        if (args.outType === 1) {
        return Object.keys(util.thread.variablesOB) ?? [];
        } else {
          return util.thread.variablesOB ?? {};
        }
      
      }
    }
    } catch {
      if (args.outType === 1) {
        return [];
      } else {
        return {};
      }
    }
  }

  Credits() {
    alert(`MIT Licence \n Based on Temporary Variables by LilyMakesThings & Mio \n -LilyMakesThings: https://scratch.mit.edu/users/LilyMakesThings/ \n -Mio: https://scratch.mit.edu/users/0znzw/ \n\n Sprite Menu from Sharkpool's Added Motion Extensions:\n -Sharkpool:\n   <https://sharkpools-extensions.vercel.app/>\n   <https://github.com/SharkPool-SP>\n\n -<https://github.com/SharkPool-SP/SharkPools-Extensions/blob/main/extension-code/Added-Motion.js>\n\nInspired by a random Reddit post I saw a while ago, I can't find it rn though ):`);
  }

  Info() {
    alert(`- This extension can work on it's own or with the Temporary Variables Extension: \n -- You can set a THREAD(Not Shared) variable in either extension and it will still work in both. \n \n - Variables are Case Sensitive!\n\nMake Sure you name your variables in non-conflicting ways: \nVariables are replaced in the order they're added! e.g:\n\n - set var:"{var}" to "World!"\n - set var:"World!" to "Myself!" \n - get "Hello {var}" \n - will return: "Hello Myself!"\nOr:\n - set var:"a" to:"~STOP~" \n - set var:"{var}" to:"World!"\n - get "Hello {var}"\n - will return: "Hello {v~STOP~r}"`)
  }

  shareInfo() {
    alert(`- The shared string will get all variables in this order:\n\n  script, sprite then runtime\n\n- If a certain var doesn't exist it will not replace it in the string!\n\n-  These Variables do not work with variables from TempVars`)
  }

  resetglobalVariables() {
    this.globalVariables = Object.create(null);
  }

  resetSpriteVariables() {
    this.spriteVariables = Object.create(null);
  }

}
Scratch.extensions.register(new OBInlineVariables());

})(Scratch);} catch (error) {console.error(error);}