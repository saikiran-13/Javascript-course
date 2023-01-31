//calculating the diameter,radius and circumference of the circle
circles = [5,10,20,25]//list of radius of circles

function diameter(radius){
    return 2 * radius
}

function area(radius){
    return Math.PI * radius * radius
}

function circumference(radius){
    return  2 * Math.PI * radius
}

function calculate(logic,r_circles=circles){
    result = []
    console.log(logic)
    for(i=0;i<r_circles.length;i++){
        result.push(logic(r_circles[i]))
    }
    return result
    
}
console.log("The Diameter of the circles are:",calculate(diameter))
console.log("The Area of the circles are:",calculate(area))
console.log("The Circumference of the circles are:",calculate(circumference))

//also do in simple manner remove the comments of below 3 lines done using map and add comment to function calculate to till circumference
//we have implemented the same map function above i.e., created empty list,iterated through list and applied formula and returned it
// console.log(circles.map(diameter))
// console.log(circles.map(area))
// console.log(circles.map(circumference))
//================================================================================//
Array.prototype.cal = function(logic,r_circles=circles){
    result = []
    console.log(logic)
    for(i=0;i<r_circles.length;i++){
        result.push(logic(r_circles[i]))
    }
    return result
    
}
console.log(circles.cal(diameter))//just like map done by using array.prototype