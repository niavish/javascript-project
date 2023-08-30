//Integer conversion
let num1 = 33
let num2 = "33"  
let num3 = true  //boolean

let valueofNumber = Number(num2)

console.log(typeof(num1))
console.log(typeof(num2))
console.log(typeof(valueofNumber))
console.log(valueofNumber)
console.log(typeof(num3))

/*
1. "33" = 33
2. "33abc" = NaN
3. true = 1 ; false =0

*/

//Boolean conversions
let isboolean = " "
let booleanConversion = Boolean(isboolean)
console.log(typeof booleanConversion)
console.log(booleanConversion)


/*
1 = true ; 0= false
7362 = true
""= false
" "= true
"neha"= true
*/

//String consverions

let isString = 33

let stringConversion = String(isString)
console.log(typeof(stringConversion))
console.log(stringConversion)
