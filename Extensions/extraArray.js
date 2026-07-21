// MIT Licence 
// Original by https://github.com/otterboing
// Page: https://github.com/otterboing/Turbowarp-Extensions/blob/main/Extensions/extraArray.js
// Some Misc Tools For Handling Arrays!

(function (Scratch) {

  if (!Scratch.extensions.unsandboxed) throw new Error("'OBExtraArray' Must Be Run Un-Sandboxed!");

const icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABmZVhJZklJKgAIAAAAAQBphwQAAQAAABoAAAAAAAAAAwAAkAcABAAAADAyMzABoAMAAQAAAAEAAAAFoAQAAQAAAEQAAAAAAAAAAgABAAIABAAAAFI5OAACAAcABAAAADAxMDAAAAAAIvvHMbnUA7gAAAENSURBVFhH7Y5BDsIwDARz5jn8jCuv5EelluzKbLa1neRSiZEGqcbxbqvyfH22K3WtxhbAgjJGaPwNCsgKC4iMkLtdAR12jgTIDt7x6Ox3qsPOariBdzw6+53KJ4ahVc7eDhVA2uNNRdj7cgGEBXsRvDFVAMPYvujBUssKsF3TY/vGkgJsz+uhBbqlf4G7FBCiAsh0ARFhOyJi4VMFRvHhwwVGOQsX0gUYeIyB4Sxrd/91YAEGHs7I7oUFGOwwzlC7hzcvCzCuDmf1nBZgrAgXPekCq8JFT6rAynDRQwt4ZsMjSgVYQGREWMCQFRYQGXEUUGxAZQEZ2S3wgP15yI5H7u+E7hZYgwV5dS1Ja18e8mhMGs6sIgAAAABJRU5ErkJggg==";

const ver = '1.0.0';

const color1Def = '';
const color2Def = '';
const color3Def = '';

function getColor(color,num = 1) {
  if (color == null | color == '') {return eval(`color`+num+`Def`);} else {return color;}
}

function label(name) {return {blockType: 'label', text: name};}

function MI(text,value) {return {text: text, value: value}}


function makeBlock(opcode,type,text,args,extra,icon,hide,color1,color2,color3) {
  const block = {
    opcode: opcode,
    blockType: type,
    text: text,
    allowDropAnywhere: true,
    blockIconURI: icon,
    arguments: args,
    hidefromPalette: hide,
  };
  if (typeof extra === "object") {
    Object.assign(block,extra);
  }
  return block;
}

function ARG(name,type,defaultValue) {return ``+name+`: {type: `+type+`, defaultValue: `+defaultValue+`}`}

// Use this from now on!
function checkType(object) {
  if (typeof object == 'string') {
    return JSON.parse(object);
  } else {
    return object;
  }
}

class OBExtraArray {
  getInfo() {
    return {
      id: 'OBExtraArray',
      name: 'Extra Array',
      menuIconURI: icon,
      color1: '#3271D0',
      color2: '#2D66BB',
      color3: '#264B84',
      blocks: [
        {
          blockType: Scratch.BlockType.BUTTON,
          text: 'Info',
          func: 'infoButton',
          hideFromPalette: false,
        },
        label('Array'),
        {
          opcode: 'searchArray',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Search array: [json] for:[query]',
          allowDropAnywhere: true,
          arguments: {
            json: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '["Wanda","Wally","Waldo","Willy","Wario","Waldo & co","Waluigi"]'
            },
            query: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Waldo'
            }
          }
        },
        {
          opcode: 'containsOnly',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Array: [json] contains only:[query]?',
          allowDropAnywhere: true,
          arguments: {
            json: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '["yes","yes","yes"]'
            },
            query: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'yes'
            }
          }
        },
        {
          opcode: 'insertEvery',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Insert: [input] every: [number] items in array: [json]',
          allowDropAnywhere: true,
          arguments: {
            input: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '---'
            },
            number: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '1'
            },
            json: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '["header","body","footer"]'
            }
          }
        },
        makeBlock('insertAt', Scratch.BlockType.REPORTER,'For array: [array] at: [position] insert: [text]',{
          array: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '[" World!","!"]'
          },
          position: {
            type: Scratch.ArgumentType.STRING,
            menu: 'position'
          },
          text: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: 'Hello'
          }
        }),
        makeBlock('insertAtIndex',Scratch.BlockType.REPORTER,'For array: [array] at index: [position] insert: [text]', {
          array: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '[" World!","!"]'
          },
          position: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: '0'
          },
          text: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: 'Hello'
          }
        }),
        {
          //of 
          opcode: 'countOccurrences',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Count: [query] in array: [json]',
          allowDropAnywhere: true,
          arguments: {
            query: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'I'
            },
            json: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '["T","E","A","M"]',
            }
          }
        },
        {
          opcode: 'popThis',
          blockType: Scratch.BlockType.REPORTER,
          text: 'pop: [json]',
          allowDropAnywhere: true,
          arguments: {
            json: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '["😭","🎈"]'
            }
          }
        },
        label('Advanced'),
        {
          blockType: Scratch.BlockType.BUTTON,
          text: 'More Info',
          func: 'advancedInfo'
        },
        makeBlock('convertToObject',Scratch.BlockType.REPORTER,'Parse: [input] into JS object',{
          input: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '{"list":["Convert","Me","!"]}'
          }
        }),
        makeBlock('stringifyObject',Scratch.BlockType.REPORTER,'Stringify JS object: [object]',{
          object: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '{"your object": "here"}'
          }
        }),
        label('Ver: '+ver+''),
      ],
      menus: {
        position: {
          acceptReporters: true,
          items: [MI('start','start'),MI('end','end')]
        }
      }
    };
  }
	
  infoButton() {
  alert(`MIT Licence`);
  }

  //do 
  advancedInfo() {
    alert(`Parsing to Object:\n\n--- This block converts the JSON or Array into a js object.\n\n--- This is for any extensions that use direct js objects for some reason.\n\n--- The output will NOT work with any blocks in the default extension (Or most others probably).\n\n--- JS objects do work in this extension. They may or may not be faster, I ain't checking /:\n\n--- Objects work with variables btw.`)
  }

  searchArray(args) {
    let outArray = [];
    try {
    const inArray = typeof args.json == "string" ?  JSON.parse(args.json) : args.json; ;
    if (Array.isArray(inArray))
    inArray.forEach((element) => (element).includes(args.query) ? outArray.push((element)) : outArray);
    return outArray;
    } catch (error) {
    return "[]"; console.error(error);
    }
  }
  
  containsOnly(args) {
    try {
    let matchNum = 0;
    const inArray = typeof args.json == "string" ? JSON.parse(args.json) : args.json;
    if (Array.isArray(inArray))
    inArray.forEach((element) => (element).includes(args.query) ? matchNum++ : matchNum);
    return matchNum == inArray.length;
    } catch (error) {
    return false; console.error(error);
    }
  }

  // CHECK
  // This is bad, I don't know why but I can tell...
  insertEvery(args) {
    try {
    const inArray = typeof args.json == "string" ? JSON.parse(args.json) : args.json;
    const arrayLength = inArray.length;
    if (!args.number == 0) {
    const loopCount = arrayLength - args.number; 
    if (Array.isArray(inArray)) {
      let num = args.number;
       for (let i = 0; i <= loopCount; i++) {
        inArray.splice(num, 0, args.input);
        num = num + args.number + 1;  
      };
      return inArray;
      }
      } else {
      inArray.unshift(args.input);
      return inArray;
      }
    } catch (error) {
    return args.json; console.error(error);
    }
  }

  insertAt(args) {
    try {
      const array = typeof args.array == "string" ? JSON.parse(args.array) : args.array;
      if (Array.isArray(array)) {
      if (args.position == 'end') {
        array.forEach(e => {
          array[array.indexOf(e)] = e += args.text;
        });
      } else {
        array.forEach(e => {
          array[array.indexOf(e)] = args.text + e;
        });
      }
    return JSON.stringify(array);
    } else {
    return args.array;
    }
    } catch (error) {
      return args.array; console.error(error);
    }
  }

  insertAtIndex(args) {
    try {
      const array = typeof args.array == "string" ? JSON.parse(args.array): args.array;
      if (Array.isArray(array)) {
      array.forEach(e => {
        array[array.indexOf(e)] = [e.slice(0, args.position), args.text, e.slice(args.position)].join('');
      });
      return JSON.stringify(array);
      } else {
      return args.array
      }
    } catch (error) {
    return args.array; console.error(error);
    }
  }

  countOccurrences(args) {
    try {
    const inArray = typeof args.json == "string" ? JSON.parse(args.json) : args.json;
    if (Array.isArray(inArray)) {
      let num = 0;
      inArray.forEach((element) => {
        if ((element) == args.query) {
          num++;
        }
      })
      return num;
    }
  } catch (error) {
  // Should this return an empty string instead?
  return 0; console.error(error);
  }
  }

  // This also works with strings... Just badly!
  popThis(args) {
    try {
      const inArray = typeof args.json == "string" ? JSON.parse(args.json) : args.json;
      if (Array.isArray(inArray)) {
        inArray.pop();
        return inArray;
      } else if (typeof args.json == "string") {
        return args.json.slice(0,-1);
      } else {return args.json}
    } catch (error) {
      try {
      return args.json.slice(0,-1);
      }
      catch (error) {return ''; console.error(error);}
    }
  }

  forMe(args,utils) {
    try {
    const inArray = JSON.parse(args.json)
    } catch (error) {

    }
  }

  //Advanced

  convertToObject(args) {
    try {
      if (typeof args.input == 'object') {
      return args.input;
      } else {
      return JSON.parse(args.input);
      }
    } catch (error) {return error;console.error(error);}
  }

  stringifyObject(args) {
    try {
      const object = checkType(args.object);
      return JSON.stringify(object);
    } catch (error) {return error; console.error(error);}
  }
  
}
Scratch.extensions.register(new OBExtraArray());

})(Scratch);