console.log("first statement")
setTimeout(function cb(){
console.log("It is callback function takes 5sec");
},5000)
console.log("next statement")

//blocking the main thread for 15 sec for creating an environment of million lines of code
var current = new Date().getTime()//It converts our time to milliseconds taken from the date
var desired = current
while(desired < current + 15000){//setting the desired time for 15sec(in ms) from now 
    desired = new Date().getTime()
}
//Even though the callback timer expires after 5sec it will wait until the main thread(GEC) get removed from the call stack and after
//that it enters into callstack and get executed
console.log("Now the callback function gets printed")