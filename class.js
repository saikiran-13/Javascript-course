class users{
    constructor(name,id,age,location,status){
    this.name = name;
    this.id = id;
    this.age = age;
    this.location = location;
    this.status = status;
    }
    about(){
        console.log(`${this.name} with ${this.id} having age ${this.age} is living in ${this.location},final task --. ${this.status}`)
    }
    taskdone(){
        if(this.status == undefined) return "The task is not assigned";
              else if(this.status == "pending") return "The task is in pending state";
              else return "You have completed the task";

    }
}
const user1 = new users("saikiran",156,21,"bsquare2,doubletree,simformsolutions",undefined)
console.log(user1.taskdone())
user1.about()