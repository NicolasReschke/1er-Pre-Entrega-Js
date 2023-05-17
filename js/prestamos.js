let nombre;
let edad;
let monto;
let cantidadCuotas;
let montoAdevolver;
let montoCuota;
let interes;

const validarNombre = () => {
    let nombre = prompt("Para una atención mas personalizada, ingrese su nombre:").toUpperCase();
    console.log(nombre);
    while ((nombre === "") || (!/^[a-zA-Z]+$/.test(nombre))) {
        nombre = prompt("Ingrese correctamente su nombre:").toUpperCase();
    }
    console.log(nombre);
    return nombre;
}

nombre = validarNombre();
alert("Bienvenido " + nombre + "!!!\n\n" + "A continuación le informamos el interes según la cantidad de cuotas que puede solicitar: \n"
+ "Hasta 6 cuotas: 20% \n"
+ "Entre 7 y 12 cuotas: 40% \n"
+ "Entre 13 y 24 cuotas: 60% \n"
+ "Entre 25 y 48 cuotas: 80% \n"
+ "Más de 48 cuotas: 100%");


const validarEdad = () => {
    let edad;
    do {
        edad = parseFloat(prompt("Ingrese su edad:"));
    } while (isNaN(edad));
    console.log(edad);
    return edad;
};

edad = validarEdad();

if (edad < 18) {
    alert("Eres menor de edad, no puedes obtener un prestamo!");

} else if (edad >= 18) {
    alert("Ud. está habilitado para sacar un prestamo!");

    const validarMonto = () => {
        let monto = parseFloat(prompt("Ingrese el monto que quiera pedir prestado:"));
        console.log(monto);
        while ((monto === "") || (isNaN(monto))) {
            monto = prompt("Ingrese correctamente el monto:");
        }
        console.log(monto);
        return monto;
    }
    monto = validarMonto();

    const validarCantidadCuotas = () => {
        let cantidadCuotas = parseFloat(prompt("Ingrese la cantidad de cuotas:"));
        console.log(cantidadCuotas);
        while ((cantidadCuotas === "") || (isNaN(cantidadCuotas))) {
            cantidadCuotas = prompt("Ingrese correctamente la cantidad de cuotas:");
        }
        console.log(cantidadCuotas);
        return cantidadCuotas;
    }
    cantidadCuotas = validarCantidadCuotas();
    
        if (cantidadCuotas <= 6) {
            interes = 1.2;
            montoCuota = ((monto * interes) / cantidadCuotas);
            console.log(monto);
            console.log(cantidadCuotas);
            console.log(montoCuota);
            alert("Ud pagará " + cantidadCuotas + " cuotas fijas de: \n\n" + "$" + (montoCuota.toFixed(2)) 
            + "\n\n" + "El interes es del " + ((interes * 100 -100)) + "%." 
            + "\n" + "Ud. devolverá un total de: $" + (montoCuota * cantidadCuotas).toFixed(2));

        } else if (cantidadCuotas > 6 && cantidadCuotas <=12) {
            interes = 1.4;
            montoCuota = ((monto * interes) / cantidadCuotas);
            console.log(monto);
            console.log(cantidadCuotas);
            console.log(montoCuota);
            alert("Ud pagará " + cantidadCuotas + " cuotas fijas de: \n\n" + "$" + (montoCuota.toFixed(2)) 
            + "\n\n" + "El interes es del " + ((interes * 100 -100)) + "%." 
            + "\n" + "Ud. devolverá un total de: $" + (montoCuota * cantidadCuotas).toFixed(2));

        } else if (cantidadCuotas > 12 && cantidadCuotas <=24) {
            interes = 1.6;
            montoCuota = ((monto * interes) / cantidadCuotas);
            console.log(monto);
            console.log(cantidadCuotas);
            console.log(montoCuota);
            alert("Ud pagará " + cantidadCuotas + " cuotas fijas de: \n\n" + "$" + (montoCuota.toFixed(2)) 
            + "\n\n" + "El interes es del " + ((interes * 100 -100)) + "%." 
            + "\n" + "Ud. devolverá un total de: $" + (montoCuota * cantidadCuotas).toFixed(2));

        } else if (cantidadCuotas > 24 && cantidadCuotas <=48) {
            interes = 1.8;
            montoCuota = ((monto * interes) / cantidadCuotas);
            console.log(monto);
            console.log(cantidadCuotas);
            console.log(montoCuota);
            alert("Ud pagará " + cantidadCuotas + " cuotas fijas de: \n\n" + "$" + (montoCuota.toFixed(2)) 
            + "\n\n" + "El interes es del " + ((interes * 100 -100)) + "%." 
            + "\n" + "Ud. devolverá un total de: $" + (montoCuota * cantidadCuotas).toFixed(2));

        } else if (cantidadCuotas > 48) {
            interes = 2;
            montoCuota = ((monto * interes) / cantidadCuotas);
            console.log(monto);
            console.log(cantidadCuotas);
            console.log(montoCuota);
            alert("Ud pagará " + cantidadCuotas + " cuotas fijas de: \n\n" + "$" + (montoCuota.toFixed(2)) 
            + "\n\n" + "El interes es del " + ((interes * 100 - 100)) + "%." 
            + "\n" + "Ud. devolverá un total de: $" + (montoCuota * cantidadCuotas).toFixed(2));
        
        } else {
            alert("Ingrese correctamente el monto y la cantidad de cuotas");
        }
} 

