const txtEdad = document.getElementById("edad");
const txtResultado = document.getElementById("resultado");
const btnVerificar = document.getElementById("verificar");

btnVerificar.addEventListener("click", function(){

    let edad = txtEdad.value;

    if(edad === ""){
        alert("Por favor ingrese una edad.");
        return;
    }

    edad = Number(edad);

    if(edad <= 0){
        alert("Ingrese una edad válida.");
        return;
    }

    if(edad >= 18){
        txtResultado.value = "Puedes votar";
    }else{
        txtResultado.value = "No puedes votar";
    }

});