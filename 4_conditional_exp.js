let age = "45"
console.log(typeof (age))
age = Number.parseInt(age)//type casting converting string to number
console.log(typeof (age))
//prompt doesnt work in node
//if elseif else
if (age > 5 && age < 10) {
    console.log("You are a kid")
}
else if (age < 18) {
    console.log("You are a boy")
}
else if (age > 18) {
    console.log("You are an adult")
}
else {
    console.log("invalid data")
}

//Ternary operator
console.log("You can ",age<18?"cannot vote":"vote")

//switch statements
const day = 4
switch (day) {
    case 1: {
        console.log("Today is sunday")//if we dont use break it will execute all the remaining ones
        break
    }
    case 2: {
        console.log("Today is monday")
        break
    }
    case 3: {
        console.log("Today is tuesday")
        break
    }
    case 4: {
        console.log("Today is wednesday")
        break
    }
    case 5: {
        console.log("Today is thursday")
        break
    }
    case 6: {
        console.log("Today is friday")
        break
    }
    case 7: {
        console.log("Today is saturday")
        break
    }
    default:
        console.log("Enter valid data")
}   