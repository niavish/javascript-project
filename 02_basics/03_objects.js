// How to create symbol
const sym = Symbol("Key1")

const ex1 = {
    name : "Neha",
    city : "Delhi",
    email : "neha@google.com",
    mobile_number : 6280431147,
    working_day : ["Mon", "Tue", "Wed", "Thru"],
    [sym] : "My_key"
}
ex1.city = "Rohtak"
//Object.freeze(ex1)

// console.log(ex1["name"])
// console.log(ex1["mobile_number"])
// console.log(ex1["working_day"])


// console.log(ex1)
// console.log(typeof ex1[sym])

ex1.greeting = function() {
    console.log(`Hello World! ${this.name}`)
}
