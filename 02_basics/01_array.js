//Arrays
let arr1 = [1,2,3,4,5,6]
let arr2 = ["thor", "flash", "hulk"]

console.log(arr1);
console.log(arr1.push(7));      //add a element in array at last
console.log(arr1);
console.log(arr1.push(8));      //add a element to array at last
console.log(arr1);
console.log(arr1.pop());        //remove a element from array from last
console.log(arr1);
console.log(arr1.pop());        //remove a element from array from last
console.log(arr1);

//shift and unshift should not be used mostly
console.log(arr1.unshift(0))        //add element to start of array
console.log(arr1);
console.log(arr1.shift());          //remove element from start
console.log(arr1);

let newArr = arr1.join()        //join function will convert the whole array to string
console.log(arr1);
console.log(newArr);


//slice and splice function in array
console.log(arr1.slice(1,3));       //slice will get a copy of element from the given start index up to given last index-1
console.log(arr1);
console.log(arr1.splice(1,3));      //splice will get/remove a elements from array and array will changed and it includes the range 
console.log(arr1);




