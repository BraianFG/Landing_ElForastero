const formulario = document.querySelector("#formulario");
let datos__enviados = {};

function datos(dato) {
    dato.preventDefault();
    datos__enviados = {
        nombres: document.querySelector("#nombres").value ,
        apellidos: document.querySelector("#apellidos").value,
        celular: document.querySelector("#celular").value ,
        email: document.querySelector("#email").value ,
        consulta: document.querySelector("#consulta").value ,
    };
    localStorage.setItem("datos", JSON.stringify(datos__enviados));
    
    


    window.location.href="https://api.whatsapp.com/send?phone=+5492346418307&text="+ver+"";
}
formulario.addEventListener("submit", datos);


function validar() {
    datos();
    if (datos__enviados == "") {
        alert("No deje datos sin completar");
    }
    if (datos__enviados[nombres] == "") {
        alert("No deje el nombre vacio");
    }
}




