//loops --> for,for in,for of,while,do-while

//program to add first 100 even numbers
let even_sum = 0
for(let i = 0;i <= 100;i+=2){
    console.log(i)
    even_sum+=i
}
console.log("The sum of all even numbers till 100 is "+even_sum)

const avengers = {ironman:"tonystark",hulk:"banner",natasha:"scarlett"}
for(let a in avengers){
    console.log("The role of "+a+" is done by "+avengers[a])
}
for (let a of "avengers"){
    console.log(a)
}

//while loop
//let n = prompt("Enter the number")
//n = Number.parseInt(n)
let n = 55
let i = 0
let sum = 100
while(i<n){
    sum+=i
    i++
}
console.log("printing the sum by using while loop is ",sum)

//do while loop
let x=10
do {
    console.log("the value of x is",x)
} while (x>10);

//creating student marks as object and printing results of each student using a function
const marks = {
    saikiran:9,
    revanth:9.2,
    prabhu:8.8,
    bhaskar:8.9
}
const find_results = (mark)=>{
    return marks[mark]
}

for(let i=0;i<Object.keys(marks).length;i++){
    console.log("The marks scored by "+Object.keys(marks)[i]+" is "+ marks[Object.keys(marks)[i]]+" by using for loop")

}

for(let mark in marks){//priniting using for in loop
    console.log("The marks scored by "+mark+" is "+ find_results(mark))
}

/*
//try to run in the console this will continously run until u execute the correct number
let correct_num = 156
let i = prompt("enter the correct number")
while(i!=correct_num){
    i=prompt("The number is invalid enter the correct num")
}
console.log("you have entered the correct number")
*/