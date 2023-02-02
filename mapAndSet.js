arr = [1,2,3,4,54,44,4,44,3,2,9,1]

//Set
let s = new Set(arr)
console.log(s)
s.add(34)
console.log(s)
console.log(s.has(54))

//Map data structure
let m = new Map()//Adding key,value pairs in map
m.set('Todaytask','Done')
m.set('Tomorrow\'s Task','undefined')
m.set(1,'156')//Here typeof 1 is number 
console.log("map data structure contains these elements ",m)

for(let item of m){
    console.log("this comes with the brackets of each item ",item)
}

for(let [key,value] of m){//destructuring inside by [] otherwise output prinited in brackets
    console.log("After destructuring,so removed bracktets ",key,value)
}
const obj1 = {
    movieName:"RRR",
    cast:"NTR,charan",
    director:"Rajamouli",
    music:"Keervani",
    status:"India"
}

const obj2 = Object.create(obj1)//link to the obj1 but now it is an empty array 
//search in obj2 if the element not found in obj2 then it gets searched in obj1 and return it
obj2.status = "worldwide"
let z = new Map()//U can also pass object as a key
z.set(obj1,{award:"goldenglobe",status:"blockbuster"})
console.log(z)
console.log(z.get(obj1).award)//
console.log(obj1.award)
console.log(obj2.music)
console.log(obj2.status)
//In ECMASCRIPT documentation both __proto__ and [[prototype]] for obj2 proto is obj1 is same
console.log(obj2.__proto__)