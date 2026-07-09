const txtNumeros = document.getElementById("numeros");
const txtMayor = document.getElementById("mayor");
const txtMenor = document.getElementById("menor");
const txtPromedio = document.getElementById("promedio");
const btnCalcular = document.getElementById("calcular");

btnCalcular.addEventListener("click", function(){

    let entrada = txtNumeros.value.trim();

    if(entrada === ""){
        alert("Ingrese uno o más números.");
        return;
    }

    let arreglo = entrada.split(",");

    let numeros = arreglo.map(function(numero){
        return Number(numero.trim());
    });

    if(numeros.some(isNaN)){
        alert("Ingrese únicamente números separados por comas.");
        return;
    }

    let mayor = Math.max(...numeros);

    let menor = Math.min(...numeros);

    let suma = numeros.reduce(function(acumulador, valor){
        return acumulador + valor;
    }, 0);

    let promedio = suma / numeros.length;

    txtMayor.value = mayor;
    txtMenor.value = menor;
    txtPromedio.value = promedio.toFixed(2);

});