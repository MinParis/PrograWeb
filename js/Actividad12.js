const tasaCambio = 0.055;

const txtPesos = document.getElementById("pesos");
const txtResultado = document.getElementById("resultado");
const btnConvertir = document.getElementById("convertir");

btnConvertir.addEventListener("click", function(){

    let pesos = txtPesos.value;

    if(pesos === ""){
        alert("Ingrese una cantidad.");
        return;
    }

    pesos = Number(pesos);

    if(pesos <= 0){
        alert("Ingrese un número mayor que cero.");
        return;
    }

    let dolares = pesos * tasaCambio;

    txtResultado.value = dolares.toFixed(2) + " USD";

});