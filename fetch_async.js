const link = "https://jsonplaceholder.typicode.com/posts"
//fetch(link)//returns promise,automatically calls get method
// .then(response=>{
//     if(response.ok){
//         console.log(response)
//         return response.json()//returns promise
//     }else{
//         throw new Error("something went wrong...")
//     }
  
// }).then(data=>{
//     console.log(data)
// }).catch(err =>{
//     console.log("error found",err)
// })
const getreq = async ()=>{
    //her if await is not used error gets printed
    const response = await fetch(link)
    if(!response.ok){
        throw new Error("something went wrong in the request")
    }
     const data = await response.json()
     return data
}
getreq()
.then(data => {
    console.log(data)
})
.catch(err=>{
    console.log(err)
})
//Post Method
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then(response=>{
    if(response.ok){
        console.log(response)
        return response.json()//returns promise
    }else{
        throw new Error("something went wrong...")
    }
  
}).then(data=>{
    console.log(data)
}).catch(err =>{
    console.log("error found",err)
})
//similarly check for patch,delete etc.. at json itypecode
