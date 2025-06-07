interface Usuario{
    nombre: string
    edad: number
    activo: boolean
    correo?: string
}

interface InformacioLogIn{
    correo: string
    clave: string
    recaptcha: boolean
}

const usuarioActual: Usuario = {
    nombre: "Betza",
    edad: 18,
    activo:true,
    correo: "Bet@gmail.com"
}

function loguear(Info: InformacioLogIn): void{
    const{ correo, clave, recaptcha} = Info

    const correoCorrecto = correo.includes("@") && correo.includes(".")
    const claveCorrecta = clave.length >=6
    const recaptchaCorrecto = recaptcha ==true

    if(correoCorrecto && claveCorrecta && recaptchaCorrecto){
        console.log("Se permite el acceso")
    }else{
        console.log("Se equivoco de datos")
    }
}

const datosLogin: InformacioLogIn = {
    correo: "carlos@gamil.com",
    clave: "BubuElConsentido",
    recaptcha: true
}

loguear(datosLogin)