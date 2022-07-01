function enviar(){
    let nombres = document.querySelector("#nombre").value;
    let apellidos = document.querySelector("#apellido").value;
    let email = document.querySelector("#email").value;
    let celular = document.querySelector("#celular").value;
    let consulta = document.querySelector("#consulta").value;

    window.location.href('https://api.whatsapp.com/message/5MDAP3D7AZLDK1/'+nombres+apellidos+email+celular+consulta+'');

} 
