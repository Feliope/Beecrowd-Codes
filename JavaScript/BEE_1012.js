var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(" ")
var A = parseFloat(lines.shift())
var B = parseFloat(lines.shift())
var C = parseFloat(lines.shift())
console.log(`TRIANGULO: ${((A * C) / 2).toFixed(3)}`)
console.log(`CIRCULO: ${(3.14159 * Math.pow(C,2)).toFixed(3)}`)
console.log(`TRAPEZIO: ${((((A + B) * C) / 2)).toFixed(3)}`)
console.log(`QUADRADO: ${(Math.pow(B,2)).toFixed(3)}`)
console.log(`RETANGULO: ${(A * B).toFixed(3)}`)