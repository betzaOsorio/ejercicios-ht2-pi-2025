const promptSync = require('prompt-sync');
const input = promptSync();

const ingresar: string = input("Ingrese un numero del 1 al 7 ");


const numero: number = parseInt(ingresar);

    switch(numero){
        case 1:
            console.log("Lunes")
            break
            case 2:
                console.log("Martes")
                break
                case 3:
                    console.log("Miercoles")
                    break
                    case 4:
                        console.log("Jueves")
                        break
                        case 5:
                            console.log("Viernes")
                            break
                            case 6:
                                console.log("Sabado")
                                break
                                case 7:
                                    console.log("Domingo")
                                    break
                                    default:
                                        console.log("Dia inválido")

    }

const color:string = input("Ingrese un color de semaforo (verde, amarillo, rojo)")

switch(color){
    case "verde":
        console.log("Puede avanzar")
        break
        case "amarillo":
        console.log("Puede avanzar pero rapido que lo pueden atropellar")
        break
        case "rojo":
            console.log("Puede pasar siempre y cuando no hayan carros")
            break
            default:
                console.log("No es un color del semaforo")

}