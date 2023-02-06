const URL = "https://jsonplaceholder.typicode.com/posts"
const xhr = new XMLHttpRequest()
xhr.open("GET", URL)
xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.response)//reverse is stringfy
        console.log(data)
        //chaining
        const getid = data[2].id
        console.log(getid)
        const URL2 = `${URL}/${getid}`
        console.log(URL2)
        const xhr2 = new XMLHttpRequest()
        xhr2.open("GET", URL2)
        xhr2.onload = () => {
            const data2 = JSON.parse(xhr2.response)//reverse is stringfy
            console.log(data2)
        }
        xhr2.send()
    }
    else {
        console.log("something went wrong..")
    }
}
xhr.onerror = () => {
    console.log("Network error")
}
xhr.send()
//===========================================================
//promisfy the chaining
const Url = "https://jsonplaceholder.typicode.com/posts"
const Xhr = new XMLHttpRequest()
function sendReq(method, link) {
    return new Promise((resolve, reject) => {
        Xhr.open(method, link)
        Xhr.onload = () => {
            if (Xhr.status >= 200 && Xhr.status < 300) {
                resolve(Xhr.response)
            }
            else {
                reject("something went wrong..")
            }
        }
        xhr.onerror = () => {
            console.log("Network Error")
        }
        Xhr.send()
    })

}
sendReq("GET", Url)
    .then(response => {
        const dataset = JSON.parse(response)
        console.log(dataset)
        return dataset
    }).then(dataset =>{
        let id = dataset[3].id;
        return id
    }).then(id=>{
        let url3 = `${Url}/${id}`
        console.log(url3)
        return sendReq("GET",url3)
    }).then(newresponse=>{
        const dataout = JSON.parse(newresponse)
        console.log(dataout)
    }).catch(msg=>{
        console.log(msg)
    })
