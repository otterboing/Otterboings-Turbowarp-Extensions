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
            text: 'get [greaterLesser] of: [input1] & [input2]',
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
            text: 'Distance between: [input1] & [input2]',
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
                {text: 'greater', value: 'greater'},
                {text: 'lesser', value: 'lesser'}
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
    let lesser = 0;
    let greater = 1;
    if (args.input1 < args.input2) {
        lesser = args.input1;
        greater = args.input2;
    }
    else {
    lesser = args.input2;
    greater = args.input1;
    }
    let number = greater - lesser;
    return number
    }
        
  
}
Scratch.extensions.register(new OBsmallMath());

})(Scratch);