/*
Two types of memory in JS
1. stack memory (--primitive data types comes under stack memoery -- In Stack memory always share the copy of the variable)
2. Heap memory (--Non-primitive data comes under heap memory --ist takes the refernece of the varibale i.e. Original value)

*/

//Stack memory example
let stackValue1 = "Neha"

let stackValue2 = stackValue1
stackValue2 = "Vishan" // share the copy of the varibale, does not change the original value 

console.log(stackValue1)
console.log(stackValue2)

// Heap memory exmaple
let heapValue1 = {
    age : 30,
    email : "xyz@gmail.com"
}

let heapValue2 = heapValue1
heapValue2.age = 35 // Change the original value

console.log(heapValue1.age)
console.log(heapValue2.age)