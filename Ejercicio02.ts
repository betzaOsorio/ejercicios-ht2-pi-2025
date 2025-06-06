const promptSync = require('prompt-sync');
const input = promptSync();

const nombreProducto: string = input("Ingrese el nombre del producto: ");
const precioProducto: string = input("Ingrese el precio del producto: ");
const porcentajeDescuento: string = input("Ingrese el porcentaje de descuento que desea aplicar ");

const precio: number = parseInt(precioProducto);
const descuento: number = parseInt(porcentajeDescuento);

const resultado:number = precio-(precio*(descuento/100))

console.log("Nombre Producto"+ nombreProducto)
console.log("precioProducto"+precio)
console.log("El precio final con descuento es:"+ resultado)


const altura: string = input("Ingrese su altura en centimetros: ");
const alturacenti: number = parseInt(altura);

if(alturacenti>=120 && alturacenti<=200){
    console.log("se puede subir a los juegos")
}else{
    console.log("No se puede subir a los juegos")
}