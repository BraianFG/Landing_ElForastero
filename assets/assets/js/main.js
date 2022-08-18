let visitas = 0;
let usuarios = "";
let ver;
visitas = parseInt(visitas);
usuarios = usuarios.trim();

let click = document.querySelector("#TITLE");
function identificarUsuario() {
    usuarios = prompt("Ingrese su nombre");
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    if (usuarios === null || usuarios === "") {
        while (usuarios == "" || usuarios == null) {
            alert("Debe ingresar su nombre para identificarse");
            usuarios = prompt("Ingrese su nombre");
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            ver = JSON.parse(localStorage.getItem("usuarios"));
            document.querySelector("#TITLE").innerHTML = "Bienvenido " + ver;
        }
    } else {
        ver = JSON.parse(localStorage.getItem("usuarios"));
        document.querySelector("#TITLE").innerHTML = "Bienvenido " + ver;
    }
}
click.addEventListener("click", identificarUsuario);


function contador() { 
    visitas = localStorage.getItem('contador') || 1;
    visitas++;
    localStorage.setItem("contador", JSON.stringify(visitas));
    document.querySelector("#visitas").innerHTML = 'Visitas : ' + visitas;
}
contador();

function iniciar() {
    ver = JSON.parse(localStorage.getItem("usuarios"));

    if (ver === null || ver === "") {
        document.querySelector(".ver").innerHTML = "Haz click para indentificarte";
    } else {
        ver = JSON.parse(localStorage.getItem("usuarios"));
        document.querySelector("#TITLE").innerHTML = "Bienvenido " + ver;

    }
}
iniciar();
