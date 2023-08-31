// Arrays :
 // 1. Concat 

 const veg = ["bhindi", "karela", "tori", "loki" ]
 const fruits = ["Mango", "Banana", "Orange", "Apple"]

//  const fix = veg.concat(fruits)
//  //console.log(`concat : ${fix}`) //combined both arrays together

//  //Spread
//  const sp_arr = [...veg, ...fruits]
//  console.log(`Spread : ${sp_arr}`) //combined 2 arrays together

//Flat 
const fl_arr = [1,2,[3,4,[5,6,],7],8,[9]]
console.log(fl_arr.flat(8))