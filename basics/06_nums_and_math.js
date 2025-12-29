const num = 400
console.log(num)
const bal = new Number(500.658)
console.log(bal)

console.log(typeof(bal.toString()))
console.log(bal.toString().length)
// Tofixed is used to show value after decimel point 
console.log(bal.toFixed(2))

const other_num = 24.53242
//  toPrecision is used to show total value in given number
console.log(other_num.toPrecision(3))

const num2 = 100000

console.log(num2.toLocaleString())
console.log(num2.toLocaleString('en-IN'))


// ============================ Maths================================
console.log("++++++ Now we begain to practice Math Class from there ++++")

console.log(Math.abs(-3))

console.log(Math.round(4.6))

console.log(Math.ceil(5.6))

console.log(Math.floor(4.6))

console.log(Math.min(4, 5.1,9,0))

console.log(Math.max(4, 5.1,9,0))

console.log("Use random method of Math class")

console.log(Math.random())
console.log(Math.random()*10)
console.log(Math.floor(Math.random()*10) + 1)

const min = 10
const  max = 20

// this line generate output random numbers range 10-20 
console.log(Math.floor(Math.random() * (max - min + 1))+ min)

