// const methods = {
//     about : function(){
//         console.log(`${this.name} with ${this.id} having age ${this.age} is living in ${this.location},final task --. ${this.status}`)
//     },
//     taskdone :function(){
//         if(this.status == undefined) return "The task is not assigned";
//         else if(this.status == "pending") return "The task is in pending state";
//         else return "You have completed the task";
//     }
    
// }

function createMultipleObjects(name,id,age,location,status){
    // const obj = {}
    const obj = Object.create(createMultipleObjects.prototype)//declaring the obj to check even in prototype space
    obj.name = name;
    obj.id = id;
    obj.age = age;
    obj.location = location;
    obj.status = status;
    // obj.about = methods.about;
    // obj.taskdone = methods.taskdone;
    
    return obj
}
//Adding functions in the prototype space
createMultipleObjects.prototype.about = function (){
    console.log(`${this.name} with ${this.id} having age ${this.age} is living in ${this.location},final task --. ${this.status}`)

}
createMultipleObjects.prototype.taskdone = function(){
              if(this.status == undefined) return "The task is not assigned";
              else if(this.status == "pending") return "The task is in pending state";
              else return "You have completed the task";

}
const  obj1 = createMultipleObjects("saikiran",156,21,"bsquare2,doubletree,simformsolutions",undefined)
const  obj2 = createMultipleObjects("rahul",148,21,"parul university,vadodara,gujarat","pending")
const output = obj1.about()//initially checks inside function createm.. not found check in its proto i.e.,methods gets from that
const result = obj2.taskdone()
console.log(output,result)
