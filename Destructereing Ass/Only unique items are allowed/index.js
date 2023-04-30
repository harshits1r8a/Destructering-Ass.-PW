"use strict"
const arr = [1,2,2,3,4,1,5,2,5,6,8,5,9,2,6];
console.log(arr);

function removeDuplicate(Arr) {
    return new Set(Arr)
}

console.log(removeDuplicate(arr))