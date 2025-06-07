const promptSync = require('prompt-sync');
const input = promptSync();

const base: string = input("Ingrese la base del triangulo ");
const altura: string = input("Ingrese la altura del triangulo ");

let b: number = parseInt(base);
let h: number = parseInt(altura);

function calcularAreaTriangulo(b:number,h:number): number {
    return (b*h)/2

}

function mostrarSaludo(nombre:string): void {
    console.log("Hola" + nombre + "Bienvenido al sistema de geometria")
}

let nombreSolicitado: string = input("Ingrese su nombre");
mostrarSaludo(nombreSolicitado)

let area = calcularAreaTriangulo(b,h)
console.log("El area es de:"+ area)