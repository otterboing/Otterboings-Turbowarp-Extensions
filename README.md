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


# Glossary

#### Contents

- [Small-Math](#small-math)
- [Cursors-Extended](#cursors-extended)
- [Colorful Comments!](#colorful-comments)
- [Inline Variables <img title="Fav!" width="24px" src="Extra%20Files/starExtra.png">](#inline-variables)
- [Extra Array <img title="NEW!" alt="NEW!" width="24px" src="Extra%20Files/NEW!.png">](Extensions/extraArray.js)

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

>Basically a less intrusive join block.

#### Blocks:
- Set var: `Set var:[variableName] to:[value]`
- Var: `Var:[variableName]` "Returns the value."
- : `[string]` "Searches the input for references to any variables and replaces them with their values."

### Extra Array <img title="NEW!" alt="NEW!" width="24px" src="Extra%20Files/NEW!.png">
[Extra Array](Extensions/extraArray.js)

Some Misc Tools For Handling Arrays!

#### Blocks:
- Search Array: `Search [array] for [query]` "Searches an array for a certain query!"
- Contains Only?: `[array] contains only [query]?` "Checks if and array only contains a certain query."
- Insert Every: `Insert [input] every [number] items in [array]` "Inserts an item every `number` of items in an array."
- Count Occurrences: `# of [query] in [array]` "Return the number of occurrences of a certain query in an array."
- Pop: `Pop: [array]` "Removes the last item in an array Or the last character of a string."

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
