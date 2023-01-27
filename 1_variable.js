var a = 100
var b = "sai kiran"
let x = "simform"
var c = [1,2,3,4,5]
var d = null
var e = undefined
const employee = {156:'saikiran',140:'prabhu kiran',164:'revanth'}//once intialized cant be modified just like tuple in python
console.log("before the block,My name is "+b)//saikiran
console.log("before the block,I am working in "+x)//simform
console.log()
//let can be redeclared within the same block,but var can
{
    var b = "shyam"
    let x = "simform solutions"
    console.log("Inside the block,My name is "+b)//shyam
    console.log("Inside the block, I am working in "+x)//simform solutions
    console.log()
}
//const employee = 0 //if u remove this comment it will throw an error as const can't be modified
console.log("After the block,My name is "+b)//shyam
console.log("after the block, I am working in "+x)//simform
console.log(employee)
