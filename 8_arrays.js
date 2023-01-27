//Arrays are mutable they can be changed
arr = [1,2,3,"simform",null]
console.log(arr)
arr[3]=156
console.log(arr[0])
console.log(arr[1])
console.log(arr[3])
console.log(arr[6])
console.log(arr)
console.log(arr.length)
console.log(typeof arr)
names = ["sai","kiran","simform","antariksh colony"]

str = names.toString()//converts the array into string
console.log("the type of the str is: ",typeof str)

console.log(arr.join(","))//Joins each element by the symbol given inside the brackets
console.log("After joining the values with ,",arr)

arr.pop()//removes the last element
console.log("removed the last element")

arr.push("last")//adds the element at the last
console.log("pushed last tot the arr ",arr)

removed = arr.shift()//removes the element at the beginning and stores the removed element
console.log("The first value is removed ",removed,"updated array ",arr)

added = arr.unshift(34)//adds the element and store the new length of the array
console.log("An element is added ",added,"updated array",arr)

arr2=[1,2,3,4,5,6,7,8,9]
delete arr2[2]
console.log("after deleting the 3rd element ",arr2,arr2.length)//Most imp after deleting array length never changes,it says empty item

arr3 = []
arr3 = arr3.concat(arr,arr2)//concat one or more arrays
console.log("combining arr and arr2",arr3)

arr3 = [1,2,63,24,5,10,1,16,7,8,9,0]
arr3.sort()//sort the array in the ascending order and changes the original array
console.log("after sorting in increasing order",arr3)

const compare = (a,b)=>{
return b-a
}
arr3.sort(compare)//sort the array in the descending order
console.log(arr3)

arr3.reverse()//reverse the entire array
console.log("after sorting in decreasing order",arr3)

let splice_values = arr3.splice(3,4,143,54,123,333)//(start_position,no of elements to be deleted,adding items->item1,item2,item3......)
console.log("removed values are: "+splice_values)
console.log(arr3)

let slice_array = arr3.slice(2,7)//creates the subarray of original array starting from the index 2 till index 6
console.log("new slice Array is ",slice_array)

