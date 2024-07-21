const upperCase = require("upper-case").upperCase

function greet(name) {
    console.log(upperCase(`Hello ${name}, welcome to my custom package`))

}

greet("Evans")
module.exports = greet;