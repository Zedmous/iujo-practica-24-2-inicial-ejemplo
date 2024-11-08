
const colors = require('colors');
const { Matematica } = require("./clases/estadistica");


const estadistica = new Matematica();
console.log("El factorial del numero es: ".green,estadistica.factorial(4));
console.log("La combinatoria es: ".blue,estadistica.combinatoria(0,0))

console.log("x")