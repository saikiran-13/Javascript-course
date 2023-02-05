console.log("Time starts now")
const id = setTimeout(()=>{
    console.log("The reality is real")//after some seconds the functions gets called and execution of inside statements takes place
},5000)
for(let i=0;i<=100;i++){
    if(i===100) console.log("Loop ends now");//this will print after print statement in setinterval gets 4 times(4sec) executed
}
//clearTimeout(id) //this will say to browser no need of this settimeout function delete it
//after every 1 sec gets into callbackqueue and then moves to call stack gets executed but at 5th sec settimeout executes
let count = 1
let interval = setInterval(()=>{
    console.log(Math.random()*10,count)
    count+=1
    if(count===11) clearInterval(interval)
},1000)
//=======================================================================================================
function myfunc1(callback){
    console.log("Task1 executed now call the callback")
    callback()
}
myfunc1(()=>{
    console.log("callback called Task2 executed")
})//===================================================================================================

function addSameData(num1,num2,onSuccess,onFailure){
    if(typeof num1==="number" && typeof num2 === "number")
        onSuccess(num1,num2)
    else
        onFailure()
}
function addTwonumbers(a,b)
{
    console.log(a+b)
}
function errordata(){
    console.log("error")
}
addSameData(+"5",6,addTwonumbers,errordata)
//======================================================================================================
console.log("Time ends now")
