

let mydate = new Date()
console.log(` ${mydate.getDate()} : ${mydate.getMonth()}: ${mydate.getFullYear()} `)

console.log(`${mydate.getTime()}`)
console.log(`${mydate.getDay()}`)
// console.log(mydate) //2023-08-31T14:32:39.672Z
// console.log(mydate.toDateString()) //Thu Aug 31 2023
// console.log(mydate.toISOString())  //2023-08-31T14:34:22.492Z
// //console.log(mydate.toJSON())
// console.log(mydate.toLocaleDateString())   //8/31/2023


let newDate = new Date(2023, 7, 31)
//console.log(newDate.toLocaleString()) 

// console.log(Date.now()) //Current date in mili seconds
// console.log(Math.floor(Date.now()/1000))
