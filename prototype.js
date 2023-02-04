//prototype provides the function a seperate empty space where you can add or remove the elements with the help of pointer proto
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