# Inline Variables
---
### Description
Inline Variables allows you to define variables and reference them in a string.
#### Plans:
I hope to add the ability to set variables within the string at some point, as well as do some math operations.

# Contents
---

##### Sharing
- [[#Set Variable]]
- [[#Delete Variable]]
- [[#Get Variable]]
- [[#Get String]]
##### Legacy

- [[#Set Thread Variable]]
- [[#Get Thread Variable]]
- [[#Get Thread String]]

---
## Variables

- **Global:** Available to every Sprite and Thread.
- **Sprite:** Available to every Thread within the Sprite it was defined in.
- **Thread:** Available to the Thread it was defined in. Works with [TempVars](https://extensions.turbowarp.org/Lily/TempVariables2.js) by [LilyMakesThings](https://scratch.mit.edu/users/LilyMakesThings/)!

# Blocks
---
#### Set Variable:
Defines a `global`, `sprite` or `thread` [[#Variables|variable]].

`Command`

![[setVar.svg]]

#### Delete Variable
Deletes the requested `global`, `sprite` or `thread` [[#Variables|variable]].

`Command`

![[deleteVar.svg]]

#### Get Variable
Returns the requested `global`, `sprite` or `thread` [[#Variables|variable]].

`Reporter`

![[getVar.svg]]

#### Get String
Takes an input string and returns it with all referenced variables replaced by their values.

Variables are case sensitive.

The string replaces variables in the order they're defined and in groups using this order: 
`Thread`, `Sprite` then `Global`.

`Reporter`

![[getString.svg]]

### <img src="stringIcon.png" width="20px" style="transform: rotateY(180deg)"> Legacy  <img src="stringIcon.png" width="20px">
These blocks are from the previous version. I've kept them un-hidden cuz they're still kinda useful. 
I also gave them a unique Icon!

#### Set Thread Variable
Defines a thread [[#Variables|variable]].

`Command`

![[setThreadVar.svg]]

#### Get Thread Variable
Returns the requested Thread [[#Variables|variable]].

`Reporter`

![[getThreadVar.svg]]

#### Get Thread String
Takes an input string and returns it with all referenced Thread variables replaced by their values.

`Reporter`

![[getThreadString.svg]]