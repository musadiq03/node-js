// array

const arr = [0,1,2,3,4,5,6,7,8,9]

const arr2 = new Array(1,2,3,5)

console.log(arr[2])

//  array methods 

arr2.push(6)
arr2.push(7)
arr2.pop() // to remove last value in array
arr2.unshift(3) // un shift method add value in start of the array
arr2.shift() // no arrguments pass in shift method unlikely shift method work opposite to unshift mehtod 
console.log(arr2)

console.log(arr.includes(4)) // include is used to find a value in array it's return a boolean value

console.log(arr.indexOf(3))

const newarr = arr.join() // this method is convert array values into string simple method change the datatype

console.log(newarr)

//  slice and splice

const slc = arr.slice(2, 5)

console.log(slc) // slice method copy the values from array but orignal array remain same
console.log("A",arr)

const spl = arr.splice(2,5)
console.log(spl) // In other hand splice extract the values from the array but orignal array minus the extracted 
// values
console.log("B",arr)
