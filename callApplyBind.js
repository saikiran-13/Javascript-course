const obj1 = {
    firstname:"saikiran",
    age:21,
    about :function(phone,status){
        console.log(this.firstname+" "+this.age+" "+phone+" "+status)
    }

}
const obj2 = {
    firstname:"simform",
    age:100,
    data(){
          console.log("The data of object2 "+this.firstname+this.age)
    }
}
console.log(obj1)
obj1.about.call(obj2,5432435545,undefined)//passing another obj2 inside obj1 and other parameters
//apply --> the same thing above can be sent inside the array 
obj1.about.apply(obj2,["243575647",undefined])
//bind returns the function
const store = obj1.about.bind(obj2,4235243524,undefined)//u cannot directly store function without bind,for bind attach function
store()//storing it in the variable and calling it 




