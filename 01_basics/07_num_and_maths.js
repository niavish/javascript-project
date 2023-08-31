const score = 10

const number = new Number(20)

// console.log(score)  // ouput : 10
// console.log(number) /// output : [Number: 20]

// console.log(typeof(number.toString()))  //string
// console.log(number.toString())     //20
// console.log(number.toFixed(2))   // 20.00

// const num2 = 76.32423
// console.log(num2.toPrecision(4))  // Precision taking one arugment as number which focus that particular digits 

// const num3 =1000000000
// console.log(num3.toLocaleString())   ///1,000,000,000
// console.log(num3.toLocaleString('en-IN')) //1,00,00,00,000


/*  Maths  Library*/
console.log(Math) // Object [Math] {}

/* Max= 20 and min=10
 used formula : (Math.random() * (max-min +1)) + min)
*/

const max =20
const min = 10

console.log((Math.random() * (max-min+1))+min)