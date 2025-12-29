//  Date

let myDate = new Date("July 20, 09 00:20:18")
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toTimeString())
// console.log(myDate.toUTCString())
// console.log(myDate.getTimezoneOffset())


//  Date and time in different formats

// let myCreatedDate = new Date(2025, 0, 23)
// console.log(myCreatedDate.toDateString())

// let myCreatedDate = new Date(2025, 0, 23, 12, 3)
// console.log(myCreatedDate.toLocaleDateString())

// let myCreatedDate = new Date(2025, 0, 23, 1, 3)
// console.log(myCreatedDate.toLocaleString())

let myCreatedDate = new Date("01-03-2025")
console.log(myCreatedDate.toLocaleString())

let timeStamps = Date.now()

console.log(timeStamps)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()

console.log(newDate.getDay())
console.log(newDate.getMonth()+1)

console.log(newDate.toLocaleString('USA',{

    weekday : "short",
    hour : "numeric",
    minute : "numeric"
}))