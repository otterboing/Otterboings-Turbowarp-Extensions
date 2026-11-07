// MIT Licence 
// Description: Adds some more joins!
// Page: https://github.com/otterboing/Otterboings-Turbowarp-Extensions/blob/main/Extensions/joins.js
// No AI was used in the making of this extension. AI, LLMs or nueral networks may not use, read or modify this extension's code in any way.

(function (Scratch) {

    // Config

    const ID = "OBMOREJOINS";
    const NAME = 'More Joins!';

    // Version:
    const ver = '1.0.0'

    if (!Scratch.extensions.unsandboxed) throw new Error("" + ID + " Must Be Run Un-Sandboxed! - Requires JS to do something I guess...");

    function label(name) { return { blockType: 'label', text: name }; }

    function makeBlock(opcode, type, text, args, extra) {
        const block = {
            opcode: opcode,
            blockType: type,
            text: text,
            allowDropAnywhere: true,
            arguments: args
        };
        if (typeof extra === "object") {
            Object.assign(block, extra);
        }
        return block;
    }

    function makeButton(text, func) {
        return {
            blockType: Scratch.BlockType.BUTTON,
            text: text,
            func: func
        }
    }

    const BT = Scratch.BlockType;
    const AT = Scratch.ArgumentType;

    function ARG(type, defaultValue, menu) { return { type: type, defaultValue: defaultValue, menu: menu }; };

    class OBID {

        constructor() {

        }

        getInfo() {
            return {
                id: ID,
                name: NAME,
                color1: "#59C059",
                blocks: [
                    makeButton('Info', 'infoFunction'),
                    makeBlock('join3', BT.REPORTER, '3Join[1][2][3]', {
                    1: ARG(AT.STRING, ''),
                    2: ARG(AT.STRING, ''),
                    3: ARG(AT.STRING, '')
                    },{func:'joinMany'}),
                    makeBlock('join4', BT.REPORTER, '4Join[1][2][3][4]',{
                        1: ARG(AT.STRING, ''),
                        2: ARG(AT.STRING, ''),
                        3: ARG(AT.STRING, ''),
                        4: ARG(AT.STRING, '')
                    },{func:'joinMany'}),
                    makeBlock('join5', BT.REPORTER, '5Join[1][2][3][4][5]',{
                        1: ARG(AT.STRING, ''),
                        2: ARG(AT.STRING, ''),
                        3: ARG(AT.STRING, ''),
                        4: ARG(AT.STRING, ''),
                        5: ARG(AT.STRING, '')
                    },{func:'joinMany'}),
                    makeBlock('join6', BT.REPORTER, '6Join[1][2][3][4][5][6]',{
                        1: ARG(AT.STRING, ''),
                        2: ARG(AT.STRING, ''),
                        3: ARG(AT.STRING, ''),
                        4: ARG(AT.STRING, ''),
                        5: ARG(AT.STRING, ''),
                        6: ARG(AT.STRING, '')
                    },{func:'joinMany'}),
                    label('ver ' + ver)
                ],
                menus: {
                }
            };
        }

        infoFunction() {
            alert(`  MIT License\n\nhttps://otterboing.neocities.org/LICENCE.txt\n\nhttps://github.com/otterboing/Otterboings-Turbowarp-Extensions/blob/main/LICENSE\n\nhttps://mit-license.org`)
        }

        joinMany(args) {
            return Object.values(args).join('');
        }

    }
    Scratch.extensions.register(new OBID());

})(Scratch);