nums = [354,45,12,78,243,56,1,576]

for(let i =0;i<nums.length;i++){//displaying the array
    console.log(nums[i])
}
console.log()

nums.forEach(element => {//another way of displaying the array elements,it takes 3 parameters (value,index,array)
    console.log(element)
});
console.log()

for(let item of nums){//display the array elements
    console.log(item)
}
console.log()

for(let i in nums){//here i represents the index of the array elements
    console.log(nums[i])
}

company = "simform"//converts any datatype to the array(object)
array = Array.from(company)
console.log(typeof array)