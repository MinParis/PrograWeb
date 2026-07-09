const manejarTareas = () => {

    let tareas = obtenerTareas();

    function obtenerTareas(){
        return JSON.parse(localStorage.getItem("tareas")) || [];
    }

    function guardarTareas(){
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }

    function agregarTarea(texto){

        tareas.push({
            tarea:texto
        });

        guardarTareas();
        renderizarTareas();
    }

    function eliminarTarea(indice){

        Swal.fire({
            title:"¿Eliminar tarea?",
            text:"Esta acción no se puede deshacer.",
            icon:"warning",
            showCancelButton:true,
            confirmButtonText:"Sí",
            cancelButtonText:"Cancelar"

        }).then((resultado)=>{

            if(resultado.isConfirmed){

                tareas.splice(indice,1);

                guardarTareas();

                renderizarTareas();

                Swal.fire(
                    "Eliminada",
                    "La tarea fue eliminada correctamente.",
                    "success"
                );

            }

        });

    }

    function renderizarTareas(){

        const lista=document.getElementById("listaTareas");

        lista.innerHTML="";

        tareas.forEach((tarea,indice)=>{

            const li=document.createElement("li");

            li.innerHTML=`
                ${tarea.tarea}
                <button onclick="app.eliminar(${indice})">
                    Eliminar
                </button>
            `;

            lista.appendChild(li);

        });

    }

    return{

        agregar(texto){
            agregarTarea(texto);
        },

        eliminar(indice){
            eliminarTarea(indice);
        },

        mostrar(){
            renderizarTareas();
        }

    };

};

const app = manejarTareas();

document.getElementById("agregar").addEventListener("click",()=>{

    const txt=document.getElementById("tarea");

    const texto=txt.value.trim();

    if(texto===""){

        Swal.fire({
            icon:"error",
            title:"Error",
            text:"Ingrese una tarea."
        });

        return;

    }

    app.agregar(texto);

    txt.value="";

});

app.mostrar();