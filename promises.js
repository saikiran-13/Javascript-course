// promise is an object that contains 3 states and accept two parameters (resolve,reject) ex;imageload,url fetch etc...
// pending:intital state neither fullfilled or rejected,contains the placeholder undefined 
// fulfilled;successful completion of an asynchronous event
// rejected:failure of an asynchrous event
// resolve method calls .then that contains a callback function to register the callbacks of successful Events
// similarly resolve method calls .catch that contains a callback function to register the failure asynchrous events
// also have chained promises like nested promises normally u can go to another promise if particular promise is taking time
// error handling is also important, mostly error occurs it it takes more time take care of it

let img = new Promise((resolve,reject)=>{
    image = "this contains important info "
    if(image.includes('important')){
        resolve('Mission successful')
    }
    else{
        reject("Mission failed")
    }
})

img.then((message) => {
    console.log("Finally done"+message)
}).catch((err)=>{
    console.log(err+"something went wrong...")
})

//================================================================================================================================
//Exectuing promise concept without using promise

let drivebike = false;
let drivecar = false;
function drive(cannotdrive,candrive){//kind of resolve and reject
    if(drivebike){
        candrive({vehicle:"Bike",
        status: "can drive"})//when drivebike is true candrivefunc returns entire definition to fun call success and printing it
    }
    else if(drivecar){
        candrive({vehicle:"Car",//when drivecar is true candrivefunc returns entire definition to fun call successand printing it
        status:"can drive"
    })}
     //The above two can be treated as resolve 
    else{
        cannotdrive({vehicle:undefined,
        status:"congratulations, U can walk....."
    })}
    //the above one can be treated as reject
    
}

drive((failure)=>{console.log(failure)},(success)=>{console.log(success)})//here success .then,failure .catch
//==========================================================================================================
setTimeout(()=>{
    console.log("This is a settimeout function")
},1000)//even u give delay 0 it will get printed at last as it is present in the callbackqueue
//========================================================================================================================
//Doing the above with the promises
console.log("\nDoing it with promises\n")
function newdrive(){
    return new Promise((resolve,reject)=>{
        if(drivebike){
            resolve({vehicle:"Bike",
            status: "can drive"})
        }
        else if(drivecar){
            resolve({vehicle:"Car",
            status:"can drive"
        })}
        else{
            reject({vehicle:undefined,
            status:"congratulations, U can walk....."
        })}
    })

}
    
newdrive().then((success)=>{
    console.log(success)
}).catch((failure)=>{
    console.log(failure)
}
)
//In the output (promise1 img registered in microtask queue)first the function created without promise get displyed and console.log statement
// printed now (promise2 newdrive registers in microtask queue) ,promise1 printed and the promise2 printed
//===================================================================================================================================

const promise1 = new Promise((resolve,reject)=>{
    resolve("This is the first promise")
})

const promise2 = new Promise((resolve,reject)=>{
    resolve("This is the second promise")
})

const promise3 = new Promise((resolve,reject)=>{
    resolve("This is the third promise")
})

Promise.all([
    promise1,promise2,promise3//if use race keyword then it gives the first occurence of thre resolve
]).then((msg)=>{
    console.log(msg)
})
