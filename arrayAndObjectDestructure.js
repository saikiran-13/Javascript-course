//Array destructuring

const countries = ["India","Nigeria","China","America","Japan"]
let [country1,country2,,...all]=countries//... means spread operator
console.log(`${country1},${country2},${all}`)

//spread operator in strings
str = "simform"
console.log(...str)//this breaks the string into tokens

//Object Destructuring

const obj1 = {
    name:"saikiran",
    Enroll:156,
    phonenum:5908892054,
    status:undefined,
    getinfo:function (){
        return this.name+" with enroll no "+this.Enroll+" and contact info: "+this.phonenum;
    }
}
console.log(obj1.getinfo())

const obj2 ={
    phonenum:24859375894,
    status:"done",
    caption:"Be here Be vibrant"
}

obj2["Editor"]='Visualstudio'
let newObject = {...obj1,...obj2,key156:null}
console.log(newObject)

//can also create object inside arrays
const store = [{...obj1},{...obj2}]
console.log("these objects are inside the array store",store)

//nested destructuring
const arrayObject = [{name:'helloworld',creator:"hello",run:'world'},
                    {name:'simformsolutions',creator:"simform",run:'solutions'},
                    {name:'Parul University',creator:"parul",run:'University'}]

let [{name:newName,run},,{creator}]=arrayObject//taking name and run in first,skipping second,taking creator in third
console.log("taken from destructure",newName)

