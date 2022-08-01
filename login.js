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
    
    function login(){
        let user = document.getElementById("user").value
        let password = document.getElementById("password").value

    for(i = 0; i < usuarios.length; i++){
        if(user == usuarios[i].user && password == usuarios[i].password){
            alert("Usuario correcto")
            document.location.href = "pages/login.html"
            return
        }
    }
    alert("Usuario o contraseña incorrecto")
    document.location.href = "index.html"
}

function registro(){
    let registroUsuario = document.getElementById("nuevoUsuario").value
    let registroPassword = document.getElementById("nuevaPassword").value
    let nuevoUsuario = {
        user: registroUsuario,
        password: registroPassword
    }
    for(i = 0; i < usuarios.length; i++){
        if(registroUsuario == usuarios[i].user){ 
            alert("El nombre ya está registrado, por favor elija otro")
            return
        }
    }
    
    usuarios.push(nuevoUsuario)
    alert("Registro Exitoso")
    console.log(usuarios);
}

