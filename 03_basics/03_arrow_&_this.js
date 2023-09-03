/***this() */
const user = {
    username : "Neha",
    price : 9999,

    welcomeMessage: function() {
        console.log(`${this.username} and Price :${this.price}`)
    }
}

user.welcomeMessage