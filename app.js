const { Matematica } = require("./clases/estadistica");


const estadistica = new Matematica();
console.log("El factorial del nuemro es: ",estadistica.factorial(4));
console.log("La combinatoria es: ",estadistica.combinatoria(0,-1))