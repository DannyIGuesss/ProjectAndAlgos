// Push Front
//Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!
//Examples:



//Answer

// const pushFront = (arr, newVal) => {
//     for(let i = arr.length -1; i>=0; i--) {
//         arr[i + 1] = arr[i]
//     }
//     arr[0] = newVal;
//     return arr
// }

// console.log(pushFront([5,7,2,3], 8))
// console.log(pushFront([99], 7))


//Pop Front

//Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!

//Answer

// const popFront = (array) => {
//     const firstValue = array [0]

//     for(let i = 0; i < array.length -1; i++) {
//         array[i] = array[i + 1]
//     }

//     array.length--
//     console.log(firstValue);
    
//     return array
// }

// console.log(popFront([0,5,10,15]));

// INSERT AT

//Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!

//insertAt([100,200,5], 2, 311) => [100,200,311,5]
//insertAt([9,33,7], 1, 42) => [9,42,33,7]

//Answer

//write a function that takes in three parameters

// const insertAt = (arr,index,value) => {
//     for(let i = arr.length - 1; i >= index; i--) {
//         arr[i + 1] = arr[i]
//     }

//     arr[index] = value

//     return arr
// }

// console.log(insertAt([100,200,5], 2, 311));
// console.log(insertAt([9,33,7], 1, 42));

// BONUS RemoveAt 

// Given an array and an index into array, remove and return the array value at that index. Prove the value is removed from the array by printing it. Think of popFront(arr) as equivalent to removeAt(arr,0).

// Examples:

// removeAt([1000,3,204,77], 1) => 3 returned, with [1000,204,77] printed in the function
// removeAt([8,20,55,44,98], 3) => 44 returned, with [8,20,55,98] printed in the function

//Answer 

// const removeAt = (arr, index) => {
//     const removedItem = arr[index]
//     for(let i = index; i<= arr.length - 1; i++) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1]
//     }
//     arr.length--
//     console.log(removedItem);
//     return arr
// }

// console.log(removeAt([1000,3,204,77], 1));
// console.log(removeAt([8,20,55,44,98], 3));

//Bonus Swap Pairs

//BONUS: Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element.

// Examples:

// insertAt([1,2,3,4]) => [2,1,4,3]
// insertAt(["Brendan",true,42]) => [true,"Brendan",42]

//Answer

// const insertAt = (arr) => {
//     for() {

//     }
//     return arr
// }
// console.log(insertAt([1,2,3,4]));