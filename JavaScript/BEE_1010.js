var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split("\n")
var line1 = lines.shift().split(" ")
var line2 = lines.shift().split(" ")
var cod1 = parseInt(line1.shift())
var num1 = parseInt(line1.shift())
var valor1 = parseFloat(line1.shift())
var cod2 = parseInt(line2.shift())
var num2 = parseInt(line2.shift())
var valor2 = parseFloat(line2.shift())
console.log(`VALOR A PAGAR: R$ ${((num1 * valor1) + (num2 * valor2)).toFixed(2)}`)