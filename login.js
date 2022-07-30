function login(){
    let user = document.getElementById("user").value
    let password = document.getElementById("password").value

    let usuarios = [
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
