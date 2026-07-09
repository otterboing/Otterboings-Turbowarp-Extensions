// MIT Licence 
// Description: This is an extension yes... yes this is very much an extension. 🐍
// Page: https://github.com/otterboing/Otterboings-Turbowarp-Extensions/blob/main/Extensions/packaged.js

(function (Scratch) {

const ID = "OBpackagedCheck"

if (!Scratch.extensions.unsandboxed) throw new Error(""+ID+" Must Be Run Un-Sandboxed! - Requires JS to manage the check the runtime.");

const vm = Scratch.vm

// Version:
const ver = '1.0.0'

const icon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMS40NDkiIGhlaWdodD0iMzEuNDQ5IiB2aWV3Qm94PSIwIDAgMzEuNDQ5IDMxLjQ0OSI+PGcgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNMCAxNS43MjUgMTUuNzI1IDAgMzEuNDUgMTUuNzI1IDE1LjcyNSAzMS40NXoiIGZpbGw9IiMyNTI1MjUiLz48cGF0aCBkPSJNMTUuNzI1IDYuNDI3djE4LjU5Nm05LjI5OC05LjI5OEg2LjQyNyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjwvc3ZnPg==';

const color1Def = '#252525';
const color2Def = '#404040';
const color3Def = '#303030';

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
    color1: getColor(color1,1),
    color2: getColor(color2,2),
    color3: getColor(color3,3),
  }; 
  if (typeof extra === "object") {
  Object.assign(block,extra);
  }
  return block;
}

function ARG(name,type,defaultValue) {return ``+name+`: {type: `+type+`, defaultValue: `+defaultValue+`}`}

class OBpackagedCheck {

  constructor() {

    }

  getInfo() {
    return {
      id: ID,
      name: 'Packaged?',
      menuIconURI: icon,
      color1: "",
      color2: "",
      blocks: [
        {
            blockType: Scratch.BlockType.BUTTON,
            text: 'Info',
            func: 'Info'
        },
        makeBlock('checkPackaged',Scratch.BlockType.BOOLEAN,'Packaged?'),
      ],
      menus: {
        
      }
    };
  }

  Info() {
    alert(`  MIT License\n\nChecks if the project is packaged!`)
  }

  checkPackaged() {
    return !!vm.runtime.isPackaged;
  }

}
Scratch.extensions.register(new OBpackagedCheck());

})(Scratch);