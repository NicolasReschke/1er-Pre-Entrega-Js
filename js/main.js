let edad = parseFloat(prompt("Ingrese su edad:"));
let monto = 0;
let cantidadCuotas = 0;
let montoAdevolver = 0;
let montoCuota = 0;

if (edad < 18) {
    alert("Eres menor de edad, no puedes obtener un prestamo!");

} else if (edad >= 18) {
    alert("Ud está habilitado para sacar un prestamo!");
    let monto = parseFloat(prompt("Ingrese el monto que quiera pedir prestado:"));
    let cantidadCuotas = parseFloat(prompt("En cuantas cuotas quiere devolverlo?"));
    
        if (cantidadCuotas <= 6) {
            montoCuota = ((monto * 1.5) / cantidadCuotas);
            console.log(monto);
            console.log(cantidadCuotas);
            console.log(montoCuota);
            alert("Ud pagará " + cantidadCuotas + " cuotas fijas de: \n" + "$" + montoCuota);

        } else if (cantidadCuotas > 6 && cantidadCuotas <=12) {
            montoCuota = ((monto * 2) / cantidadCuotas);
            console.log(monto);
            console.log(cantidadCuotas);
            console.log(montoCuota);
            alert("Ud pagará " + cantidadCuotas + " cuotas fijas de: \n" + "$" + montoCuota);

        } else if (cantidadCuotas > 12 && cantidadCuotas <=24) {
            montoCuota = ((monto * 4) / cantidadCuotas);
            console.log(monto);
            console.log(cantidadCuotas);
            console.log(montoCuota);
            alert("Ud pagará " + cantidadCuotas + " cuotas fijas de: \n" + "$" + montoCuota);

        } else if (cantidadCuotas > 24) {
            montoCuota = ((monto * 8) / cantidadCuotas);
            console.log(monto);
            console.log(cantidadCuotas);
            console.log(montoCuota);
            alert("Ud pagará " + cantidadCuotas + " cuotas fijas de: \n" + "$" + montoCuota.toFixed(2));

        } else {
            alert("Ingrese correctamente el monto y la cantidad de cuotas");
        }
} else {
    alert("Ingrese su edad correctamente, por favor.")
}

