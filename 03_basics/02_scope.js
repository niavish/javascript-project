/* SCOPE

{} is called scope


*/

// let a= 10
// const b = 20
// var c=30

/* Block scope */
if (true){
    let a= 60
   const b = 70
   var c=80
} 
//console.log(` b:${b} c:${c}`)


//*****************Interseting */

//console.log(addOne(5))
function addOne(num) {
    return num +1
}

//console.log(addTwo(5))
const addTwo = function(num) { 
    return num +2
}

console.log(addTwo(5))