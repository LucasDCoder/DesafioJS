document.addEventListener("DOMContentLoaded", () => {
    const formLogin = document.querySelector("#login")
    const formRegistro = document.querySelector("#registro")
    
    document.querySelector("#linkRegistro").addEventListener("click", e =>{
        e.preventDefault();
        formLogin.classList.add("form-ocultar");
        formRegistro.classList.remove("form-ocultar");
    });
    
    document.querySelector("#linkLogin").addEventListener("click", e =>{
        e.preventDefault();
        formLogin.classList.remove("form-ocultar");
        formRegistro.classList.add("form-ocultar");
    });
    
    formLogin.addEventListener("submit", e =>{
        e.preventDefault();
        
        formMensaje(formLogin, "error", "Usuario o contraseña incorrecto");
    });

    
    document.querySelector("#btnLogin").addEventListener("click", login);

    function login(){
    let user = document.getElementById("user").value
    let password = document.getElementById("password").value
    
    let usuario = usuarios.find(usuario => usuario.user === user && usuario.password === password);
    
    if(usuario){
        document.location.href = "./pages/login.html"
        return
    }
    
    };
    document.querySelector("#btnRegistrarse").addEventListener("click", registrarse);

    function registrarse(){
    let registroUsuario = document.getElementById("nuevoUsuario").value
    let registroPassword = document.getElementById("nuevaPassword").value
    let nuevoUsuario = {
        user: registroUsuario,
        password: registroPassword
    }
    
    for(i = 0; i < usuarios.length; i++){
        if(registroUsuario === usuarios[i].user){ 
            formMensaje(formRegistro, "error", "El usuario ya existe");
            return
        }
    }


    usuarios.push(nuevoUsuario);
    console.log(usuarios);
    }

});

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




function formMensaje(elementoForm, tipo, mensaje){
    const elementoMensaje = elementoForm.querySelector(".form_mensaje");

    elementoMensaje.textContent = mensaje;
    elementoMensaje.classList.remove("form_mensajeError");
    elementoMensaje.classList.add(`form_mensaje${tipo}`);
}
