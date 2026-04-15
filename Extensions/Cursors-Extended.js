// MIT Licence 
// Original by https://github.com/otterboing
(function (Scratch) {

const canvas = document.querySelector('canvas');
let currentCursor = 'default'

class extendedCursors {
  getInfo() {
    return {
      id: 'extendedCursors',
      name: 'Extended Cursors',
      blocks: [
        {
            blockType: Scratch.BlockType.BUTTON,
            text: 'Loading from URL',
            func: "Notice",
        },
        {
            opcode: 'setCursor',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Set cursor to: [CURSOR]',
            arguments: {
                CURSOR: {
                    type: Scratch.ArgumentType.STRING,
                    menu: "cursors",
                }
            }
        },
        {
          opcode: 'setCursorFromUrl',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Set cursor from URL: [url] offset by X: [offsetX] Y: [offsetY]',
          arguments: {

           url: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: "https://raw.githubusercontent.com/otterboing/Cursors/main/16px/default.png",
           },
           offsetX: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: "0",
           },
           offsetY: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: "0",
           }

          }
        },
        {
          opcode: 'setCursorFromUrlWithScale',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Set cursor from URL: [url] scale to width: [width] px height: [height] px, offset by X: [offsetX] Y: [offsetY]',
		  hideFromPalette: true,
          arguments: {

           url: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: "https://raw.githubusercontent.com/otterboing/Cursors/main/16px/default.png",
           },
		   width: {
			type: Scratch.ArgumentType.STRING,
			defaultValue: "16",
		   },
		   height: {
			type: Scratch.ArgumentType.STRING,
			defaultValue: "16",
		   },
           offsetX: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: "0",
           },
           offsetY: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: "0",
           }

          }
        },
        {
            opcode: 'getCursor',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Cursor'
        },
      ],
      menus: {
        cursors: {
            acceptReporters: true,
            items: [
                {text: 'auto', value: 'auto'},
                {text: 'default', value: 'default'},
                {text: 'none', value: 'none'},
                {text: 'context-menu', value: 'context-menu'},
                {text: 'help', value: 'help'},
                {text: 'pointer', value: 'pointer'},
                {text: 'progress', value: 'progress'},
                {text: 'wait', value: 'wait'},
                {text: 'cell', value: 'cell'},
                {text: 'crosshair', value: 'crosshair'},
                {text: 'text', value: 'text'},
                {text: 'vertical-text', value: 'vertical-text'},
                {text: 'alias', value: 'alias'},
                {text: 'copy', value: 'copy'},
                {text: 'move', value: 'move'},
                {text: 'no-drop', value: 'no-drop'},
                {text: 'not-allowed', value: 'not-allowed'},
                {text: 'grab', value: 'grab'},
                {text: 'grabbing', value: 'grabbing'},
                {text: 'all-scroll', value: 'all-scroll'},
                {text: 'col-resize', value: 'col-resize'},
                {text: 'row-resize', value: 'row-resize'},
                {text: 'n-resize', value: 'n-resize'},
                {text: 'e-resize', value: 'e-resize'},
                {text: 's-resize', value: 's-resize'},
                {text: 'w-resize', value: 'w-resize'},
                {text: 'ne-resize', value: 'ne-resize'},
                {text: 'nw-resize', value: 'nw-resize'},
                {text: 'se-resize', value: 'se-resize'},
                {text: 'sw-resize', value: 'sw-resize'},
                {text: 'ew-resize', value: 'ew-resize'},
                {text: 'ns-resize', value: 'ns-resize'},
                {text: 'nesw-resize', value: 'nesw-resize'},
                {text: 'nwse-resize', value: 'nwse-resize'},
                {text: 'zoom-in', value: 'zoom-in'},
                {text: 'zoom-out', value: 'zoom-out'}                
            ]
        }
      }
    };
  }
	

  setCursorFromUrl(args) {
    canvas.style.cursor = "url('"+args.url+"') "+args.offsetX+" "+args.offsetY+", default";
    currentCursor = args.url;
  };
  
  setCursorFromUrlWithScale(args) {
	
	// Source - https://stackoverflow.com/a/61259685
// Posted by cagdas_ucar, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-15, License - CC BY-SA 4.0
	
	const img = new Image();
	img.src = args.url
	const canvas = document.createElement("canvas");
	createImageBitmap(img, { resizeWidth: args.width, resizeHeight: args.height, resizeQuality: 'high' })
	.then(imageBitmap => 
    canvas.getContext('2d').drawImage(imageBitmap, 0, 0)
	);
    canvas.style.cursor = "url('canvas.toDataURL()') "+args.offsetX+" "+args.offsetY+", default";
    currentCursor = args.url;
  };

  setCursor(args) {
    canvas.style.cursor = ""+args.CURSOR+"";
    currentCursor = args.CURSOR;
  };

  getCursor()   {
    return currentCursor
  }


  Notice() {
    alert("Loading a cursor from an image url will use it's full resolution. For example: 256x256px will be MASSIVE! I have plans to implement built in resizing but for now you have to maunally resize or use Sharkpools Image extension. 🤗 Sharkpool's extension:  https://raw.githubusercontent.com/SharkPool-SP/SharkPools-Extensions/main/extension-code/Image-Editor.js ");
  }
  
}
Scratch.extensions.register(new extendedCursors());

})(Scratch);