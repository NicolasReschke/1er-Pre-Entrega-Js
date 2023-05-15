let edad = parseFloat(prompt("Ingrese su edad:"));
let monto = 0;
let cantidadCuotas = 0;
let montoAdevolver = 0;
let montoCuota = 0;
let interes = 0;

if (edad < 18) {
    alert("Eres menor de edad, no puedes obtener un prestamo!");

} else if (edad >= 18) {
    alert("Ud está habilitado para sacar un prestamo!");
    let monto = parseFloat(prompt("Ingrese el monto que quiera pedir prestado:"));
    let cantidadCuotas = parseFloat(prompt("En cuantas cuotas quiere devolverlo?"));
    
        if (cantidadCuotas <= 6) {
            interes = 1.5;
            montoCuota = ((monto * interes) / cantidadCuotas);
            console.log(monto);
            console.log(cantidadCuotas);
            console.log(montoCuota);
            alert("Ud pagará " + cantidadCuotas + " cuotas fijas de: \n\n" + "$" + (montoCuota.toFixed(2)) 
            + "\n\n" + "El interes es del " + ((interes * 100 -100)) + "%." 
            + "\n" + "Ud. devolverá un total de: $" + (montoCuota * cantidadCuotas));

        } else if (cantidadCuotas > 6 && cantidadCuotas <=12) {
            interes = 2;
            montoCuota = ((monto * interes) / cantidadCuotas);
            console.log(monto);
            console.log(cantidadCuotas);
            console.log(montoCuota);
            alert("Ud pagará " + cantidadCuotas + " cuotas fijas de: \n\n" + "$" + (montoCuota.toFixed(2)) 
            + "\n\n" + "El interes es del " + ((interes * 100 -100)) + "%." 
            + "\n" + "Ud. devolverá un total de: $" + (montoCuota * cantidadCuotas));

        } else if (cantidadCuotas > 12 && cantidadCuotas <=24) {
            interes = 3;
            montoCuota = ((monto * interes) / cantidadCuotas);
            console.log(monto);
            console.log(cantidadCuotas);
            console.log(montoCuota);
            alert("Ud pagará " + cantidadCuotas + " cuotas fijas de: \n\n" + "$" + (montoCuota.toFixed(2)) 
            + "\n\n" + "El interes es del " + ((interes * 100 -100)) + "%." 
            + "\n" + "Ud. devolverá un total de: $" + (montoCuota * cantidadCuotas));

        } else if (cantidadCuotas > 24 && cantidadCuotas <=48) {
            interes = 4;
            montoCuota = ((monto * interes) / cantidadCuotas);
            console.log(monto);
            console.log(cantidadCuotas);
            console.log(montoCuota);
            alert("Ud pagará " + cantidadCuotas + " cuotas fijas de: \n\n" + "$" + (montoCuota.toFixed(2)) 
            + "\n\n" + "El interes es del " + ((interes * 100 -100)) + "%." 
            + "\n" + "Ud. devolverá un total de: $" + (montoCuota * cantidadCuotas));

        } else if (cantidadCuotas > 48) {
            interes = 5;
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

