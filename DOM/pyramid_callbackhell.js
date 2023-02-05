const head1 = document.querySelector(".heading1")
const head2 = document.querySelector(".heading2")
const head3 = document.querySelector(".heading3")
const head4 = document.querySelector(".heading4")
const head5 = document.querySelector(".heading5")
const head6 = document.querySelector(".heading6")
const head7 = document.querySelector(".heading7")

//callback hell
//Nested callbacks-->callback inside callback
//after 1 sec heading 1 executes and withrespect to heading1 after 2sec heading2 changes similarly withrespect to current remaining changes
//This is required after some particular operation we wanna to proceed to next ex:after verifying valid cred show the home page
// setTimeout(()=>{
//     head1.textContent="Heading1"
//     head1.style.color = "Gold"
//     setTimeout(()=>{
//         head2.textContent="Heading2"
//         head2.style.color = "Gold"
//         setTimeout(()=>{
//             head3.textContent="Heading3"
//             head3.style.color = "Gold"
//             setTimeout(()=>{
//                 head4.textContent="Heading4"
//                 head4.style.color = "Gold"
//                 setTimeout(()=>{
//                     head5.textContent="Heading5"
//                     head5.style.color = "Gold"
//                     setTimeout(()=>{
//                         head6.textContent="Heading6"
//                         head6.style.color = "Gold"
//                         setTimeout(()=>{
//                             head7.textContent="Heading7"
//                             head7.style.color = "Gold"
//                         },1000)
//                     },3000)
//                 },2000)
//             },1000)
//         },3000)
//     },2000)
// },1000)
//here we are using success and failure callback along with some parameters
function heading(head, text, color, time, success, failure) {
    setTimeout(() => {
        if (head) {
            head.textContent = text;
            head.style.color = color;
            if (success) {
                success()
            }
        }
        else {
            if (failure) {
                failure()
            }

        }

    }, time)

}

//Callback Hell-->pyramid of doom
heading(head1, "Heading1", "gold", 1000, () => {
    heading(head2, "Heading2", "aqua", 2000, () => {
        heading(head3, "Heading3", "orange", 1000, () => {
            heading(head4, "Heading4", "green", 2000, () => {
                heading(head5, "Heading5", "red", 1000, () => {
                    heading(head6, "Heading6", "yellow", 2000, () => {
                        heading(head7, "Heading7", "blue", 1000, () => {
                        }, () => { console.log("Heading7 doesn't exist") })
                    }, () => { console.log("Heading6 doesn't exist") })
                }, () => { console.log("Heading5 doesn't exist") })
            }, () => { console.log("Heading4 doesn't exist") })
        }, () => { console.log("Heading3 doesn't exist") })
    }, () => { console.log("Heading2 doesn't exist") })
}, () => { console.log("Heading1 doesnot exist") })