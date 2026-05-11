// MIT Licence 
// Original by https://github.com/otterboing
// https://github.com/otterboing/Turbowarp-Extensions/blob/main/Extensions/smallMath.js
(function (Scratch) {

        function offDoMath(input1,math,input2) {
        const type = math
        let number = 0
        if (type === "+") {
        number = input1 + input2
        }
        if (type === "-") {
        number = input1 - input2
        }
        if (type === "*") {
        number = input1 * input2
        }
        if (type === "/") {
        number = input1 / input2
        }
        return number
    }

        function offCompare(input1,compare,input2) {
        const type = compare;
        let number = false;
        if (type === ">") {
        number = input1 > input2
        }
        if (type === "<") {
        number = input1 < input2
        }
        if (type === "==") {
        number = input1 == input2
        }
        if (type === "===") {
        number = input1 === input2
        }
        if (type === ">=") {
        number = input1 >= input2
        }
        if (type === "<=") {
        number = input1 <= input2
        }
    return number
    }

    function offCompareGet(greaterLesser,input1,input2) {
        const get = greaterLesser;
        let number = 0;
        if (get === 'greater') {
            if (input1 > input2) {
            number = input1;
            }
            else {
            number = input2
            }
        }
        else {
            if (input1 < input2) {
            number = input1;
            }
            else {
            number = input2
            }
        }
    return number 
    }

    function getDistanceOff(input1, input2) {
    let lesser = 0;
    let greater = 1;
    if (input1 < input2) {
        lesser = input1;
        greater = input2;
    }
    else {
    lesser = input2;
    greater = input1;
    }
    let number = greater - lesser;
    return number
    }

    function offZWithinXY(z,x,y) {
    const greater = offCompareGet("greater",x,y);
    const lesser = offCompareGet("lesser",x,y);
    return z >= lesser && z <= greater;
    }

class OBsmallMath {
  getInfo() {
    return {
      id: 'OBsmallMath',
      name: 'Small Math',
      blocks: [
        {
            opcode: 'doMath',
            blockType: Scratch.BlockType.REPORTER,
            allowDropAnywhere: true,
            text: '[input1] [math] [input2]',
            arguments: {
                input1: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '2'
                },
                input2: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '2'
                },
                math: {
                    type: Scratch.ArgumentType.STRING,
                    menu: "math"
                }
            }
        },
        {
            opcode: 'compare',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[input1] [compare] [input2]',
            arguments: {
                input1: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '2'
                },
                input2: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '1'
                },
                compare: {
                    type: Scratch.ArgumentType.STRING,
                    menu: "compare"
                }
            }
        },
        {
            opcode: 'compareMath',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[input1] [math] [input2] [compare] [input3]',
            arguments: {
                input1: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '2'
                },
                input2: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '2'
                },
                input3: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '3'
                },
                math: {
                    type: Scratch.ArgumentType.STRING,
                    menu: "math"
                },
                compare: {
                    type: Scratch.ArgumentType.STRING,
                    menu: "compare"
                }
            }
        },
        {
            opcode: 'compareGet',
            blockType: Scratch.BlockType.REPORTER,
            text: '[greaterLesser] of: [input1] & [input2]',
            arguments: {
                input1: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '1'
                },
                input2: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '2'
                },
                greaterLesser: {
                    type: Scratch.ArgumentType.STRING,
                    menu: "greaterLesser"
                }
            }
        },
        {
            opcode: 'getDistance',
            blockType: Scratch.BlockType.REPORTER,
            text: 'D: [input1] & [input2]',
            arguments: {
                input1: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '2'
                },
                input2: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '6'
                }
            }
        },
        {
            opcode: 'getDistanceXY',
            blockType: Scratch.BlockType.REPORTER,
            text: 'D: X1: [X1] Y1: [Y1] & X2: [X2] Y2: [Y2]',
            arguments: {
                 X1: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '0'
                },
                 Y1: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '0'
                },
                 X2: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '4'
                },
                 Y2: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '4'
                }
            }
        },
        {
            opcode: 'ZwithinXY',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[z] within [x] & [y]',
            arguments: {
                z: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '0'
                },
                x: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '-1'
                },
                y: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '1'
                }
            }
        },
        {
            opcode: 'XYwithinABCD',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[x] [y] within [a] [b] & [c] [d]',
            arguments: {
                x: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '0'
                },
                y: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '0'
                },
                a: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '-1'
                },
                b: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '1'
                },
                c: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '1'
                },
                d: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '-1'
                }
            }
        }
      ],
      menus: {
        math: {
            acceptReporters: true,
            items: [
                {text: '+', value: '+'},
				{text: '-', value: '-'},
				{text: '*', value: '*'},
				{text: '/', value: '/'}
            ]
        },
        compare: {
            acceptReporters: true,
            items: [
				{text: '>', value: '>'},
				{text: '<', value: '<'},
				{text: '==', value: '=='},
				{text: '===', value: '==='},
				{text: '>=', value: '>='},
				{text: '<=', value: '<='}
            ]
        },
        greaterLesser: {
            acceptReporters: true,
            items: [
                {text: '>', value: 'greater'},
                {text: '<', value: 'lesser'}
            ]
        }
      }
    };
  }

    doMath(args) {
        let number = offDoMath(args.input1,args.math,args.input2)
        return number
    }

    compare(args) {
    let number = offCompare(args.input1, args.compare, args.input2)
    return number
    }

    compareMath(args) {
        const type = args.compare;
        const mathType = args.math;
        let input = offDoMath(args.input1, mathType, args.input2)
        let number = offCompare(input, type, args.input3);
        return number
    }

    compareGet(args) {
    return offCompareGet(args.greaterLesser,args.input1,args.input2)
    }

    getDistance(args) {
    return getDistanceOff(args.input1, args.input2)
    }

    // I've learned that ^ in js is ** from More-Motion by NexusKitten
    // https://github.com/TurboWarp/extensions/blob/master/extensions/NexusKitten/moremotion.js
    // https://github.com/NexusKitten
    getDistanceXY(args) {
    //  // Shoutout to Pythagoras & NexusKitten!
      return Math.sqrt((args.X2 - args.X1) ** 2 + (args.Y2 - args.Y1) ** 2);
    }
    
    ZwithinXY(args) {
    return offZWithinXY(args.z,args.x,args.y);
    }

    XYwithinABCD(args) {
        return offZWithinXY(args.x,args.a,args.c) && offZWithinXY(args.y,args.b,args.d);
    }
  
}
Scratch.extensions.register(new OBsmallMath());

})(Scratch);
