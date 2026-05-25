// MIT Licence 
// Description: Reference variables in a string and replace them with their value!
// Based on Temporary Variables by LilyMakesThings <https://scratch.mit.edu/users/LilyMakesThings/> & Mio <https://scratch.mit.edu/users/0znzw/>
// Works fully with your thread variables in Temporary Variables <https://extensions.turbowarp.org/Lily/TempVariables2.js>
// Page: https://github.com/otterboing/Otterboings-Turbowarp-Extensions/blob/main/Extensions/InlineVariables.js

(function (Scratch) {

if (!Scratch.extensions.unsandboxed) throw new Error("'OBInlineVariables' Must Be Run Un-Sandboxed! - Requires JS to manage the variables.");

// Version:
const ver = '1.0.0'

const icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABmZVhJZklJKgAIAAAAAQBphwQAAQAAABoAAAAAAAAAAwAAkAcABAAAADAyMzABoAMAAQAAAAEAAAAFoAQAAQAAAEQAAAAAAAAAAgABAAIABAAAAFI5OAACAAcABAAAADAxMDAAAAAAIvvHMbnUA7gAAAL7SURBVHhe7ZMBjuMgEAT3HfeZvOten9thCwubBg/YYMe3JbUimWHobilfr9frnerr4bw3ZAU8uQQyr5AFmLjzGMibUSzAxN2Ph6ySagEmdnws5CyyW4CJXR8HGau4Cohi7+0hm4umAqJ453aQqYnfAlRAj3jzNpCnme4CTLx9OWTp4lABJjxcBjm6OVyACS/TIcMhTinAhKdp4P8wpxVgwttw8H4KvwWoIK3CVxPvv3/eqfjcBBkO0VUA77vZhvWK627I1MTQAlSoHrFuFzI1MawAFeSoWF2ETE1UC7Cl6rspvFhAmT9DrJeQJ6N2ZsiAYWOCZyaijJ8pnskgzwqOFvi8YhWOOUk6V5pXhkeI5xbIsoIjCSMBPu2zV4AyOlI8GyDLCo7OpVaCMjla4V1BMDQCVYBJmZuiAtgdgyrAJA2OVAFsjuWuBWBvPKoAk8fkwmZW7YvazpbA3hyU0Sgv6q5HCmzNQxkz9aD2lFQCW3NRBk09qD1blcDONbiMOv6/RribzO7u/QYb17E1GWWE3yRQDFVFzJfu2HdsXEc0qLQNsxcoULijsO/YuAZ8LKGU0hDZWY1YQIW4BztzwcNCGsyrI2x3YWse+FixNeVRD2oPtuaAjwxlzKMW1P0o7I0FHznxP1v4v2+Vzgd5SObVThM2/bDadZHRjHCWmKuZVHMrKcScvan2m+xsj2WWJxY4lzCygqOAMmqyh9T3qgz1/Vs8F4hBUnEkyWZ/XsphfoHPGRwHlNkR4rnANlAUxwtqxlQM5oHdGcr0GWJ9hgrm1ZACDBXgqFidoYJ5NawAQ4XoEeuKqGBeDS3AUIFaxJoqKphXhwow8NBMT1CFCtWiwwVE8DMNFaZHpxVg4G04KkivfgvA+2HwNg0VpkenFICn6ahArTpcAF4uQ4VqUXcBvH8bVDiPugrgzduhAu6pqQDeuT0qaEnuAtj9MaiwSq4C2PmRqNCpdgtgz0ejgkdVC+D+I1DhTbIA7jyO3QKYezyyAM7+G34KeL3/AcCCgEYgIqXZAAAAAElFTkSuQmCC';

class OBInlineVariables {
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
            text: 'Var: [VAR]',
            arguments: {
                VAR: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '{var}'
                }
            }
        },
        {
            opcode: 'getString',
            blockType: Scratch.BlockType.REPORTER,
            text: ':[string]',
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

  Credits() {
    alert(`MIT Licence \n Based on Temporary Variables by LilyMakesThings & Mio \n -LilyMakesThings: https://scratch.mit.edu/users/LilyMakesThings/ \n -Mio: https://scratch.mit.edu/users/0znzw/ \n\nInspired by a random Reddit post I saw a while ago, I can't find it rn though ):`);
  }

  Info() {
    alert(`- This extension can work on it's own or with the thread variables from the Temporary Variables Extension: \n -- You can set a thread variable in either extension and it will still work in both. \n \n - Variables are Case Sensitive!\n - These are Thread Variables:\n - They will only work in the Script you run them in! \n\nMake Sure you name your variables in non-conflicting ways: \nVariables are replaced in the order they're added! e.g:\n\n - set var:"{var}" to "World!"\n - set var:"World!" to "Myself!" \n - get "Hello {var}" \n - will return: "Hello Myself!"\nOr:\n - set var:"a" to:"~STOP~" \n - set var:"{var}" to:"World!"\n - get "Hello {var}"\n - will return: "Hello {v~STOP~r}"\n\nI plan on adding support for runtime variables but I'm just too tired rn... 😴`)
  }

}
Scratch.extensions.register(new OBInlineVariables());

})(Scratch);