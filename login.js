function login(){
    var usuario = document.getElementById("user").value
    var password = document.getElementById("password").value

    let user = "prueba"
    let pass = "12345"

    if(usuario==user && password==12345){
        alert("Usuario correcto")
        document.location.href = "./pages/login.html"
    }else{
        alert("Usuario o contraseña incorrecto")
        document.location.href = "index.html"
    }
}