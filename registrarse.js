const usuarios = [
    {
        user: "lucas",
        password: "1234"
    },
    {
        user: "jose",
        password: "hola"
    },
    {
        user: "pablo",
        password: "4321"
    }
]


function registrarse(){
    let registroUsuario = document.getElementById("nuevoUsuario").value
    let registroPassword = document.getElementById("nuevaPassword").value
    let nuevoUsuario = {
        user: registroUsuario,
        password: registroPassword
    }
    
    for(i = 0; i < usuarios.length; i++){
        if(registroUsuario === usuarios[i].user){ 
            alert("El nombre ya está registrado, por favor elija otro")
            return
        }
    }


    usuarios.push(nuevoUsuario);

    alert("Registro Exitoso")

    let inicioAhora = prompt("Iniciar sesion ahora?: SI/NO").toLowerCase();

    if(inicioAhora === "si"){
        document.location.href = "login.html"
    }else{
        alert("Vuelva otro dia")
    }

}