
let factorial = (numero)=>{

    if(numero<0){
        console.log("No esta definido para numeros negativos");
        return 0;
    }else if(numero===0){
        return 1;
    }else{
        return numero+factorial(numero-1);
    }
}

console.log("El factorial del numero es: ",factorial(4))