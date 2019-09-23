function validarCorreo(){
    var correo = document.getElementById("mail").nodeValue;

    if(correo == null || correo.length == 0 || !(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3,4})+$/.test(correo))){
        alert("Formato de Correo inválido");
    }
}