const heros = ["Spiderman","ironman", "thor"]
const dc_heros = ["Ali", "Haseeb","Bilal"] 

//heros.push(dc_heros)

//console.log(heros[3][1])
 const concat_heros = heros.concat(dc_heros,heros,dc_heros) // concatenate mehtod merge  more than one array
// console.log(concat_heros)

const All_heros = [...heros, ...dc_heros, ...heros] // this spread operator merge more than one array also abjects
// console.log(All_heros)

const an_array = [1,2,3,[4,5,6],7,8,[9,10,11,[12,13,14,15]]]

const flat_array = an_array.flat(Infinity)

console.log(flat_array)

console.log(Array.isArray("ali"))
console.log(Array.from("Ali"))
console.log(Array.from({name : "Haseeb"})) // In this line from method did't judge convert a key or value
// of an object

let score1 = 100 
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

// learn more about inArray , from and of method of array