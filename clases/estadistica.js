
class Matematica{

    constructor(){

    }

    factorial=(numero)=>{

        if(numero<0){
            console.log("No esta definido para numeros negativos")
            return 0;
        }else if(numero===0){
            return 1;
        }else{
            return numero*this.factorial(numero-1)
        }
    }

    combinatoria=(n,r)=>{

        const numerador = this.factorial(n);
        const denominador = this.factorial(r)*this.factorial(n-r);
        if(denominador===0){
            console.log("No es posible calcular la combinatoria");
            return;
        }
        if(r>n || n<0 || r<0){
            console.log("No es posible calcular la combinatoria: Parametros incorrectos");
            return;
        }
        return numerador/denominador;
    }
}

module.exports={
    Matematica
}