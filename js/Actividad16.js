
const sumar = (a, b) => a + b;

const restar = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => b !== 0 ? a / b : "Error: División por cero";



const calcularOperacion = (operacion) => {

    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    if(numero1 === "" || numero2 === ""){
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Debe ingresar ambos números."
        });
        return;
    }

    numero1 = Number(numero1);
    numero2 = Number(numero2);

    if(isNaN(numero1) || isNaN(numero2)){
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Ingrese únicamente valores numéricos."
        });
        return;
    }

    let resultado;

    switch(operacion){

        case "sumar":
            resultado = sumar(numero1, numero2);
            break;

        case "restar":
            resultado = restar(numero1, numero2);
            break;

        case "multiplicar":
            resultado = multiplicar(numero1, numero2);
            break;

        case "dividir":

            if(numero2 === 0){
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "No es posible dividir entre cero."
                });
                return;
            }

            resultado = dividir(numero1, numero2);
            break;

    }

    document.getElementById("resultado").value = resultado;

};