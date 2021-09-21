const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
const firstNumber = prompt("Please enter the first number: ");
const operation  = prompt("(+, -, /, *): ");
const secondNumber = prompt("Please enter the second number: ");
let compute

if ( isNaN(firstNumber) || isNaN(secondNumber) ) {
    return console.log("The numbers were invalid")
};
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


console.log(`${firstNumber} ${operation} ${secondNumber} = ${compute} `);

