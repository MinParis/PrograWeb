let estudiantes = [];

const txtNombre = document.getElementById("nombre");
const txtCalificacion = document.getElementById("calificacion");

const txtPromedio = document.getElementById("promedio");
const txtMayor = document.getElementById("mayor");
const txtMenor = document.getElementById("menor");

const btnAgregar = document.getElementById("agregar");
const btnCalcular = document.getElementById("calcular");

btnAgregar.addEventListener("click", function(){

    let nombre = txtNombre.value.trim();
    let calificacion = txtCalificacion.value;

    if(nombre === "" || calificacion === ""){
        alert("Complete todos los campos.");
        return;
    }

    calificacion = Number(calificacion);

    if(isNaN(calificacion)){
        alert("Ingrese una calificación válida.");
        return;
    }

    let estudiante = {
        nombre: nombre,
        calificacion: calificacion
    };

    estudiantes.push(estudiante);

    alert("Estudiante agregado correctamente.");

    txtNombre.value = "";
    txtCalificacion.value = "";
});

btnCalcular.addEventListener("click", function(){

    if(estudiantes.length === 0){
        alert("No hay estudiantes registrados.");
        return;
    }

    let suma = estudiantes.reduce(function(total, estudiante){
        return total + estudiante.calificacion;
    },0);

    let promedio = suma / estudiantes.length;

    
    let mayorCalificacion = Math.max(...estudiantes.map(function(estudiante){
        return estudiante.calificacion;
    }));

    let menorCalificacion = Math.min(...estudiantes.map(function(estudiante){
        return estudiante.calificacion;
    }));

    let estudianteMayor = estudiantes.find(function(estudiante){
        return estudiante.calificacion === mayorCalificacion;
    });

    let estudianteMenor = estudiantes.find(function(estudiante){
        return estudiante.calificacion === menorCalificacion;
    });

    txtPromedio.value = promedio.toFixed(2);
    txtMayor.value = estudianteMayor.nombre;
    txtMenor.value = estudianteMenor.nombre;

});