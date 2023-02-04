class Family{
    constructor(name,age,location){
        this.name = name;
        this.age = age;
        this.location = location;
    }

    personAge(){
        console.log(`${this.name} age is ${this.age}`)
    }
    
    personLocation(){
        console.log(`${this.name} is living in ${this.location}`)
    }

}

class human extends Family{//inheritance can be acheived by using extend keyword
    constructor(name,age,location,extradetail){
        super(name,age,location);
        this.extradetail = extradetail;
    }
    get personinfo(){//get can make your method as property u can directa access with dot no need of brackets(error)
        return "THis is used for example for getter"
    }
    persondetail(){
        console.log(`${this.extradetail}`)
    }
}

let Grandparent = new Family("Ravinathan",80,"balchai")
const parent = new human("Ram krishna",45,"vadodara","Be here Be vibrant")
console.log(Grandparent.personLocation())
console.log(parent.persondetail())
console.log(parent.personinfo)