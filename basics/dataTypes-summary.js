// There are two catagory in data types on the basis of how save and fetch data from memery like save or fetch data
// by value OR save or fetch data by reference

// Primitive (These are call by values data types when you copy these data type value then whole data copy not 
// there refernce)

// 7 types : String, Number, Boolean, null,  undefined, Symbol, BigInt 

const score = 100
const scoreValue = 33.9

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// Symbol return the different value or unique value
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)
// non-primitive (call by Reference) 

// Array, Objects, Functions

const names = ["ali", "haseeb", "mustaffah", "choti bahni"]

console.log(names[0])

let obj = {
        name : "ali",
        age : 23,

}

const myFunction = function(){
 
    console.log("Ali")

}

// Read typeof operator in detail from ecma doumentation 