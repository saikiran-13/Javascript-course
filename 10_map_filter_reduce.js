temp = [4324,6543,234,76,123,167]

//map is used to create the new array by performing some operation on the given content same for foreach also
let array = temp.map((value,index,temp)=>{
    console.log(index,value,temp)
    return value+index
})
console.log(array)

//filter is used to create a new array based on the given condition kinda filtering the elements
let even_array = temp.filter((element)=>{
    return element%2==0?element:null
})
console.log(even_array)

//reduce is used to reduce the array to a single value based on the function given inside it
function add_two_values(a,b){//takes 2 elements from the start and add them new value becomes a and next value becomes b continues till end
    return a+b
}
let output = temp.reduce(add_two_values)//writing function inside another function
console.log(output)

/*//Run this one in console to guess the number
let ran = Math.random()*5//generting a random number til 5
ran = Number.parseInt(ran)
console.log(ran)
do{
user = prompt("Enter a number ")
user = Number.parseInt(user)
if(ran==user){
    console.log("correct!!,You have won the game")
}
else if(ran>user){
    console.log("The number is greater than you have entered")
}
else if(ran<user){
    console.log("The number is lesser than you have entered")
}
else{
    console.log("Please enter the valid data")
}
}while(ran!=user)
alert('Goodbye')*/


