
//Merging multiple objects into one Object

const obj1 = {1 : "n", 2 : "e", 3: "h"}
const obj2 = {5 : "v", 6: "i", 7: "h"}
//console.log(obj1, obj2) //displayed two different arrays 

//Taking new array : 
const obj3 = Object.assign({},obj1,  obj2)
console.log(obj3)

// const obj4 = {obj1, obj2}
// console.log(obj4)