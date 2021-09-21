const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
const firstNumber = prompt("Please enter the first number: ");
const operation  = prompt("(+, -, /, *): ");
const secondNumber = prompt("Please enter the second number: ");
let compute

switch (operation) {
    case '+':
        compute = parseInt(firstNumber) + parseInt(secondNumber)
        break
    case '-':
        compute = parseInt(firstNumber) - parseInt(secondNumber)
        break
    case '/':
        compute = parseInt(firstNumber) / parseInt(secondNumber)
        break
    case '*':
        compute = parseInt(firstNumber) * parseInt(secondNumber)
        break
    default:
        return console.log("The operation is not valid")
}   

result = isNaN(firstNumber) || isNaN(secondNumber) ?
 "The numbers were invalid" : 
`${firstNumber} ${operation} ${secondNumber} = ${compute} `

console.log(result)