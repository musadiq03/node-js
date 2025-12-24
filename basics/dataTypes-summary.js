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

console.log(obj.age)

const myFunction = function(){
 
    console.log("Ali")

}

// Read typeof operator in detail from ecma doumentation 

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// memory type like {Stack for (Primitive) datatypes and Heap for (Non-primitive) datatypes }

//  In stack if you assign value to other varibale system copy the value and save to other variable location

//  In other hand in Heap if you assign value to other variable system copy the reference number and save
//  other variable location

//  Stack Example

let Name = "Ali"

let FullName = Name

FullName = "Musadiq Ali"

console.log(Name)
console.log(FullName)
 
// Heap Example

let user = {

    email : "musadiq2ali@gmail.com",
    id : "ali03"
}

let userTwo = user

userTwo.email = "03musadiq@gmail.com"

console.log(user.email)
console.log(userTwo.email)