// MIT Licence 
// Original by https://github.com/otterboing
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
  
}
Scratch.extensions.register(new OBsmallMath());

})(Scratch);