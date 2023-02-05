//everything is a object 
console.log(window.Object)
//getElementById works in order to select an element
console.log(typeof document.getElementById("h1"))

//query selector works for everything id,classes etc...
//difference between textContent and innerText is :
// 1>textContent selects the content of everything even it is hidden and displayed in console
// 2>innerText select the visible part of your text and rest of it neglected in the console.
const address = document.querySelector(".add")
console.log("by using textcontent --> ",address.textContent)
console.log("by using innerText --> ",address.innerText)

const country = document.querySelector("#mycountry")
console.log(country.textContent)//text manipulation
country.textContent = "Enter Your country"//changing name from select your country to this as text content selects the text in the element
console.log(country.textContent)

//get and set attribute from element
const input = document.querySelector("input")
console.log(input.getAttribute("type"))
const link = document.querySelector(".link a")
console.log(link.getAttribute("href").slice(1))//u can also remove the content from the values using slice
console.log(link.setAttribute("href","https://google.com"))

const alert = document.querySelector("div.alert button")//selecting alert box
alert.style.color = "aqua"
alert.style.backgroundColor = "gray"//snakecase is invalid(background-color) throws error,so use camelcase 

//QuerySelectorAll and getelementbyclass 
//queryselectorAll returns a nodelist which is array u can use slice,splice,map,filter etc...
//getElementByClass retuns a HTMLcollection which is arrayLikeObject like u can use indexing,length but cannot slice,splice etc...
//We also have getElementByTagName 
let navitems = document.querySelectorAll(".list-item")
console.log(navitems)//it will select all navitems.if u use only queryselector then after finding the first element class it will stop not select all
let items  = document.getElementsByClassName("list-item")
console.log(items)

//Iterating through the items in the HTML collection u can use for or forof loop but not forEach 
for(let i=0;i<items.length;i++){
    let item = items[i];
    item.style.backgroundColor = "#da614e"
}
//u can change items into array and check the type of it
// navitems.forEach((ele)=>{
//     console.log(ele)
// })
console.log(Array.isArray(items))
items = Array.from(items)
console.log(Array.isArray(items))

//innerHTML
let htmlcontent = document.querySelector(".content")//selects the html content inside the container u declared and can modify it
console.log("before",htmlcontent.innerHTML)
htmlcontent.innerHTML="The content is deleted" + "<br class =\"btn\"><button>Let's go</button>"//modifying the content inside the div cotent 
console.log("after",htmlcontent.innerHTML)