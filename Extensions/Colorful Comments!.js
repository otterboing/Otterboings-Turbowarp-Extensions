// MIT Licence
// Colorful Comments.js
// Inspired by the comments extensions by LilyMakesThings https://extensions.turbowarp.org/Lily/CommentBlocks.js
// LilyMakesThings: https://scratch.mit.edu/users/LilyMakesThings/ https://github.com/LilyMakesThings
// Written by https://github.com/otterboing
// Original Page: https://github.com/otterboing/Otterboings-Turbowarp-Extensions/blob/main/Extensions/Colorful%20Comments!.js
// Version: 1.2.0 - Added new Color "Contrast" - Reworked All blocks to use universal function (Maybe faster or slower?) - Added non-conflicting symbols to the block text to make searching easy.

(function (Scratch) {

if (!Scratch.extensions.unsandboxed) throw new Error('"OBColorfulComments" Should be ran un-sandboxed!. - It will work sandboxed, but it will be much slower!');

const blue = '#264AFF';
const blue2 = '#13257F';
const orange = '#FF6726';
const orange2 = '#7C3212';
const yellow = '#FFBF00';
const yellow2 = '#664C00';
const yellow3 = '#CC9900';
const purple = '#A426FF';
const purple2 = '#4B1175';
const note = '#E4DB8C';
const note2 = '#A06836';
const grey = '#7F7F7F';
const grey2 = '#3F3F3F';
const contrast = '#3F3F3F';
const contrast2 = '#C1C1C1';
const contrast3 = '#C1C1C1'
const icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABmZVhJZklJKgAIAAAAAQBphwQAAQAAABoAAAAAAAAAAwAAkAcABAAAADAyMzABoAMAAQAAAAEAAAAFoAQAAQAAAEQAAAAAAAAAAgABAAIABAAAAFI5OAACAAcABAAAADAxMDAAAAAAIvvHMbnUA7gAAASHSURBVHhe7ZpNbhNBFISdhCRCYskBEAvEmh3HCFyBXYTEMVhxAnbZseUaCMQdUHYsskRKYqbaXZNy+fXM2J5MOolLKvW4e2K/r9782KPMdtppp52GaP7+eJ788sk8T1WjN1dv53B+Ob5aeHFeulN9uHqVwOHn1yfJeWk8RfDz0/2Fm+282+SK4OHD69NxawrhOWbnXSdTF/ytBIBBrfBTh+DwzdSSEcDRv8/j1KPwVPv6DkIonPO5spvaRg/AleY8gLOntxpCCR5W4fXxxbf5/vmP7WrJMCsfALXzBp/Gxs3aqCqd881SruhGmINHC6CktBbAX/4+GjWELng4EuYnCSCtB/AYYbwPhO3zP3tpDiP86+KwHemvV8+S85+1X3AcPl/pcyWrwtrxz7/J6Y02UV8AUFovwLsJrgFE8DC6Xuo84btqw9pkAQBuG/B14fu6D2Ed8AffL28vAKyl9Z7u9wWwLvzQIwDwGweQzusgALxWR8B0H/g68BoA7vH5Pr9kFV6PGgBG2js+ZecBjns87/P0Un253tECoNNcA0tH0HAf+NjwvNjlC15rwB9+2SAAwrduYDEdOQqiL4BN4aPDHiY8O04Dnm72G6YIviuAdcC3gWfnoxr64A8+Xic3+3YrhM8jlksmvIYAWK4rPOcUnnNdnedhz30jd8Ennyzc7LuqEF6MXUr27hOY64T3ANh5znV1nuc79408BB5+/SJdJG8UwlsI2K3kCF4DgD0AmIc9Xzu8dn5IAEPhObZBrMCLeX7zQ9wO3xVClx3eOw9HV3p4nc673+01ISzBWwiAx+gfSiu82ztessNHnSd8FMBQeA0B4PQiAIFWcB4BboIT3kPgIQ9vcrUvwfNCRw+BV3ANgOMsQQedj6zgDt0Hr+ARfF/nN4GPwN2LAAy8FMJQeD9Mp7LDewiDAojgHTwKwMGnloag0AoehZACcGC3B9AFf5diDXAUQOQ2gDE6X4s0gAhanZ7XlQxAjiV4BlCT2JAI2B0GMLTzNXaf2joAgrkVHrc4zNUo1htBq1cCACBGgvGNuE342gOAUFsErW4D0MPeoXWb4DTXahRqi6DVKQBAawgK7NsaAH/O1irUFkGrZ4SmcQo4NLe18/xuz/UahdoiaPVSAIRXaN12eHyn53qNQm2fmvIicBhrYQD8Y992+PsQQAQOA74NAOC0Q3Ob8ASH8UuO+9Qo1FaC5xgGENk7D+MnLNZqFOuO4NUzhYf9Ph8d9ug8R35QTSrB9wZQgic4jc7rg4zaQojgHRw+25cASvDRYY+RAfAxVi0hsA6H9xAAjzEFUIJXcELTCs9HWHcdQgneTfh0BJTgPYA+eD7DYxFTBqGf6fAagoLTbQDbdJ7w+gBTi5rCCq7Qbg8hBTBG5xV+k6e3Qx5gDjUAOZbA2wDGhtcQhsK7HchNwJIVnNAc3cX/w9sEXh2CB/AaQgSzjh2c0BwjN6fP4v/xtoXXEO5D5+EET9XQ+SEhlLwV/BCtA9/X+fyW908OryE8eHjqUXbe9ajhqSK8gD9Y+J122umBaDb7DxQn725e3SkFAAAAAElFTkSuQmCC';


class OBColorfulComments {
  getInfo() {
    return {
      id: 'OBColorfulComments',
      name: 'Colorful Comments!',
      menuIconURI: icon,
      blocks: [
        {
            blockType: Scratch.BlockType.BUTTON,
            text: 'Credits',
            func: "Credits"
        },
        {
            blockType: Scratch.BlockType.BUTTON,
            text: 'Info',
            func: "ExtraButton"
        },
        // Note (Color)
        {
            opcode: 'noteHat',
            blockType: Scratch.BlockType.HAT,
            func: 'hat',
            text: '//^ [comment]',
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
            func: 'command',
            text: '//: [comment]',
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
            func: 'conditional',
            text: '//| [comment] 🐈',
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
            func: 'reporter',
            allowDropAnywhere: true,
            text: '[comment] ⇠ //( [input]',
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
            func: 'boolean',
            allowDropAnywhere: true,
            text: '[comment] ⇠ //{ [input]',
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
            opcode: 'noteReporter2',
            blockType: Scratch.BlockType.REPORTER,
            func: 'reporter',
            allowDropAnywhere: true,
            text: '[input] //) ⇢ [comment]',
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
            opcode: 'noteBoolean2',
            blockType: Scratch.BlockType.BOOLEAN,
            func: 'boolean',
            allowDropAnywhere: true,
            text: '[input] //} ⇢ [comment]',
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
            opcode: 'noteEnd',
            blockType: Scratch.BlockType.COMMAND,
            text: '//_ [comment]',
            func: 'end',
            color1: note,
            color3: note2,
            isTerminal: true,
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ''
                }
            }
        },
        // Grey
        {
            opcode: 'greyHat',
            blockType: Scratch.BlockType.HAT,
            func: 'hat',
            text: '//^ [comment]',
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
            func: 'command',
            text: '//: [comment]',
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
            func: 'conditional',
            text: '//| [comment]',
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
            func: 'reporter',
            allowDropAnywhere: true,
            text: '[comment] ⇠ //( [input]',
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
            func: 'boolean',
            allowDropAnywhere: true,
            text: '[comment] ⇠ //{ [input]',
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
            opcode: 'greyReporter2',
            blockType: Scratch.BlockType.REPORTER,
            func: 'reporter',
            allowDropAnywhere: true,
            text: '[input] //) ⇢ [comment]',
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
            opcode: 'greyBoolean2',
            blockType: Scratch.BlockType.BOOLEAN,
            func: 'boolean',
            allowDropAnywhere: true,
            text: '[input] //} ⇢ [comment]',
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
            opcode: 'greyEnd',
            blockType: Scratch.BlockType.COMMAND,
            text: '//_ [comment]',
            func: 'end',
            color1: grey,
            color3: grey2,
            isTerminal: true,
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ''
                }
            }
        },
        // Contrast
        {
            opcode: 'contrastHat',
            blockType: Scratch.BlockType.HAT,
            func: 'hat',
            text: '//^ [comment]',
            isEdgeActivated: false,
            color1: contrast,
            color2: contrast2,
            color3: contrast3,
            arguments: {
            comment: {
                 type: Scratch.ArgumentType.STRING,
                defaultValue: ''
                },
            },
        },
        {
            opcode: 'contrastCommand',
            blockType: Scratch.BlockType.COMMAND,
            func: 'command',
            text: '//: [comment]',
            color1: contrast,
            color2: contrast2,
            color3: contrast3,
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ''
                }
            }
        },
        {
            opcode: 'contrastConditional',
            blockType: Scratch.BlockType.CONDITIONAL,
            func: 'conditional',
            text: '//| [comment]',
            color1: contrast,
            color2: contrast2,
            color3: contrast3,
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ''
                }
            }
        },
        {
            opcode: 'contrastReporter',
            blockType: Scratch.BlockType.REPORTER,
            func: 'reporter',
            allowDropAnywhere: true,
            text: '[comment] ⇠ //( [input]',
            color1: contrast,
            color2: contrast2,
            color3: contrast3,
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
            opcode: 'contrastBoolean',
            blockType: Scratch.BlockType.BOOLEAN,
            func: 'boolean',
            allowDropAnywhere: true,
            text: '[comment] ⇠ //{ [input]',
            color1: contrast,
            color2: contrast2,
            color3: contrast3,
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
            opcode: 'contrastReporter2',
            blockType: Scratch.BlockType.REPORTER,
            func: 'reporter',
            allowDropAnywhere: true,
            text: '[input] //) ⇢ [comment]',
            color1: contrast,
            color2: contrast2,
            color3: contrast3,
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
            opcode: 'contrastBoolean2',
            blockType: Scratch.BlockType.BOOLEAN,
            func: 'boolean',
            allowDropAnywhere: true,
            text: '[input] //} ⇢ [comment]',
            color1: contrast,
            color2: contrast2,
            color3: contrast3,
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
            opcode: 'contrastEnd',
            blockType: Scratch.BlockType.COMMAND,
            text: '//_ [comment]',
            func: 'end',
            color1: contrast,
            color2: contrast2,
            color3: contrast3,
            isTerminal: true,
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ''
                }
            }
        },
        // Red
        {
            opcode: 'redHat',
            blockType: Scratch.BlockType.HAT,
            func: 'hat',
            text: '//^ [comment]',
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
            func: 'command',
            allowDropAnywhere: true,
            text: '//: [comment]',
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
            func: 'conditional',
            allowDropAnywhere: true,
            text: '//| [comment]',
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
            func: 'reporter',
            allowDropAnywhere: true,
            text: '[comment] ⇠ //( [input]',
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
            func: 'boolean',
            allowDropAnywhere: true,
            text: '[comment] ⇠ //{ [input]',
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
            opcode: 'redReporter2',
            blockType: Scratch.BlockType.REPORTER,
            func: 'reporter',
            allowDropAnywhere: true,
            text: '[input] //) ⇢ [comment]',
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
            opcode: 'redBoolean2',
            blockType: Scratch.BlockType.BOOLEAN,
            func: 'boolean',
            allowDropAnywhere: true,
            text: '[input] //} ⇢ [comment]',
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
            opcode: 'redEnd',
            blockType: Scratch.BlockType.COMMAND,
            text: '//_ [comment]',
            func: 'end',
            color1: '#FF263B',
            color2: '#ac1a29',
            color3: '#80131e',
            isTerminal: true,
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ''
                }
            }
        },
        // Orange
        {
            opcode: 'orangeHat',
            blockType: Scratch.BlockType.HAT,
            func: 'hat',
            text: '//^ [comment]',
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
            func: 'command',
            text: '//: [comment]',
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
            func: 'conditional',
            text: '//| [comment]',
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
            func: 'reporter',
            allowDropAnywhere: true,
            text: '[comment] ⇠ //( [input]',
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
            func: 'boolean',
            allowDropAnywhere: true,
            text: '[comment] ⇠ //{ [input]',
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
            opcode: 'orangeReporter2',
            blockType: Scratch.BlockType.REPORTER,
            func: 'reporter',
            allowDropAnywhere: true,
            text: '[input] //) ⇢ [comment]',
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
            opcode: 'orangeBoolean2',
            blockType: Scratch.BlockType.BOOLEAN,
            func: 'boolean',
            allowDropAnywhere: true,
            text: '[input] //} ⇢ [comment]',
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
            opcode: 'orangeEnd',
            blockType: Scratch.BlockType.COMMAND,
            text: '//_ [comment]',
            func: 'end',
            color1: orange,
            color3: orange2,
            isTerminal: true,
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ''
                }
            }
        },
        // Yellow
        {
            opcode: 'yellowHat',
            blockType: Scratch.BlockType.HAT,
            func: 'hat',
            text: '//^ [comment]',
            isEdgeActivated: false,
            color1: yellow,
            color2: yellow2,
            color3: yellow3,
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
            func: 'command',
            text: '//: [comment]',
            color1: yellow,
            color2: yellow2,
            color3: yellow3,
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
            func: 'conditional',
            text: '//| [comment]',
            color1: yellow,
            color2: yellow2,
            color3: yellow3,
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
            func: 'reporter',
            allowDropAnywhere: true,
            text: '[comment] ⇠ //( [input]',
            color1: yellow,
            color2: yellow2,
            color3: yellow3,
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
            func: 'boolean',
            allowDropAnywhere: true,
            text: '[comment] ⇠ //{ [input]',
            color1: yellow,
            color2: yellow2,
            color3: yellow3,
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
            opcode: 'yellowReporter2',
            blockType: Scratch.BlockType.REPORTER,
            func: 'reporter',
            allowDropAnywhere: true,
            text: '[input] //) ⇢ [comment]',
            color1: yellow,
            color2: yellow2,
            color3: yellow3,
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
            opcode: 'yellowBoolean2',
            blockType: Scratch.BlockType.BOOLEAN,
            func: 'boolean',
            allowDropAnywhere: true,
            text: '[input] //} ⇢ [comment]',
            color1: yellow,
            color2: yellow2,
            color3: yellow3,
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
            opcode: 'yellowEnd',
            blockType: Scratch.BlockType.COMMAND,
            text: '//_ [comment]',
            func: 'end',
            color1: yellow,
            color2: yellow2,
            color3: yellow3,
            isTerminal: true,
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ''
                }
            }
        },
        // blue
        {
            opcode: 'blueHat',
            blockType: Scratch.BlockType.HAT,
            func: 'hat',
            text: '//^ [comment]',
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
            func: 'command',
            allowDropAnywhere: true,
            text: '//: [comment]',
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
            func: 'conditional',
            allowDropAnywhere: true,
            text: '//| [comment]',
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
            func: 'reporter',
            allowDropAnywhere: true,
            text: '[comment] ⇠ //( [input]',
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
            func: 'boolean',
            allowDropAnywhere: true,
            text: '[comment] ⇠ //{ [input]',
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
            opcode: 'blueReporter2',
            blockType: Scratch.BlockType.REPORTER,
            func: 'reporter',
            allowDropAnywhere: true,
            text: '[input] //) ⇢ [comment]',
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
            opcode: 'blueBoolean2',
            blockType: Scratch.BlockType.BOOLEAN,
            func: 'boolean',
            allowDropAnywhere: true,
            text: '[input] //} ⇢ [comment]',
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
            opcode: 'blueEnd',
            blockType: Scratch.BlockType.COMMAND,
            text: '//_ [comment]',
            func: 'end',
            color1: blue,
            color3: blue2,
            isTerminal: true,
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ''
                }
            }
        },
        // Purple
        {
            opcode: 'purpleHat',
            blockType: Scratch.BlockType.HAT,
            func: 'hat',
            text: '//^ [comment]',
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
            func: 'command',
            text: '//: [comment]',
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
            func: 'conditional',
            text: '//| [comment]',
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
            func: 'reporter',
            allowDropAnywhere: true,
            text: '[comment] ⇠ //( [input]',
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
            func: 'boolean',
            allowDropAnywhere: true,
            text: '[comment] ⇠ //{ [input]',
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
        },
        {
            opcode: 'purpleReporter2',
            blockType: Scratch.BlockType.REPORTER,
            func: 'reporter',
            allowDropAnywhere: true,
            text: '[input] //) ⇢ [comment]',
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
            opcode: 'purpleBoolean2',
            blockType: Scratch.BlockType.BOOLEAN,
            func: 'boolean',
            allowDropAnywhere: true,
            text: '[input] //} ⇢ [comment]',
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
        },
        {
            opcode: 'purpleEnd',
            blockType: Scratch.BlockType.COMMAND,
            text: '//_ [comment]',
            func: 'end',
            color1: purple,
            color3: purple2,
            isTerminal: true,
            arguments: {
                comment: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ''
                }
            }
        }
      ],
      menus: {
      }
    };
  }

    hat() {
    }

    command() {
    }

    conditional(args, util) {
    return true;
    }

    reporter(args) {
    return args.input;
    }

    boolean(args) {
    return args.input || false;
    }

    end() {
    }

    // buttons

    Credits() {
    alert("Inspired by LilyMakesThings \n https://extensions.turbowarp.org/Lily/CommentBlocks.js \n https://github.com/LilyMakesThings \n https://scratch.mit.edu/users/LilyMakesThings/");
    }

    ExtraButton() {
    alert(" - Note: End blocks don't stop the script. \n\n ---- Searching ---- \n\n - You can search for specific blocks using // + a symbol:\n\n - hat: ^\n - command: :\n - conditional: |\n - reporter: ( or )\n - boolean: { or }\n - end: _\n\n ------------------- ");
    }
    
  
}
Scratch.extensions.register(new OBColorfulComments());

})(Scratch);
