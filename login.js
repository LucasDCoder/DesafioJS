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

    let usuario = usuarios.find(usuario => usuario.user === user && usuario.password === password);

    if(usuario){
        alert("Bienvenido de nuevo")
        document.location.href = "../index.html"
        return
    }else{
        alert("Usuario incorrecto")
        document.location.href = "pages/login.html"
    }
}