//Two ways to declare the function one by using function keyword and two by arrow function
const wish = ()=>{
    console.log("Good morning")
}
function find_odd_even(a){
    if(a%2==0){
        return "It is an even number"
    }
    else if(a%2!=0){
        return "It is an odd number"
    }
}

const cube = (y)=>{
    return y**3;
}

let x = 10;
let y = 7;
wish()
console.log(find_odd_even(x))
console.log("The cube of the ",y," is ",cube(y))