# Extra Array

### Description
Some Misc Tools For Handling Arrays!
#### Plans
Just to add stuff as I need it really...
# Contents

- [Search Array](#search-array)
- [Contains Only?](#contains-only)
- [Insert Every](#insert-every)
- [Count Occurrences](#count-occurrences)
- [#Pop]()
# Blocks

#### Search Array
Search an array for a certain query!

`Reporter`

<img alt='Search ["Wanda","Wally","Waldo","Willy","Wario","Waldo & co","Waluigi"]' src="Images/extraArray/searchArray.svg">

Returns:
```json
["Waldo","Waldo & co"]
```

#### Contains Only?
Check if an array only contains a certain query

`Boolean`

<img alt='"["yes","yes","yes"]" contains only: "yes"?' src="Images/extraArray/containsOnly.svg">

Returns:
```
true
```

#### Insert Every
Insert an item every `[number]` of items in an array

`Reporter`

<img alt='Insert "---" every "1" items in: "["header","body","footer"]"' src="Images/extraArray/insertEvery.svg">

Returns:
```json
["header","---","body","---","footer","---"]
```

#### Count Occurrences
Return the number of occurrences of a certain query in an array

`Reporter`

<img alt='# of "I" in "["T","E","A","M"]"' src="Images/extraArray/countOccurrences.svg">

Returns:
```number
0
```

#### Pop
Removes the last item in an array Or the last character of a string.

`Reporter`

<img alt='pop: "["😭","🎈"]"' src="Images/extraArray/popThis.svg">

Returns:
```json
["😭"]
```