
/* Arrays */

const arr1 = new Array(1,2,3,"Neha", "%")
const arr2 = new Array(9,8,7,6,5,4,3)
//console.log(typeof arr)
//console.log(arr)  //[ 1, 2, 3, 'Neha', '%' ]

//Slice
console.log(`Before the slice operation array = ${arr1}`)
console.log(arr1.slice(1,4))
console.log(`After Slice operation array = ${arr1}`)

//SPILCE
console.log(`Before the splice operatio array = ${arr2}`)
console.log(arr2.splice(2, 5))
console.log(`After Splice operation array = ${arr2}`)
