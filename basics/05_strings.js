const name = "Ali"
const fileCount = 5

console.log(name + fileCount + " Good")
//  use backticks (``) to perform string interpolation in java sript
// This syntax is easy readable and reliable than concatenate method

console.log(`hello my name is ${name} and i done ${fileCount} files`);

// To delcalre string by use string function for explore more string methods like (split, )

const newstg = new String('Musadiq-Ali')

// Key value access 
console.log(newstg[0])
console.log(newstg[4])
// end example of Key value access 

// console.log(newstg.__proto__)

// Use different prototype methods of string 

console.log(newstg.length)  // There lenght is not function is also object value 

console.log(newstg.toUpperCase())

console.log(newstg) // In consol output you see the result that orginal value of newstg not change its
                   // behaviour such a good example of heap or non-primitive data type
console.log(newstg.charAt(3));
console.log(newstg.indexOf('a'))

// To create sub-string of main or existing string use Substring method

console.log(newstg.slice(-9,6)) // In slice method user use minus value but in sub-string you are not.

const substg = newstg.substring(0,4)
console.log(substg)

const space = "     ALI   "
console.log(space.trim())

console.log(newstg.replace('A','T')) // for replace char from strings
console.log(newstg.includes('usa')) // for search IS char or word in tha string

console.log(newstg.split('-'))

//  toWellformed method use convert unicode in URI to srtable string
const unicode = "https://example.com/search?q=\uD800";
console.log(unicode.toWellFormed())
console.log(encodeURI(unicode.toWellFormed()));

// End Example of toWellformed

// Read and prectice other string methods with MDN website