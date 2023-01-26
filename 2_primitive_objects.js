//primitive --> 7 Fundamenetal datatypes
//nn ss bb u
let a = null
let b = 156
let c = "saikiran"
let d = Symbol("Be here Be Vibrant")
let e = BigInt("164") + BigInt("140")
let f = false//THis can be true also
let g = undefined
console.log(a,b,c,d,e,f,g)
console.log(typeof(e))//TO check the type of the data

//Objects --> Non-primitive data types,key-value pairs,associative array,kinda dictionaries in python
const marvel={"Captain-America":"steve rogers","Ironman":"RDJ","Avengers":6,"Thanos":undefined}
const college={name:"parul",branch:"cse",caption:"Be here Be Vibrant",state:"Gujarat"}
console.log(marvel["Ironman"],marvel["Avengers"])
console.log("before adding and chaging key value pairs...   ",marvel)
marvel["spiderman"]="tom maguire"
marvel["hawkeye"]=12
console.log()
//there will be no error in const marvel because by using const it acts as reference to the object marvel so u can change key-value pairs
//marvel = 3//remove comment->error,changing the dataype will cause error
console.log("After applying the changes  ",marvel)
console.log(college)
