class usuarios{
    constructor(id, user, password){
        this.id = id,
        this.user = user,
        this.password = password
    }
}

const usuarios1 = new usuarios(1, "lucas", 1111)

const usuarios2 = new usuarios(2, "jose", 2222)

const usuarios3 = new usuarios(3, "pablo", 3333)

let listaUsuarios = []

if(localStorage.getItem("listaUsuarios")){
    listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"))
    console.log(listaUsuarios)
}else{
    listaUsuarios.push(usuarios1, usuarios2, usuarios3)
    localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios))
}
console.log(listaUsuarios)

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
    
    
    
    document.querySelector("#btnLogin").addEventListener("click", login);


    
    function login(){
        listaUsuarios = JSON.parse(localStorage["listaUsuarios"])
        let user = document.getElementById("user").value
        let password = document.getElementById("password").value

        for(let i = 0; i < listaUsuarios.length; i++){
            if(user == listaUsuarios[i]["user"] && password == listaUsuarios[i]["password"]){
                console.log("sesion iniciada");
                return
            } 
            // else{
            //     formMensaje(formLogin, "error", "Usuario o contraseña incorrecto")
            //     return
            // }
        }
        
    };
    document.querySelector("#btnRegistrarse").addEventListener("click", registrarse);
    
    function registrarse(){
        let registroUsuario = document.getElementById("nuevoUsuario")
        let registroPassword = document.getElementById("nuevaPassword")
        let nuevoUsuario = new usuarios(listaUsuarios.length+1, registroUsuario.value, registroPassword.value)
        console.log(nuevoUsuario);
        listaUsuarios.push(nuevoUsuario)
        localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios))

        // for(i = 0; i < listaUsuarios.length; i++){
        //     if(registroUsuario === listaUsuarios[i]["user"]){ 
        //         formMensaje(formRegistro, "error", "El usuario ya existe");
        //         return
        //     }

        // }
    }
    
});
        
function formMensaje(elementoForm, tipo, mensaje){
    const elementoMensaje = elementoForm.querySelector(".form_mensaje");
    
    elementoMensaje.textContent = mensaje;
    elementoMensaje.classList.remove("form_mensajeError");
    elementoMensaje.classList.add(`form_mensaje${tipo}`);
}