# BigO of arrays can vary depending on what methods are used and where they are used IN the array

## Push() to the end of an array is O(1) because its one simple operation to add to the end of an array

- if you try to add to the <strong>beginning or middle</strong> of the array, you have to have an operation done for each index after where it was added because they move to the right.

- the closer to the 0 index and the longer the array, the more costly the operation becomes

- adding to anywhere other than last index, is roughly O(n) complexity

- push() and pop() (add and remove last element )are ALWAYS faster that shift() and unshift() (add or remove first element)

### The above is also true for <strong>REMOVING</strong> an item from an array

<br/>
<br/>

## Searching an array is O(n)

- like finding out if something exists in the array

<br/>

## Accessing an index anywhere in an array is always O(1)

- like seeing what the first, second or last index is
