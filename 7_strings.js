//strings are immutable , you cannot change the letters in the string by indexing 

let nam = "Saikiran"
console.log(nam.length)
console.log(nam.indexOf('k'))//get the index of the given value in the string
console.log(nam[5])
let new_name = 'simform'
console.log(`${nam} is changed to ${new_name}`)//use $ for printing the value of variable and here we used back tick
console.log('Ram\'s height is greater than Rahul')//Here we have used backslash it avoids the single quote  and even length it is not included
// '/r' (carriage return)moves cursor to the beginning of the line. /t for tab
console.log("USA-->'United States Of America'\nISRO --> Indian Space Research Organization")//Here I have escape sequence \n for new line
console.log(nam.toLowerCase())
console.log(nam.toUpperCase())
console.log("printing the index from 2 t0 5 from the string saikiran "+nam.slice(2,6))//start and end in brackets and end is excluded 
//check splice it is used to add and remove elements at particular index in the string
console.log(nam.replace("Sai","prabhu"))
console.log(...nam.concat(" is working in",new_name))//spread operator in js
let nam2 = "           Revanth Rao                "
console.log(nam2.trim())//used to remove the white spaces

console.log("var/'".length)//answer 4
console.log(nam.includes("kiran"))//checks the given word is present in the string nam and returns true or false
let str1 = "The statue of unity is the biggest statue in the world"
str1[4]='fsjfdlk'//It doesnt throw an error and also not updated in the original string because strings are immutable
console.log(str1)//string remains unchanged
let str2 = "I have paid 1000 dollars"
console.log(str2.startsWith("have",2))//the text and the position in the main string
console.log(str2.endsWith("have"))
console.log(str2.slice('I have paid'.length))//applying slice operation to get 1000 dollars
