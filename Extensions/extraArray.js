// MIT Licence 
// Original by https://github.com/otterboing
// Page: https://github.com/otterboing/Turbowarp-Extensions/blob/main/Extensions/extraArray.js
// Some Misc Tools For Handling Arrays!

(function (Scratch) {

  if (!Scratch.extensions.unsandboxed) throw new Error("'OBExtraArray' Must Be Run Un-Sandboxed!");

const icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABmZVhJZklJKgAIAAAAAQBphwQAAQAAABoAAAAAAAAAAwAAkAcABAAAADAyMzABoAMAAQAAAAEAAAAFoAQAAQAAAEQAAAAAAAAAAgABAAIABAAAAFI5OAACAAcABAAAADAxMDAAAAAAIvvHMbnUA7gAAAENSURBVFhH7Y5BDsIwDARz5jn8jCuv5EelluzKbLa1neRSiZEGqcbxbqvyfH22K3WtxhbAgjJGaPwNCsgKC4iMkLtdAR12jgTIDt7x6Ox3qsPOariBdzw6+53KJ4ahVc7eDhVA2uNNRdj7cgGEBXsRvDFVAMPYvujBUssKsF3TY/vGkgJsz+uhBbqlf4G7FBCiAsh0ARFhOyJi4VMFRvHhwwVGOQsX0gUYeIyB4Sxrd/91YAEGHs7I7oUFGOwwzlC7hzcvCzCuDmf1nBZgrAgXPekCq8JFT6rAynDRQwt4ZsMjSgVYQGREWMCQFRYQGXEUUGxAZQEZ2S3wgP15yI5H7u+E7hZYgwV5dS1Ja18e8mhMGs6sIgAAAABJRU5ErkJggg==";

const ver = '1.0.0';

function label(name) {
  return {blockType: 'label',text: name}
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
          text: 'Search [json] for:[query]',
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
          text: '[json] contains only:[query]?',
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
          text: 'Insert [input] every [number] items in: [json]',
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
        {
          opcode: 'countOccurrences',
          blockType: Scratch.BlockType.REPORTER,
          text: '# of [query] in [json]',
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
        label('Ver: '+ver+''),
      ],
      menus: {
        
      }
    };
  }
	
  infoButton() {
  alert(`MIT Licence`);
  }

  searchArray(args) {
    let outArray = [];
    try {
    const inArray = JSON.parse(args.json);
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
    const inArray = JSON.parse(args.json);
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
    const inArray = JSON.parse(args.json);
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

  countOccurrences(args) {
    try {
    const inArray = JSON.parse(args.json);
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
      if (Array.isArray(JSON.parse(args.json))) {
      const inArray = JSON.parse(args.json);
        inArray.pop();
        return inArray;
      }
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
  
}
Scratch.extensions.register(new OBExtraArray());

})(Scratch);