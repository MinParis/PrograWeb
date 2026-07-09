
const input = document.getElementById("nuevoElemento");

const botonAgregar = document.getElementById("agregarBtn");

const lista = document.getElementById("lista");



function agregarElemento(){

    const texto = input.value.trim();

    if(texto === ""){

        alert("Escriba un elemento.");

        return;

    }


    const li = document.createElement("li");

    li.classList.add("list-group-item");

    li.textContent = texto;


    const botonEliminar = document.createElement("button");

    botonEliminar.textContent = "Eliminar";

    botonEliminar.classList.add("btn","btn-danger","btn-sm");

    botonEliminar.addEventListener("click",function(){

        li.remove();

    });


    li.appendChild(botonEliminar);


    lista.appendChild(li);


    input.value="";

}


botonAgregar.addEventListener("click",agregarElemento);