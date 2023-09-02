
//functions :

// function display_name () {
//     console.log("Neha")

// }

// display_name()

/* Display two Numbers */
// function addToNumber (num1, num2) {
//     return num1+num2

// }
// console.log(addToNumber(5,7))

/*login */
// function loginUserName(userName) {
//     if(userName ===undefined)
//     return "User is undefined! Please enter user name"
// else if (userName === Number)
//      return "Invaild name! Please valid name"
// else
//     return `${userName} just logged in`
// }
// console.log(loginUserName())

/* shopping card */
// function calculationCard(...num) {      //rest operator for dynamic data handling 
//     return num
// }

// console.log(calculationCard(10, 20, 30, 40, 50))

//Exmaple of rest operator :
// function restExample(val1, val2, ...num) {
//     return num
// }
// console.log(restExample(10,20,30,40,50))


//How to pass object to a function :


const customer = {
    name : "Customer1",
    age : 36
}
function displayCustomer(anyobject) {
    console.log(`Customer Name :${anyobject.name} and Age : ${anyobject.age}`)
}
displayCustomer(customer)