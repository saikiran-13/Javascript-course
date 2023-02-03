//prototype provides the function a seperate empty space where you can add or remove the elements with the help of pointer proto
//if the desired thing is not found in object then proto makes the way to search in prototype
function learn (){
    console.log("learning the prototype")
}
learn()
console.log(learn.name)//returns the name of the function (Every function is a object)
//prototype is an empty object {} you can add or remove any property
console.log(learn.prototype)//only functions have prototype(it is a feature in objects, u can access other object's properties and methods)
//u can also add your own property to the function
learn.addnewprop = "added new property"
console.log("addnewprop",learn)
learn.prototype.company = "simform solutions"//creates a constructor function
learn.prototype.train = function (){
    return "One month of training is completed..."
}
console.log("after adding new property and function by using prototype",learn.prototype,learn.prototype.train())

//Another example
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
  
//   Person.prototype.sayHello = function() {
//     console.log("Hello, my name is " + this.firstName + " " + this.lastName);
//   };
  
//   function Student(firstName, lastName, school) {
//     Person.call(this, firstName, lastName);
//     this.school = school;
//   }
  
//   Student.prototype = Object.create(Person.prototype);
//   Student.prototype.constructor = Student;
  
//   Student.prototype.saySchool = function() {
//     console.log("I go to " + this.school);
//   };
  
//   var john = new Student("John", "Doe", "MIT");
//   john.sayHello(); // outputs "Hello, my name is John Doe"
//   john.saySchool(); // outputs "I go to MIT"

const arr = [1,2,3]//it have access of the prototype
console.log(Object.getPrototypeOf(arr))//output as array
//bts it was created by Array constructor by new keyword internally
console.log(Array.prototype)
//say u have function then the prototype is object and u can change it to another one by assigning

  