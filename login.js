function login(){
    var user = document.getElementById("user").value
    var password = document.getElementById("password").value

    let user = "prueba"
    let password = "123"

    if(usuario==user && password==12345){
        alert("Usuario correcto")
        document.location.href = "login.html"
    }else{
        alert("Usuario o contraseña incorrecto")
        document.location.href = "index.html"
    }
}