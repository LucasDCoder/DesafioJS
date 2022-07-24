function login(){
    var user = document.getElementById("user").value
    var password = document.getElementById("password").value

    let user = "prueba"
    let password = "123"

    if(usuario==user && password==123){
        alert("Usuario correcto")
        document.location.href = "Login.html"
    }else{
        alert("Usuario o contraseña incorrecto")
        document.location.href = "index.html"
    }
}