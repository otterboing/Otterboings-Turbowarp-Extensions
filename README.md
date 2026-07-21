# Extensions <img width="32"  src="Extra%20Files/guy.png" />


A collection of all my Turbowarp extensions! <a href="https://otterboing.neocities.org/extensions" target="_blank"><img width="32" title="yippee" src="Extra%20Files/guy2.png" /></a>

It's a bit small right now but the stash will grow bigger!

# Docs
[Documentation](Docs/Docs.md)

## <img width="24" alt="⚠" src="Extra%20Files/Warning.png" />  Warning! <img width="24" alt="⚠" src="Extra%20Files/Warning.png" />
I don't know what I'm doing!

**Updates may break things, always backup your project.**


---

## Sandboxed Extensions

Extensions run with the Sandbox enabled will be much slower or may not work at all!

<sub>Additionally any buttons probably won't work.</sub>

#### Un-sandboxed extensions:

- [Cursors-Extended ![](Extra%20Files/UnSandboxed!.png)](Extensions/Cursors-Extended.js) - Requires JS to change the Scratch Canvas's CSS.
- [Inline Variables ![](Extra%20Files/UnSandboxed!.png)](Extensions/InlineVariables.js) - Requires JS to manage the variables.
- [HTML ![](Extra%20Files/UnSandboxed!.png)](Extensions/HTML.js) - Requires JS to manage and edit the DOM.
- [Marked In Turbowarp ![](Extra%20Files/UnSandboxed!.png)](Extensions/markedInTurbowarp.js) - Requires JS to add and use [marked.js](https://marked.js.org).


# Glossary

#### Contents

<!-- <img title="Fav!" width="24px" height="24px" src="Extra%20Files/StarExtra.png"> -->
<!-- <img title="NEW!" alt="New!" width="24px" height="24px" src="Extra%20Files/NEW!.png"> -->
<!-- <img title="Update!" alt="Update" width="48px" height="24px" style="margin-left: 5px;" src="Extra%20Files/Update.png"> -->

- [Small-Math](#small-math)
- [Cursors-Extended](#cursors-extended)
- [Colorful Comments!](#colorful-comments)
- [Inline Variables <img title="Fav!" width="24px" src="Extra%20Files/starExtra.png">](#inline-variables)
- [Extra Array <img title="Update!" alt="Update" width="48px" height="24px" style="margin-left: 5px;" src="Extra%20Files/Update.png">](#extra-array)
- [HTML <img title="Fav!" width="24px" src="Extra%20Files/starExtra.png"><img title="Update!" alt="Update" width="48px" height="24px" style="margin-left: 5px;" src="Extra%20Files/Update.png">](#html-)
- [Marked In Turbowarp <img title="NEW!" width="24px" height="24px" src="Extra%20Files/NEW!.png">](#marked-in-turbowarp-)

---


### Small-Math
[smallMath](Extensions/smallMath.js)

Math blocks minified to hopefully be smaller than other extensions. _(in the block editor not code)_

It's also got some blocks for checking distances and collisions.


#### Blocks:
- Math: `[input1] [+,-,*,/] [input2]`
- Compare: `[input1] [>,<,==,===,>=,<=] [input2]`
- Math and Compare: `[input1] [+,-,*,/] [input2] [>,<,==,===,>=,<=] [input3]`
- Get Greater Or Lesser of: `[input1] [>,<] [input2]`
- Distance between: `[input1] & [input2]`
- Distance between: `[x1] [y1] & [x2] [y2]`
- z within **x** & **y**?: `[z] within [x] [y]?`
- **x y** within **a b** & **c d**?: `[x] [y] within [a] [b] & [c] [d]?`

### Cursors-Extended
[Cursors-Extended](Extensions/Cursors-Extended.js)

An alternative to the [Mouse Cursors Extension](https://github.com/TurboWarp/extensions/blob/master/extensions/cursor.js)

Allows for setting the mouse cursor to any of the built in cursors in the browser or from a URL.

#### Blocks:
- Set Cursor to: `Set cursor to: [every browser cursor; I ain't writing all that]` "Sets the cursor style of `Scratch.renderer.canvas` to a certain cursor."
- Set cursor from URL: `Set cursor from URL: [url]` "Sets the cursor style of `Scratch.renderer.canvas` to an image fetched from a url."
- Cursor: `Returns the currentCursor` "👈."

### Colorful-Comments!
[Colorful Comments!](Extensions/Colorful%20Comments!.js)

A colorful way to keep your project organized! 

#### Blocks:
- Hat `[comment]`
- Command `[comment]`
- Conditional `//_ [comment]`
- Reporter `[comment] ⇠// [input]`
- Boolean `[comment] ⇠// [input]`

### Inline Variables
[Inline Variables](Extensions/InlineVariables.js)

Reference variables in a string and replace them with their value!

#### Blocks:

- Set Shared Var: `Set [global,sprite,script] var:[variableName] to:[value]`
- Delete Shared Var: `Delete [global,sprite,script] var: [variableName]`
- Delete All Shared Vars: `Delete [all, all global, all sprite, all script] vars`
- Delete Sprite Var: `Delete sprite var: [variableName] in: [spritesList]`
- Delete All Sprite Vars: `Delete all sprite vars in: [spritesList]`

<br>

- : `[string]` "Searches the input for references to any variables and replaces them with their values."
- Get Shared Var: `[global, sprite, script] Var:[variableName]`
- Get All Shared Vars: `All [global, sprite, script] Variables as [json, names(array)]`
- Get Sprite Var: `Sprite var: [variableName] of [spritesList]`

<br>

Thread:

- Set Thread Var: `Set var: [variableName] to: [value]`
- Get Thread Var: `Var: [variableName]`
- Get Thread String: `[string]`

<br>

Both:

- Get String All: `[string]`

### Extra Array
[Extra Array](Extensions/extraArray.js)

Some Misc Tools For Handling Arrays!

#### Blocks:

- Search Array: `Search [array] for [query]` "Searches an array for a certain query!"
- Contains Only?: `[array] contains only [query]?` "Checks if an array only contains a certain query."
- Insert Every: `Insert [input] every [number] items in [array]` "Inserts an item every `number` of items in an array."
- For Array Insert At Start/End: `For array: [array] at: [start,end] insert: [string]` "For each item in the array insert a string at the start or end."
- For Array Insert At Index: `For array: [array] at index:[index] insert: [string]` "For each item in the array insert a string at the index in the item's characters."
- Count Occurrences: `# of [query] in [array]` "Return the number of occurrences of a certain query in an array."
- Pop: `Pop: [array]` "Removes the last item in an array Or the last character of a string."

Advanced:

- Parse into JS object: `Parse: [JSON or array] into JS object` "Returns a JS object parsed from the input."
- Stringify JS Object: `Stringify JS object: [JSON or array]` "Returns JSON or array as a string from an input JS object."

### Marked In Turbowarp <img title="NEW!" alt="NEW!" width="24px" height="24px" src="Extra%20Files/NEW!.png">
[Marked In Turbowarp](Extensions/markedInTurbowarp.js) see [Marked.js](https://marked.js.org)

Parse markdown into html!

Uses https://marked.js.org https://github.com/markedjs/marked

#### Blocks:

- Parse: `Parse: [markdown]`
- Parse Inline: `Parse inline: [markdown]`

### HTML <img title="NEW!" alt="NEW!" width="24px" src="Extra%20Files/NEW!.png">
[HTML](extensions/HTML.js)

Add, remove, modify and style elements on the page based on selectors!

HTML Sanitized by [DOMPurify](https://github.com/cure53/dompurify)

#### Blocks:

- Insert HTML: `Insert html: [html] in: [selector] at: [Before, At start, Before end, After]`
- Remove Element: `Remove selector: [selector] #:[index] from page`
- Remove All: `Remove all matching selector:[selector] from page`
- Count Elements: `Count [selector]`

<br>

- Set Inner HTML: `Set inner html of [selector] #:[index] to: [html]`
- Set Inner HTML All: `Set inner html of all matching selector: [selector] to: [html]`
- Get Inner HTML: `Get inner html of [selector] #:[index]` "Returns the inner html or text of the requested element."

<br>

- Set Outer HTML: `Set outer html of [selector] #[index] to: [html]`
- Set Outer HTML All: `Set outer html of all matching selector: [selector] #[index] to: [html]`
- Get Outer HTML: `Get outer html from selector: [selector] #[index]`

<br>

- Set Value: `Set value of selector: [selector] #:[index] to: [value]`
- Set Value All: `Set value of all matching selector: [selector] to: [value]`
- Get Value: `Get value of selector: [selector] #:[index]`

<br>

- Focus Blur: `[Focus,Blur] selector: [selector] #:[index]`
- Show Hide: `[Hide, Show] selector: [selector] #:[index]`
- Show Hide All: `[Hide, Show] all matching selector: [selector]`

<br>

- Get Status: `Selector: [selector] #[index] [Hovered, Clicked, Focused, Visible, Exists, Checked]?` "Checked refers to html inputs with the type 'checkbox' or 'radio'. Others may also apply."
- Get Status All: `Any of selector: [selector] [Hovered, Clicked, Focused, Visible, Exists, Checked]?`
- Matches: `Selector: [selector] #:[index] matches selector: [query-selector]`
- Matches All: `Any matching selector: [selector] matches selector [query-selector]`
- Get Dimensions: `[Width, Height, Top, Left, Bottom, Right] of selector: [selector] #:[index]`

<br>

- Mouse Down: `Mouse down?` "Returns a boolean based on if the document html matches the selector `:active:hover`"
- Mouse Position: `Mouse [x,y]` "Returns the mouse position on the page."
- Mouse Position In Element: `Mouse [x,y] in selector: [selector] #:[index]` "Returns the mouse position clamped and mapped to the element's dimensions."
- Attribute of Last: `Attribute: [attribute] of last [clicked, double clicked, hovered] element`
- All Attributes of Last `All attributes of last [clicked, double clicked, hovered] element` "Returns all attributes of the last clicked, double clicked or hovered element as Json."

<br>

- Change Classes: `[Add,Remove] classes: [string separated by commas or array] in selector: [selector] #:[index]`
- Change Classes All: `[Add,Remove] classes: [string separated by commas or array] in all matching selector: [selector]`
- Get Classes: `Get classes of selector: [selector] #:[index]` "Returns all the classes of the selector as an array."
- Get Classes All: `Get classes of all matching selector: [selector]` "Returns all the classes of all matching the selector in an array of arrays."

<br>

- Set Attribute: `Set attribute: [attribute] of: [selector] #:[index] to: [value]`
- Set Attribute All: `Set attribute: [attribute] for all matching selector: [selector] to: [value]`
- Remove Attribute: `Remove attribute: [attribute] from selector: [selector] #:[index]`
- Remove Attribute From All: `Remove attribute: [attribute] from all matching selector: [selector]`
- Get Attribute: `Get attribute: [attribute] from selector: [selector] #:[index]`

<br>

- Set Attributes From JSON: `Set attributes from JSON: [json] for selector: [selector] #[index]`
- Set Attributes From JSON All: `Set attributes from JSON: [json] for all matching selector: [selector]`
- Remove Attributes Using Array: `Remove attributes in ARRAY: [json] from selector: [selector] #:[index]`
- Remove Attributes Using Array All: `Remove attributes in ARRAY: [json] from all matching selector: [selector] #:[index]`

<br>

- Get Attribute: `Get attribute: [attribute] from selector: [selector] #:[index]`
- Get Attribute From All: `Get attribute: [attribute] from all matching selector: [selector]` "Returns an array of the attribute values from all matching the selector."
- Get All Attributes: `Get all attributes from selector: [selector]` "Returns a JSON object with all the attributes."
- Get All Attributes From All: `Get all attributes from all matching selector: [selector]` "Returns an array of all elements"

<br>

- Set Page Title: `Set page title: [title]`
- Get Page Title: `Page title` "Returns the page title from `document.title`"
- Set Page Icon: `Set page icon to url: [url]`
- Get Page Icon: `Page icon` "Returns the last set page icon. It will return nothing if the icon has not been set yet."

<br>

- Sanitize: `Sanitize: [html]` "Allows the user to use the sanitize function from [DOMPurify.js](https://github.com/cure53/dompurify)"

<br>

- Set StyleSheet: `Set StyleSheet with id:[id] to css: [css]`
- Remove StyleSheet: `Remove StyleSheet with id:[id]`
- Remove All StyleSheets: `Remove All StyleSheets`
- Get StyleSheet: `StyleSheet: [id]` "Returns the requested StyleSheet"
- Get All StyleSheets: `All StyleSheets` "Returns an array of all StyleSheets"

<br>

- Import StyleSheets: `Import StyleSheets from: [json]` "Import StyleSheets from a JSON input where the key is the ID and the value is the CSS."
- Export StyleSheets: `Export StyleSheets` "Returns all StyleSheets as JSON where the keys are the ID and the values the CSS."

<br>

- Set Style: `Set style: [style] of: [selector] #:[index] to: [value]`
- Set Style All: `Set style: [style] of all elements matching: [selector] to: [value]`
- Get Style: `Style: [style] of: [selector] #:[index]`

---
---
---

## <img width="24" alt="🚫" src="Extra%20Files/X.png"/> Anti-AI <img width="24" alt="🚫" src="Extra%20Files/X.png"/>
These extensions and all associated files are made by me(Otterboing) or other **real** human beings.

NO AI was knowingly used in the creation of these extensions.

There has been an a great effort to find and use sources not linked to "AI".

"No part of these files are to be used in the process of training or as the training data for Neural Networks or LLMs (Large Language Models)"

See [NoBots.md](NoBots.md) for more details.

---

# License

All code and extensions are licensed under the [MIT License](LICENSE) unless marked otherwise.

Some assets in this repo belong to others and are licensed as such. 

Please read the license info of the assets you are using.

## MIT License

Below is a copy of the MIT License, please use [LICENSE](LICENSE) instead.

---

MIT License

Copyright (c) 2026 OtterBoing

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
