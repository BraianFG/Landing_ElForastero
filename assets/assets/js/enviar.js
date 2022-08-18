const formulario = document.querySelector("#formulario");

function datos(dato) {
    dato.preventDefault();

        let datos__enviados = {
            nombres: document.querySelector("#nombres").value,
            apellidos: document.querySelector("#apellidos").value,
            celular: document.querySelector("#celular").value,
            email: document.querySelector("#email").value,
            consulta: document.querySelector("#consulta").value,
            tipoConsulta: document.querySelector("#TipoConsulta").value
        };
        
    if(!datos__enviados.nombres=="" && !datos__enviados.apellidos=="" && !datos__enviados.consulta==""){
        window.location.href = 'https://api.whatsapp.com/send?phone=+5492346418307&text='+
        'Nombre : ' + datos__enviados.nombres +'\n '+
        'Apellidos : ' + datos__enviados.apellidos + '\n '+
        'Celular : ' + datos__enviados.celular + '\n '+
        'Tipo de consulta : ' + datos__enviados.tipoConsulta + '\n '+
        'Email : ' + datos__enviados.email +'\n '+ 
        'Consulta : ' +datos__enviados.consulta;
    }

    if(datos__enviados.nombres==""){
        document.querySelector(".error").innerHTML="No deje su nombre vacio";
    }else{
        document.querySelector(".error").innerHTML="";
    }
    
    if(datos__enviados.apellidos==""){
        document.querySelector(".error2").innerHTML="No deje su apellido vacio";
    
    }else{
        document.querySelector(".error2").innerHTML=""; 
    }

    if(datos__enviados.consulta==""){
        document.querySelector(".error3").innerHTML="Ingrese su consulta";
    
    }else{
        document.querySelector(".error3").innerHTML="";
    }

}
formulario.addEventListener("submit", datos);


