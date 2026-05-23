// MIT Licence 
// Original by https://github.com/otterboing
// https://github.com/otterboing/Turbowarp-Extensions/blob/main/Extensions/Cursors-Extended.js

(function (Scratch) {

"use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("'OBextendedCursors' Must Be Run Un-Sandboxed! - Requires JS to Set The Scratch Canvas's CSS");

const icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABmZVhJZklJKgAIAAAAAQBphwQAAQAAABoAAAAAAAAAAwAAkAcABAAAADAyMzABoAMAAQAAAAEAAAAFoAQAAQAAAEQAAAAAAAAAAgABAAIABAAAAFI5OAACAAcABAAAADAxMDAAAAAAIvvHMbnUA7gAAAEGSURBVFhH7c3hDoMwCARg3/+lNw+Pikhdadl+7UsuMRTOLfBiVmnPcJ8/sMmKOpAuWYjom8kIXp8wY0Jce4Y9lx5enDBjbuQhS+968YKdRgYrZjp403A8B/fZDt40HM/BfbaDN026wJq5580Fn/Jw6+NFO3suuDoH9zaef99zIw8Voh7bz++QLKyKejDTOb9DsrAKPb2Y91Bb+hb9B37Ww9V66GYecb0WepmPZLGSdqJ8FE9roI8ZxtM66GSGyHI19g7jWR10HtVjeFYHnUf1GDmoon0ozuD5GvQwaax4hr3err7tmdItVroT7Zr5Etbd4Y1RdubfpkmRp3Ms/IL9oc3fom17A/33WRiMzhETAAAAAElFTkSuQmCC";
const canvas = document.querySelector('canvas');
let currentCursor = 'default'

class OBextendedCursors {
  getInfo() {
    return {
      id: 'OBextendedCursors',
      name: 'Extended Cursors',
      menuIconURI: icon,
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
          // Working on it (:
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
        //
        {
            opcode: 'getCursor',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Cursor'
        }
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
    currentCursor = '{"cursor":"'+args.url+'","offsetX":'+args.offsetX+',"offsetY":'+args.offsetY+'}';
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
    canvas.style.cursor = args.CURSOR;
    currentCursor = args.CURSOR;
  };

  getCursor()   {
    return currentCursor
  }

  Notice() {
    alert(`Loading a cursor from an image url will use it's full resolution. \nFor example: 256x256px will be MASSIVE! \nI have plans to implement built in resizing but for now you have to maunally resize or use Sharkpools Image extension. 🤗 \n\nSharkpool's extension: \n https://sharkpools-extensions.vercel.app/extension-code/Image-Editor.js \n \n Note: \n Loading from URL will set the cursor block to json formatted like so: \n { \n "cursor":"url",\n"offsetX":offsetX,\n"offsetY":offsetY\n}`);
  }
  
}
Scratch.extensions.register(new OBextendedCursors());

})(Scratch);