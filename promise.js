let exam  = ["maths","science","english","programming"]
//producing code
let marks = new Promise((resolve,reject)=>{
    if(exam.includes('maths')){
        resolve("I can pass the exam")
    }
    else{
        reject("I cannot pass the exam")
    }
})
//consuming code
marks.then((msg)=>{
    console.log("Hurrah!"+msg)
}).catch((error)=>{
    console.log(error+"Let's try again :(")
}).finally(()=>{
    console.log("Min score to acheive in each subject above 40%")//prints at the last on the console
})

//=========================================================================================================================
//Promise chaining
const promise = Promise.resolve("Simform")
//.then always takes argument as promise and returns a promise
promise.then((value)=>{
    console.log(value)
    value+=" solutions"
    return value //returning promise not string bts "Promise.resolv(value)" if u dont return it will return undefined
}).then((value)=>{
    console.log(value)
    value+=" located in "
    return value
}).then((value)=>{
    console.log(value)
    value+=" Antariksh Colony "
    return value
}).then((value)=>{
    console.log(value)
})

//=====================================================================================================================
const head1 = document.querySelector(".heading1")
const head2 = document.querySelector(".heading2")
const head3 = document.querySelector(".heading3")
const head4 = document.querySelector(".heading4")
const head5 = document.querySelector(".heading5")
const head6 = document.querySelector(".heading")
const head7 = document.querySelector(".heading7")

function myPromise(head,text,color,time){
    return new Promise((resolve,reject)=>{
            setTimeout(() => {
                if (head) {
                    head.textContent = text;
                    head.style.color = color;
                    resolve()
                }
                else {
                       reject("Element not found :(")
                    }
        
            }, time)
        
        })
    }

   //use chaining promises with settimeout 
myPromise(head1,"One","gold",1000)
.then(()=>myPromise(head2,"two","aqua",2000))
.then(()=>myPromise(head3,"three","gray",1000))
.then(()=>myPromise(head4,"four","yellow",10000))//even delay is more it stays until it gets executed and then remaining executes
.then(()=>myPromise(head5,"five","green",1000))
.then(()=>myPromise(head6,"six","red",2000))
.then(()=>myPromise(head7,"seven","blue",1000))
.catch((error)=>{alert(error)})