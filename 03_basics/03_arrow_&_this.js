/***this() */


const user = {
    username : "Neha",
    price : 9999,

    welcomeMessage: function() {
        console.log(`Welcome ${this.username} and Price :${this.price}`)
    }
}
// user.username = "XYZZZZZZz"
// console.log(user.welcomeMessage())        //Welcome Neha and Price :9999
// console.log(user.welcomeMessage(this))    // Welcome Neha and Price :9999

//console.log(this)   //{}

const youtube = () => {
    let username= "Neha"
    console.log(this.username)
}
//youtube()


/***Arrow function */

// const add = (num1, num2) => {
//     return num1 + num2
// }

// console.log(add(3,8))


/*** Implicit retrun */
const addTwo = (num1, num2) => (num1 +num2)
console.log(addTwo(7,2))


/**Impilict way to return object */
const display = (username) => ( {name : "Neha" })
console.log(display("Vishan"))
