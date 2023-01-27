/*Arithmetic,Assignment,Comparision,Logical
Here are the operators explained one by one*/

//Arithmetic +,-,*,/,%,**,++,--
10;//These are all valid.
"saikiran"//These are all valid.
!false//These are all valid.
let a = 10 
let b = 7
console.log("These are some arithmetic operations")
console.log("a / b is ",a/b)//gives the float value of it
console.log("a**b is ",a**b)//exponential
console.log("a++ is ",a++)//prints 10 and after that increment,now value of a becomes 11
console.log("++a is ",++a)//prints 12 as it is preincrement
console.log("--a is ",--a)//prints 11 as it is predecrement
console.log("a-- is ",a--)//prints 11 after this a becomes 10
console.log("a is ",a)//prints 10
console.log()

//Assignment =,+=,-=,*=,/=,%=,**=
console.log("b+=5 is ",b+=5)
console.log("b**=2 is ",b**=2)
console.log()

//Conditional ==,!=,===,!==,>,<,>=,<=,?(ternary opeartor)
let x = 10
let y = "10"
console.log("x == y is ",x==y)//true checks value
console.log("x != y is ",x!=y)//false
console.log("x === y is ",x===y)//false checks value and type of it 
console.log("x !== y is ",x!==y)//true
console.log("x > y is ",x>y)//false
console.log()

//Logical &&,||,!
console.log(x==y && x>5)
console.log(y>5 || !true)
console.log()

//bitwise &,!,^,>>,<<
console.log(2&3)//ANd operation of 10 and 11 gives 10 so 2
console.log(2|3)//or operation of 10 and 11 gives 11 so 3
console.log(!2)//false
console.log(10>>2)//1010 becomes 10 so 2
console.log(3<<2)//0011 becomes 1100 so 12