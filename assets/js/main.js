let visitas = 0;
let usuarios = "";
let ver;
usuarios = usuarios.trim();

let click = document.querySelector("#click");
function identificarUsuario() {
        usuarios = prompt("Ingrese su nombre");
        localStorage.setItem("usuarios",  JSON.stringify(usuarios));

    if(usuarios === null || usuarios === ""){
        while(usuarios =="" || usuarios == null){
            alert("Debe ingresar su nombre");
            usuarios = prompt("Ingrese su nombre");
            localStorage.setItem("usuarios",  JSON.stringify(usuarios));
            ver = JSON.parse(localStorage.getItem("usuarios")); 
            document.querySelector("#click").innerHTML="Bienvenido " + ver;
        }
    }else{
        ver = JSON.parse(localStorage.getItem("usuarios"));  
        document.querySelector("#click").innerHTML="Bienvenido " + ver;
    }
}
click.addEventListener("click", identificarUsuario);



function contador(){
    visitas = visitas + 1;
    localStorage.setItem("contador" , JSON.stringify(visitas));
    let vistas = localStorage.getItem("contador");
    document.querySelector("#visitas").innerHTML=" Visitas "+ vistas;
} 
contador();


function iniciar(){
    ver = JSON.parse(localStorage.getItem("usuarios"));  

    if(ver === null || ver === ""){
        document.querySelector(".ver").innerHTML="Haz click para indentificarte";
    }else{
        ver = JSON.parse(localStorage.getItem("usuarios"));  
        document.querySelector("#click").innerHTML="Bienvenido " + ver;
    
    }
}
iniciar();
