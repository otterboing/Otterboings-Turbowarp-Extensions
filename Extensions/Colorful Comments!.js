// MIT Licence
// Inspired by the comments extensions by LilyMakesThings https://extensions.turbowarp.org/Lily/CommentBlocks.js
// LilyMakesThings: https://scratch.mit.edu/users/LilyMakesThings/ https://github.com/LilyMakesThings
// https://github.com/otterboing/Turbowarp-Extensions/blob/mai\nExtensions/smallMath.js
// Written by https://github.com/otterboing
// Original Page: 

(function (Scratch) {

const blue = '#264AFF';
const blue2 = '#13257F';
const orange = '#FF6726';
const orange2 = '#7C3212';
const yellow = '#FFC826';
const yellow2 = '#7A6012';
const purple = '#A426FF';
const purple2 = '#4B1175';
const note = '#E4DB8C';
const note2 = '#A06836';
const grey = '#7F7F7F';
const grey2 = '#3F3F3F';

class OBColorfulComments {
  getInfo() {
    return {
      id: 'OBColorfulComments',
      name: 'Colorful Comments!',
      blocks: [
        {
            blockType: Scratch.BlockType.BUTTON,
            text: 'Credits',
            func: "Credits"
        },
        {
            opcode: 'noteHat',
            blockType: Scratch.BlockType.HAT,
            text: '// [comment]',
            isEdgeActivated: false,
            color1: note,
            color3: note2,
            arguments: {
            comment: {
                 type: Scratch.ArgumentType.STRING,
                defaultValue: ''
                },
            },
        },
        {
            opcode: 'noteCommand',
            blockType: Scratch.BlockType.COMMAND,
            text: '// [comment]',
            color1: note,
            color3: note2,
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ''
                }
            }
        },
        {
            opcode: 'noteConditional',
            blockType: Scratch.BlockType.CONDITIONAL,
            text: '// [comment] 🐈',
            color1: note,
            color3: note2,
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ''
                }
            }
        },
        {
            opcode: 'noteReporter',
            blockType: Scratch.BlockType.REPORTER,
            allowDropAnywhere: true,
            text: '[comment] ⇠// [input]',
            color1: note,
            color3: note2,
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'Comment'
                },
                input: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ''
                }
            }
        },
        {
            opcode: 'noteBoolean',
            blockType: Scratch.BlockType.BOOLEAN,
            allowDropAnywhere: true,
            text: '[comment] ⇠// [input]',
            color1: note,
            color3: note2,
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'Comment'
                },
                input: {
                    type: Scratch.ArgumentType.BOOLEAN
                }
            }
        },
        {
            opcode: 'greyHat',
            blockType: Scratch.BlockType.HAT,
            text: '// [comment]',
            isEdgeActivated: false,
            color1: grey,
            color3: grey2,
            arguments: {
            comment: {
                 type: Scratch.ArgumentType.STRING,
                defaultValue: ''
                },
            },
        },
        {
            opcode: 'greyCommand',
            blockType: Scratch.BlockType.COMMAND,
            text: '// [comment]',
            color1: grey,
            color3: grey2,
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ''
                }
            }
        },
        {
            opcode: 'greyConditional',
            blockType: Scratch.BlockType.CONDITIONAL,
            text: '// [comment]',
            color1: grey,
            color3: grey2,
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ''
                }
            }
        },
        {
            opcode: 'greyReporter',
            blockType: Scratch.BlockType.REPORTER,
            allowDropAnywhere: true,
            text: '[comment] ⇠// [input]',
            color1: grey,
            color3: grey2,
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'Comment'
                },
                input: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ''
                }
            }
        },
        {
            opcode: 'greyBoolean',
            blockType: Scratch.BlockType.BOOLEAN,
            allowDropAnywhere: true,
            text: '[comment] ⇠// [input]',
            color1: grey,
            color3: grey2,
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'Comment'
                },
                input: {
                    type: Scratch.ArgumentType.BOOLEAN
                }
            }
        },
        {
            opcode: 'redHat',
            blockType: Scratch.BlockType.HAT,
            text: '// [comment]',
            isEdgeActivated: false,
            color1: '#FF263B',
            color2: '#ac1a29',
            color3: '#80131e',
            arguments: {
            comment: {
                 type: Scratch.ArgumentType.STRING,
                defaultValue: ''
                },
            },
        },
        {
            opcode: 'redCommand',
            blockType: Scratch.BlockType.COMMAND,
            allowDropAnywhere: true,
            text: '// [comment]',
            color1: '#FF263B',
            color2: '#ac1a29',
            color3: '#80131e',
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ''
                }
            }
        },
        {
            opcode: 'redConditional',
            blockType: Scratch.BlockType.CONDITIONAL,
            allowDropAnywhere: true,
            text: '// [comment]',
            color1: '#FF263B',
            color2: '#ac1a29',
            color3: '#80131e',
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ''
                }
            }
        },
        {
            opcode: 'redReporter',
            blockType: Scratch.BlockType.REPORTER,
            allowDropAnywhere: true,
            text: '[comment] ⇠// [input]',
            color1: '#FF263B',
            color2: '#ac1a29',
            color3: '#80131e',
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'Comment'
                },
                input: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ''
                }
            }
        },
        {
            opcode: 'redBoolean',
            blockType: Scratch.BlockType.BOOLEAN,
            allowDropAnywhere: true,
            text: '[comment] ⇠// [input]',
            color1: '#FF263B',
            color2: '#ac1a29',
            color3: '#80131e',
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'Comment'
                },
                input: {
                    type: Scratch.ArgumentType.BOOLEAN
                }
            }
        },
        {
            opcode: 'blueHat',
            blockType: Scratch.BlockType.HAT,
            text: '// [comment]',
            isEdgeActivated: false,
            color1: blue,
            color3: blue2,
            arguments: {
            comment: {
                 type: Scratch.ArgumentType.STRING,
                defaultValue: ''
                },
            },
        },
        {
            opcode: 'blueCommand',
            blockType: Scratch.BlockType.COMMAND,
            allowDropAnywhere: true,
            text: '// [comment]',
            color1: blue,
            color3: blue2,
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ''
                }
            }
        },
        {
            opcode: 'blueConditional',
            blockType: Scratch.BlockType.CONDITIONAL,
            allowDropAnywhere: true,
            text: '// [comment]',
            color1: blue,
            color3: blue2,
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ''
                }
            }
        },
        {
            opcode: 'blueReporter',
            blockType: Scratch.BlockType.REPORTER,
            allowDropAnywhere: true,
            text: '[comment] ⇠// [input]',
            color1: blue,
            color3: blue2,
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'Comment'
                },
                input: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ''
                }
            }
        },
        {
            opcode: 'blueBoolean',
            blockType: Scratch.BlockType.BOOLEAN,
            allowDropAnywhere: true,
            text: '[comment] ⇠// [input]',
            color1: blue,
            color3: blue2,
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'Comment'
                },
                input: {
                    type: Scratch.ArgumentType.BOOLEAN
                }
            }
        },
        {
            opcode: 'orangeHat',
            blockType: Scratch.BlockType.HAT,
            text: '// [comment]',
            isEdgeActivated: false,
            color1: orange,
            color3: orange2,
            arguments: {
            comment: {
                 type: Scratch.ArgumentType.STRING,
                defaultValue: ''
                },
            },
        },
        {
            opcode: 'orangeCommand',
            blockType: Scratch.BlockType.COMMAND,
            text: '// [comment]',
            color1: orange,
            color3: orange2,
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ''
                }
            }
        },
        {
            opcode: 'orangeConditional',
            blockType: Scratch.BlockType.CONDITIONAL,
            text: '// [comment]',
            color1: orange,
            color3: orange2,
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ''
                }
            }
        },
        {
            opcode: 'orangeReporter',
            blockType: Scratch.BlockType.REPORTER,
            allowDropAnywhere: true,
            text: '[comment] ⇠// [input]',
            color1: orange,
            color3: orange2,
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'Comment'
                },
                input: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ''
                }
            }
        },
        {
            opcode: 'orangeBoolean',
            blockType: Scratch.BlockType.BOOLEAN,
            allowDropAnywhere: true,
            text: '[comment] ⇠// [input]',
            color1: orange,
            color3: orange2,
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'Comment'
                },
                input: {
                    type: Scratch.ArgumentType.BOOLEAN
                }
            }
        },
        {
            opcode: 'yellowHat',
            blockType: Scratch.BlockType.HAT,
            text: '// [comment]',
            isEdgeActivated: false,
            color1: yellow,
            color3: yellow2,
            arguments: {
            comment: {
                 type: Scratch.ArgumentType.STRING,
                defaultValue: ''
                },
            },
        },
        {
            opcode: 'yellowCommand',
            blockType: Scratch.BlockType.COMMAND,
            text: '// [comment]',
            color1: yellow,
            color3: yellow2,
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ''
                }
            }
        },
        {
            opcode: 'yellowConditional',
            blockType: Scratch.BlockType.CONDITIONAL,
            text: '// [comment]',
            color1: yellow,
            color3: yellow2,
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ''
                }
            }
        },
        {
            opcode: 'yellowReporter',
            blockType: Scratch.BlockType.REPORTER,
            allowDropAnywhere: true,
            text: '[comment] ⇠// [input]',
            color1: yellow,
            color3: yellow2,
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'Comment'
                },
                input: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ''
                }
            }
        },
        {
            opcode: 'yellowBoolean',
            blockType: Scratch.BlockType.BOOLEAN,
            allowDropAnywhere: true,
            text: '[comment] ⇠// [input]',
            color1: yellow,
            color3: yellow2,
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'Comment'
                },
                input: {
                    type: Scratch.ArgumentType.BOOLEAN
                }
            }
        },
        {
            opcode: 'purpleHat',
            blockType: Scratch.BlockType.HAT,
            text: '// [comment]',
            isEdgeActivated: false,
            color1: purple,
            color3: purple2,
            arguments: {
            comment: {
                 type: Scratch.ArgumentType.STRING,
                defaultValue: ''
                },
            },
        },
        {
            opcode: 'purpleCommand',
            blockType: Scratch.BlockType.COMMAND,
            text: '// [comment]',
            color1: purple,
            color3: purple2,
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ''
                }
            }
        },
        {
            opcode: 'purpleConditional',
            blockType: Scratch.BlockType.CONDITIONAL,
            text: '// [comment]',
            color1: purple,
            color3: purple2,
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ''
                }
            }
        },
        {
            opcode: 'purpleReporter',
            blockType: Scratch.BlockType.REPORTER,
            allowDropAnywhere: true,
            text: '[comment] ⇠// [input]',
            color1: purple,
            color3: purple2,
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'Comment'
                },
                input: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ''
                }
            }
        },
        {
            opcode: 'purpleBoolean',
            blockType: Scratch.BlockType.BOOLEAN,
            allowDropAnywhere: true,
            text: '[comment] ⇠// [input]',
            color1: purple,
            color3: purple2,
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'Comment'
                },
                input: {
                    type: Scratch.ArgumentType.BOOLEAN
                }
            }
        }
      ],
      menus: {
      }
    };
  }

    redHat() {
    }

    redCommand() {
    }

    redConditional(args, util) {
    return true;
    }

    redReporter(args) {
    return args.input
    }

    redBoolean(args) {
    return args.input || false;
    }
    
    blueHat() {
    }

    blueCommand() {
    }

    blueConditional(args, util) {
    return true;
    }

    blueReporter(args) {
    return args.input
    }

    blueBoolean(args) {
    return args.input || false;
    }

    orangeHat() {
    }

    orangeCommand() {
    }

    orangeConditional(args, util) {
    return true;
    }

    orangeReporter(args) {
    return args.input;
    }

    orangeBoolean(args) {
    return args.input || false;
    }

    yellowHat() {
    }

    yellowCommand() {
    }

    yellowConditional(args, util) {
    return true;
    }

    yellowReporter(args) {
    return args.input;
    }

    yellowBoolean(args) {
    return args.input || false;
    }

    purpleHat() {
    }

    purpleCommand() {
    }

    purpleConditional(args, util) {
    return true;
    }

    purpleReporter(args) {
    return args.input;
    }

    purpleBoolean(args) {
    return args.input || false;
    }

    noteHat() {
    }

    noteCommand() {
    }

    noteConditional(args, util) {
    return true;
    }

    noteReporter(args) {
    return args.input;
    }

    noteBoolean(args) {
    return args.input || false;
    }

    greyHat() {
    }

    greyCommand() {
    }

    greyConditional(args, util) {
    return true;
    }

    greyReporter(args) {
    return args.input;
    }

    greyBoolean(args) {
    return args.input || false;
    }

    Credits() {
    alert("Inspired by LilyMakesThings \n https://extensions.turbowarp.org/Lily/CommentBlocks.js \n https://github.com/LilyMakesThings \n https://scratch.mit.edu/users/LilyMakesThings/");
    }
  
}
Scratch.extensions.register(new OBColorfulComments());

})(Scratch);