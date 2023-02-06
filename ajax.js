//AJAX --> Asynchronous Javascript ans XML
//It is a set of "web development techniques" using many web technologies on the clientside
//to create asynchronous web applications

//With AJAX, web applications can send and retrieve
//data from a server asynchronously(in the background)
//without interfering with the display and
//behaviour of the existing page
//By using an API we request to the server from client
//here we are using fake server by using jsontypeicode


//we don't use data in XML format anymore
//we use JSON now.

//we have 3 most common ways to create and send request to server
//1>xmlHTTPRequest (old way of doing)
//2>fetch API (new way of doing)
//3>axios (this is third party library)

//Routes/Http methods
//GET: read from the server
//POST: post or create some data to server
//PUT: (override)change or update on existing data
//PATCH: do small changes on exisiting data
//DELETE; delete the content on the server

//when you use any httprequest from client,browser automatically use GET method to read the server
const URL = "https://jsonplaceholder.typicode.com/posts"
const xhr = new XMLHttpRequest() //creating an  object for xhr

//check in the images for values
console.log(xhr.readyState)//value 0 means unsent 
xhr.open('GET',URL)//this will connect to server asynchronously in the background by the browser
//if you entered wrong url u will get status code 404 error
//refer status codes (1xx to 5xx)

console.log(xhr.readyState)//value 1
xhr.onreadystatechange = function(){//This function gets invoked when there is change in readystate
    console.log(xhr.readyState)//values 3,4,5
    if (xhr.readystate===4)
    {
        console.log(xhr.response)//The response provided by the server

    }
}
xhr.onload = function(){
    const response = xhr.response //string
    const obj = JSON.parse(response)//type conversion
    console.log(obj)//object
}
xhr.send()

