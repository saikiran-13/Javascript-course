//DOM tree
const rootnode = document.getRootNode()
console.log(rootnode)
const rootnodecontents = rootnode.childNodes //Contains 2 childnodes in nodelist one html declaration and html
console.dir(rootnodecontents)//as it is object
const htmlelement = rootnodecontents[1].childNodes
const head = htmlelement[0].childNodes
const body = htmlelement[1].childNodes
console.log("Htmlelement:",htmlelement,"head:",head,"body:",body)
console.log(head.parentNode)
let docbody = document.body;
let btn = document.querySelector('button')
let cout = 0
const change = setInterval(()=>{
    let red =   Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue =  Math.floor(Math.random()*255);
    docbody.style.backgroundColor = `rgb(${red},${green},${blue})`
    console.log(red,green,blue)
    cout+=1
    if(cout==10) clearInterval(change)
},1000)
btn.addEventListener('click',()=>{
    clearInterval(change)
    docbody.style.backgroundColor="aqua"
})
