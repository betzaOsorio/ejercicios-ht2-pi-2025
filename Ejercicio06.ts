const estudiantes = ['Carlos', 'Ana', 'Luis', 'María', 'José']

for (let e = 0; e<estudiantes.length; e++){
    const nombre = estudiantes[e]

    if(nombre.toLowerCase().endsWith("a")){
        console.log("Bienvenida" + nombre )
    }else{
        console.log("Bienvenido" + nombre)
    }
}

const notas = [70, 85, 55, 90, 60]

const suma = notas.reduce((acumulador, nota) => acumulador + nota, 0)
const promedio = suma/ notas.length

console.log("El promedio es de" +Math.round(promedio))