const promptSync = require('prompt-sync');
const input = promptSync();


const segundos: string = input("Cuantos segundos quiere temporizar?");

let seconds: number = parseInt(segundos)

if(isNaN(seconds)||seconds < 0){
    console.log("Ingrese un numero valido")
}else{
    while(seconds>0){
        console.log("Faltan " + seconds + "Segundos")
        seconds--
    }

    console.log("Ya termino el tiempo")
}

let opcion:string

do{
    
    console.log("\n --Menu--")
    console.log("1. saludar")
    console.log("2. Mostrar hora")
    console.log("3.Salir")

    opcion = input("Elige una opcion del menu")


    if(opcion === "1"){
        console.log("Hola, mi nombre es Betza")
    }else if(opcion === "2"){
        const hoy = new Date();
        console.log("La hora es"+ hoy.toLocaleTimeString());

    }else if(opcion !== "3"){
        console.log("la opcion es invalida, Intentelo de nuevo")
    }
}while(opcion !=="3")

    console.log("Porgrama terminado")