# search-in-array

A Node.js package to search for an element in a sorted array using the binary search algorithm, with a time complexity of O(log n).

## Installation

You can install the package via npm:

```bash
npm install @sanketm09/search_in_array


## Usage

```javascript
const searchInArr = require("search-in-array09");

let arr = [4, 5, 6, 8, 9, 13, 16, 22];
let m = 9;

console.log(searchInArr(arr, m)); // Output: Index of element 9 in the array
