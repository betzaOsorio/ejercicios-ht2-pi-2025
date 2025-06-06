/*Completa el siguiente programa para que:

Solicite al usuario que ingrese su nombre, edad, y si está activo (true/false).

Declare tres variables para almacenar estos valores.

Imprima en consola un mensaje como:

Hola, me llamo Ana, tengo 25 años y estoy activa: true
Luego, imprime el tipo de cada una de las variables usando typeof.

Finalmente, declara dos variables adicionales:

let valorNulo = null
let valorNoAsignado
E imprime sus tipos.*/

// Importación del paquete prompt-sync para Node.js aqui me tuve que ayudar con 
// una IA ya que no me cargaba el codigo, por eso esta este codigo asi
const promptSync = require('prompt-sync');
const input = promptSync();


//aquie declare las variables con su tipo de dato primitivo
const nombre: string = input("Ingrese su nombre: ");
const edadTexto: string = input("Ingrese su edad: ");
const activoTexto: string = input("¿Está activo? (si/no): ");

// Conversión de edad a número
const edadnacido: number = parseInt(edadTexto);

// Conversión de texto a booleano
const actividad: boolean = activoTexto.toLowerCase() === "si";

// Mostrar resultados
console.log("Nombre:", nombre);
console.log("Edad:", edadnacido);
console.log("¿Activo?:", actividad);


