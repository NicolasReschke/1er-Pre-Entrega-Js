let monto;
let cantidadCuotas;
let montoAdevolver;
let montoCuota;
let interes;
let nombre;

const validarNombre = () => {
    let nombre = prompt("Para una atención mas personalizada, ingrese su nombre:").toUpperCase();
    console.log(nombre);
    while ((nombre === "") || (!/^[a-zA-Z]+$/.test(nombre))) {
        nombre = prompt("Ingrese correctamente su nombre:").toUpperCase();
    }
    console.log(nombre);
    return nombre;
}

nombre = validarNombre()
alert("Bienvenido " + nombre + "!!!\n\n" + "A continuación le informamos el interes según la cantidad de cuotas que puede solicitar: \n"
+ "Hasta 6 cuotas: 20% \n"
+ "Entre 7 y 12 cuotas: 40% \n"
+ "Entre 13 y 24 cuotas: 60% \n"
+ "Entre 25 y 48 cuotas: 80% \n"
+ "Más de 48 cuotas: 100%");


// const validarEdad
let edad = parseFloat(prompt("Ingrese su edad:"));

if (edad < 18) {
    alert("Eres menor de edad, no puedes obtener un prestamo!");

} else if (edad >= 18) {
    alert("Ud está habilitado para sacar un prestamo!");
    let monto = parseFloat(prompt("Ingrese el monto que quiera pedir prestado:"));
    let cantidadCuotas = parseFloat(prompt("En cuantas cuotas quiere devolverlo?"));
    
        if (cantidadCuotas <= 6) {
            interes = 1.2;
            montoCuota = ((monto * interes) / cantidadCuotas);
            console.log(monto);
            console.log(cantidadCuotas);
            console.log(montoCuota);
            alert("Ud pagará " + cantidadCuotas + " cuotas fijas de: \n\n" + "$" + (montoCuota.toFixed(2)) 
            + "\n\n" + "El interes es del " + ((interes * 100 -100)) + "%." 
            + "\n" + "Ud. devolverá un total de: $" + (montoCuota * cantidadCuotas));

        } else if (cantidadCuotas > 6 && cantidadCuotas <=12) {
            interes = 1.4;
            montoCuota = ((monto * interes) / cantidadCuotas);
            console.log(monto);
            console.log(cantidadCuotas);
            console.log(montoCuota);
            alert("Ud pagará " + cantidadCuotas + " cuotas fijas de: \n\n" + "$" + (montoCuota.toFixed(2)) 
            + "\n\n" + "El interes es del " + ((interes * 100 -100)) + "%." 
            + "\n" + "Ud. devolverá un total de: $" + (montoCuota * cantidadCuotas));

        } else if (cantidadCuotas > 12 && cantidadCuotas <=24) {
            interes = 1.6;
            montoCuota = ((monto * interes) / cantidadCuotas);
            console.log(monto);
            console.log(cantidadCuotas);
            console.log(montoCuota);
            alert("Ud pagará " + cantidadCuotas + " cuotas fijas de: \n\n" + "$" + (montoCuota.toFixed(2)) 
            + "\n\n" + "El interes es del " + ((interes * 100 -100)) + "%." 
            + "\n" + "Ud. devolverá un total de: $" + (montoCuota * cantidadCuotas));

        } else if (cantidadCuotas > 24 && cantidadCuotas <=48) {
            interes = 1.8;
            montoCuota = ((monto * interes) / cantidadCuotas);
            console.log(monto);
            console.log(cantidadCuotas);
            console.log(montoCuota);
            alert("Ud pagará " + cantidadCuotas + " cuotas fijas de: \n\n" + "$" + (montoCuota.toFixed(2)) 
            + "\n\n" + "El interes es del " + ((interes * 100 -100)) + "%." 
            + "\n" + "Ud. devolverá un total de: $" + (montoCuota * cantidadCuotas));

        } else if (cantidadCuotas > 48) {
            interes = 2;
            montoCuota = ((monto * interes) / cantidadCuotas);
            console.log(monto);
            console.log(cantidadCuotas);
            console.log(montoCuota);
            alert("Ud pagará " + cantidadCuotas + " cuotas fijas de: \n\n" + "$" + (montoCuota.toFixed(2)) 
            + "\n\n" + "El interes es del " + ((interes * 100 - 100)) + "%." 
            + "\n" + "Ud. devolverá un total de: $" + (montoCuota * cantidadCuotas));

        } else {
            alert("Ingrese correctamente el monto y la cantidad de cuotas");

        }
} else {
    alert("Ingrese su edad correctamente, por favor.")
}

