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
    console.log("Min score to acheive in each subject above 40%")
})
