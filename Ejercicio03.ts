import promptSync from 'prompt-sync';
const input = promptSync();

// Solicita la fecha de nacimiento
const nacimiento: string = input("Ingrese su fecha de nacimiento en el formato YYYY-MM-DD: ");
const fechaNacimiento: Date = new Date(nacimiento);
const fechaHoy: Date = new Date();

if (isNaN(fechaNacimiento.getTime())) {
    console.log("Fecha inválida.");
} else {
    let edad: number = fechaHoy.getFullYear() - fechaNacimiento.getFullYear();

    // Ajustar si el cumpleaños no ha ocurrido aún este año
    const mesActual = fechaHoy.getMonth();
    const diaActual = fechaHoy.getDate();
    const mesNacimiento = fechaNacimiento.getMonth();
    const diaNacimiento = fechaNacimiento.getDate();

    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
        edad--;
    }

    // Clasifica según la edad
    if (edad < 12) {
        console.log("Eres un niño");
    } else if (edad >= 12 && edad <= 17) {
        console.log("Eres un adolescente");
    } else if (edad >= 18 && edad <= 64) {
        console.log("Eres un adulto");
    } else {
        console.log("Eres un adulto mayor");
    }
}

// Solicita la calificación
const calificacion: string = input("Ingrese su nota: ");
const nota: number = parseInt(calificacion);

if (isNaN(nota)) {
    console.log("Nota inválida.");
} else {
    if (nota >= 90) {
        console.log("A");
    } else if (nota >= 80) {
        console.log("B");
    } else if (nota >= 70) {
        console.log("C");
    } else if (nota >= 60) {
        console.log("D");
    } else {
        console.log("F");
    }
}
