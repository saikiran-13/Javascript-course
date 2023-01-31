/*function constructor(){
    var name = "saikiran"
    setTimeout(function(){
        console.log("Operations done")
    },5000)

    this.updatename = function (p1){
        name =p1
        console.log(`The name is updated to ${name}`)
    }

    this.anonymousfn = function (getfunction){
        console.log(getfunction)

    }
}
var call = constructor()
call.updatename("saikiran")
call.anonymousfn(function (){
    console.log('This is an anonymous function')
})*/
document.getElementById("clickME").addEventListener("click",() =>{
    console.log("button clicked")
});
